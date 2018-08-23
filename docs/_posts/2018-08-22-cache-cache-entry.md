<a name="CacheEntry"></a>

## CacheEntry
The cache entry is a typed container of cache data used to track the
creation and expiration of cache entries.

**Kind**: global class  

* [CacheEntry](#CacheEntry)
    * [new CacheEntry(value, ttl)](#new_CacheEntry_new)
    * [._value](#CacheEntry+_value) : <code>\*</code>
    * [._ttl](#CacheEntry+_ttl) : <code>number</code>
    * [._created](#CacheEntry+_created) : <code>number</code>
    * [.isExpired()](#CacheEntry+isExpired) ⇒ <code>boolean</code>
    * [.serialize()](#CacheEntry+serialize) ⇒ <code>Object</code>
    * [.getValue()](#CacheEntry+getValue) ⇒ <code>\*</code>


* * *

<a name="new_CacheEntry_new"></a>

### new CacheEntry(value, ttl)
Initializes the cache entry.


| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The cache entry value. |
| ttl | <code>number</code> | The time to live in milliseconds. |


* * *

<a name="CacheEntry+_value"></a>

### cacheEntry._value : <code>\*</code>
Cache entry value.

**Kind**: instance property of [<code>CacheEntry</code>](#CacheEntry)  

* * *

<a name="CacheEntry+_ttl"></a>

### cacheEntry._ttl : <code>number</code>
The time to live in milliseconds. The cache entry is considered
expired after this time.

**Kind**: instance property of [<code>CacheEntry</code>](#CacheEntry)  

* * *

<a name="CacheEntry+_created"></a>

### cacheEntry._created : <code>number</code>
The timestamp of creation of this cache entry.

**Kind**: instance property of [<code>CacheEntry</code>](#CacheEntry)  

* * *

<a name="CacheEntry+isExpired"></a>

### cacheEntry.isExpired() ⇒ <code>boolean</code>
Returns `true` if this entry has expired.

**Kind**: instance method of [<code>CacheEntry</code>](#CacheEntry)  
**Returns**: <code>boolean</code> - `true` if this entry has expired.  

* * *

<a name="CacheEntry+serialize"></a>

### cacheEntry.serialize() ⇒ <code>Object</code>
Exports this cache entry into a JSON-serializable object.

**Kind**: instance method of [<code>CacheEntry</code>](#CacheEntry)  
**Returns**: <code>Object</code> - This entry exported to a
        JSON-serializable object.  

* * *

<a name="CacheEntry+getValue"></a>

### cacheEntry.getValue() ⇒ <code>\*</code>
Returns the entry value.

**Kind**: instance method of [<code>CacheEntry</code>](#CacheEntry)  
**Returns**: <code>\*</code> - The entry value.  

* * *

