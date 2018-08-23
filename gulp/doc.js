const del = require('del');
const gulp = require('gulp');
const change = require('gulp-change');
const jsdoc2md = require('jsdoc-to-markdown');
const rename = require('gulp-rename');
const fs = require('fs');
const map = require('map-stream');

const dir = {
  parent: `${__dirname}/../`,
  docSrc: `${__dirname}/../doc-src/`,
  doc: `${__dirname}/../docs/_posts/`,
  sass: `${__dirname}/../docs/_sass/`,
  nodeModules: `${__dirname}/../node_modules/`
};
const documentationPreprocessors = [
  {
    pattern: /\/[*][*]((?:a|[^a])*?)@(type|param|return)\s*[{]([^}]*?)([a-zA-Z0-9_., *<>|]+)\[\]([^}]*)[}]((a|[^a])*)[*]\//g,
    replace: '/**$1@$2 {$3Array<$4>$5}$6*/'
  },
  {
    pattern: /\/[*][*]((?:a|[^a])*?)[{]@code(?:link)? ([^}]*)[}]((a|[^a])*)[*]\//g,
    replace: '/**$1<code>$2</code>$3*/'
  },
  {
    pattern: /^\s*export\s+default\s+/gm,
    replace: ''
  }
];
let config;

module.exports = gulpConfig => {
  config = gulpConfig;

  return gulp.series(docClear, docPreprocess, docGenerate, docAssets, docClean);
};

function docClear() {
  return del([dir.docSrc, dir.doc]);
}

function docPreprocess() {
  return gulp
    .src(config.files.js)
    .pipe(
      change(content => {
        let oldContent = null;

        while (content !== oldContent) {
          oldContent = content;
          for (let preprocessor of documentationPreprocessors) {
            let { pattern, replace } = preprocessor;
            content = content.replace(pattern, replace);
          }
        }

        return content;
      })
    )
    .pipe(rename(file => (file.extname = '.js')))
    .pipe(gulp.dest(dir.docSrc));
}

function docGenerate(done) {
  const filenamePrefix = new Date().toISOString().slice(0, 10);
  fs.mkdirSync(dir.doc);

  gulp
    .src([`${dir.docSrc}**/*.{js,jsx}`], {
      read: false
    })
    .pipe(
      map((file, callback) => {
        const output = jsdoc2md.renderSync({
          files: file.path,
          separators: true
        });
        const filename = file.relative
          .replace(/(\/|.jsx|.js)/g, '')
          .replace(/([a-zA-Z])(?=[A-Z])/g, '$1-')
          .toLowerCase();

        fs.writeFileSync(`${dir.doc}${filenamePrefix}-${filename}.md`, output);

        callback(null, file);
      })
    )
    .on('end', () => done());
}

function docAssets(done) {
  const bulmaSassDir = `${dir.sass}sass`;

  try {
    del(bulmaSassDir)
    fs.mkdirSync(bulmaSassDir);
  } catch (error) {
    null;
  }

  gulp
    .src(`${dir.nodeModules}bulma/bulma.sass`)
    .pipe(gulp.dest(dir.sass))
    .on('end', () => {
      gulp
        .src(`${dir.nodeModules}bulma/sass/*/**`)
        .pipe(gulp.dest(bulmaSassDir))
        .on('end', () => done());
    });
}

function docClean() {
  return del(dir.docSrc);
}
