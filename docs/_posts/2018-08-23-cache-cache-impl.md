<a name="CacheImpl"></a>

## CacheImpl ⇐ <code>Cache</code>
Configurable generic implementation of the [Cache](Cache) interface.

**Kind**: global class  
**Extends**: <code>Cache</code>  

* [CacheImpl](#CacheImpl) ⇐ <code>Cache</code>
    * [new CacheImpl(cacheStorage, factory, Helper, [config])](#new_CacheImpl_new)
    * [._cache](#CacheImpl+_cache) : <code>Storage</code>
    * [._factory](#CacheImpl+_factory) : <code>CacheFactory</code>
    * [._Helper](#CacheImpl+_Helper) : <code>vendor.$Helper</code>
    * [._ttl](#CacheImpl+_ttl) : <code>number</code>
    * [._enabled](#CacheImpl+_enabled) : <code>boolean</code>
    * [.clear()](#CacheImpl+clear)
    * [.has()](#CacheImpl+has)
    * [.get()](#CacheImpl+get)
    * [.set()](#CacheImpl+set)
    * [.delete()](#CacheImpl+delete)
    * [.disable()](#CacheImpl+disable)
    * [.enable()](#CacheImpl+enable)
    * [.serialize()](#CacheImpl+serialize)
    * [.deserialize()](#CacheImpl+deserialize)
    * [._canSerializeValue(value)](#CacheImpl+_canSerializeValue) ⇒ <code>boolean</code>
    * [._clone(value)](#CacheImpl+_clone) ⇒ <code>\*</code>


* * *

<a name="new_CacheImpl_new"></a>

### new CacheImpl(cacheStorage, factory, Helper, [config])
Initializes the cache.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| cacheStorage | <code>Storage</code> |  | The cache entry storage to use. |
| factory | <code>CacheFactory</code> |  | Which create new instance of cache entry. |
| Helper | <code>vendor.$Helper</code> |  | The IMA.js helper methods. |
| [config] | <code>Object</code> | <code>{ttl: 30000, enabled: false}</code> | The cache configuration. |

**Example**  
```js
if (cache.has('model.articles')) {
  return cache.get('model.articles');
} else {
  let articles = getArticlesFromStorage();
  // cache for an hour
  cache.set('model.articles', articles, 60 * 60 * 1000);
}
```

* * *

<a name="CacheImpl+_cache"></a>

### cacheImpl._cache : <code>Storage</code>
Cache entry storage.

**Kind**: instance property of [<code>CacheImpl</code>](#CacheImpl)  

* * *

<a name="CacheImpl+_factory"></a>

### cacheImpl._factory : <code>CacheFactory</code>
**Kind**: instance property of [<code>CacheImpl</code>](#CacheImpl)  

* * *

<a name="CacheImpl+_Helper"></a>

### cacheImpl._Helper : <code>vendor.$Helper</code>
Tha IMA.js helper methods.

**Kind**: instance property of [<code>CacheImpl</code>](#CacheImpl)  

* * *

<a name="CacheImpl+_ttl"></a>

### cacheImpl._ttl : <code>number</code>
Default cache entry time to live in milliseconds.

**Kind**: instance property of [<code>CacheImpl</code>](#CacheImpl)  

* * *

<a name="CacheImpl+_enabled"></a>

### cacheImpl._enabled : <code>boolean</code>
Flag signalling whether the cache is currently enabled.

**Kind**: instance property of [<code>CacheImpl</code>](#CacheImpl)  

* * *

<a name="CacheImpl+clear"></a>

### cacheImpl.clear()
**Kind**: instance method of [<code>CacheImpl</code>](#CacheImpl)  

* * *

<a name="CacheImpl+has"></a>

### cacheImpl.has()
**Kind**: instance method of [<code>CacheImpl</code>](#CacheImpl)  

* * *

<a name="CacheImpl+get"></a>

### cacheImpl.get()
**Kind**: instance method of [<code>CacheImpl</code>](#CacheImpl)  

* * *

<a name="CacheImpl+set"></a>

### cacheImpl.set()
**Kind**: instance method of [<code>CacheImpl</code>](#CacheImpl)  

* * *

<a name="CacheImpl+delete"></a>

### cacheImpl.delete()
**Kind**: instance method of [<code>CacheImpl</code>](#CacheImpl)  

* * *

<a name="CacheImpl+disable"></a>

### cacheImpl.disable()
**Kind**: instance method of [<code>CacheImpl</code>](#CacheImpl)  

* * *

<a name="CacheImpl+enable"></a>

### cacheImpl.enable()
**Kind**: instance method of [<code>CacheImpl</code>](#CacheImpl)  

* * *

<a name="CacheImpl+serialize"></a>

### cacheImpl.serialize()
**Kind**: instance method of [<code>CacheImpl</code>](#CacheImpl)  

* * *

<a name="CacheImpl+deserialize"></a>

### cacheImpl.deserialize()
**Kind**: instance method of [<code>CacheImpl</code>](#CacheImpl)  

* * *

<a name="CacheImpl+_canSerializeValue"></a>

### cacheImpl._canSerializeValue(value) ⇒ <code>boolean</code>
Tests whether the provided value can be serialized into JSON.

**Kind**: instance method of [<code>CacheImpl</code>](#CacheImpl)  
**Returns**: <code>boolean</code> - `true` if the provided value can be serialized into JSON,
        `false` otherwise.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The value to test whether or not it can be serialized. |


* * *

<a name="CacheImpl+_clone"></a>

### cacheImpl._clone(value) ⇒ <code>\*</code>
Attempts to clone the provided value, if possible. Values that cannot be
cloned (e.g. promises) will be simply returned.

**Kind**: instance method of [<code>CacheImpl</code>](#CacheImpl)  
**Returns**: <code>\*</code> - The created clone, or the provided value if the value cannot be
        cloned.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The value to clone. |


* * *

