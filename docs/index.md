# IMA.js is a framework for creating isomorphic javascript applications

## Fully isomorphic

Write and run the same code at both the server side and the client side! IMA.js provides abstraction for APIs that differ at the client side javascript and the server side javascript.

## SEO

Page metadata are centrally managed, allowing easier management of all your keywords and og meta-tags.

<ul>
	{% for post in site.posts %}
	<li>
		<a href="{{ post.url }}">{{ post.title }}</a>
	</li>
	{% endfor %}
</ul>

```javascript
window.alert('test');
```
