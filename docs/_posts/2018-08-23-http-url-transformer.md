<a name="UrlTransformer"></a>

## UrlTransformer
Utility for transforming URLs according to the configured replacement rules.

**Kind**: global class  

* [UrlTransformer](#UrlTransformer)
    * [new UrlTransformer()](#new_UrlTransformer_new)
    * [._rules](#UrlTransformer+_rules) : <code>Object.&lt;string, string&gt;</code>
    * [.addRule(pattern, replacement)](#UrlTransformer+addRule) ⇒ [<code>UrlTransformer</code>](#UrlTransformer)
    * [.clear()](#UrlTransformer+clear) ⇒ [<code>UrlTransformer</code>](#UrlTransformer)
    * [.transform(str)](#UrlTransformer+transform) ⇒ <code>string</code>


* * *

<a name="new_UrlTransformer_new"></a>

### new UrlTransformer()
Initializes the URL transformer.


* * *

<a name="UrlTransformer+_rules"></a>

### urlTransformer._rules : <code>Object.&lt;string, string&gt;</code>
**Kind**: instance property of [<code>UrlTransformer</code>](#UrlTransformer)  

* * *

<a name="UrlTransformer+addRule"></a>

### urlTransformer.addRule(pattern, replacement) ⇒ [<code>UrlTransformer</code>](#UrlTransformer)
Adds the provided replacement rule to the rules used by this URL
transformer.

**Kind**: instance method of [<code>UrlTransformer</code>](#UrlTransformer)  
**Returns**: [<code>UrlTransformer</code>](#UrlTransformer) - This transformer.  

| Param | Type | Description |
| --- | --- | --- |
| pattern | <code>string</code> | Regexp patter to look for (must be escaped as if        for use in the {@linkcode Regexp} constructor). |
| replacement | <code>string</code> | The replacement of the matched patter in any        matched URL. |


* * *

<a name="UrlTransformer+clear"></a>

### urlTransformer.clear() ⇒ [<code>UrlTransformer</code>](#UrlTransformer)
Clears all rules.

**Kind**: instance method of [<code>UrlTransformer</code>](#UrlTransformer)  
**Returns**: [<code>UrlTransformer</code>](#UrlTransformer) - This transformer.  

* * *

<a name="UrlTransformer+transform"></a>

### urlTransformer.transform(str) ⇒ <code>string</code>
Applies all rules registered with this URL transformer to the provided
URL and returns the result. The rules will be applied in the order they
were registered.

**Kind**: instance method of [<code>UrlTransformer</code>](#UrlTransformer)  
**Returns**: <code>string</code> - Transformed URL.  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | The URL for transformation. |


* * *

