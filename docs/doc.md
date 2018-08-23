---
layout: "doc"
---

{::options parse_block_html="true" /}

<div class="content">
# Documentation

Funguje syntax highlight??

```javascript
let cookieParser = require('cookie-parser');
let methodOverride = require('method-override');
let compression = require('compression');
let helmet = require('helmet');
let errorToJSON = require('error-to-json');
let proxy = require('express-http-proxy');

process.on('uncaughtException', error => {
  logger.error('Uncaught Exception:', { error: errorToJSON(error) });
});

process.on('unhandledRejection', error => {
  logger.error('Unhandled promise rejection:', { error: errorToJSON(error) });
});
```
</div>
