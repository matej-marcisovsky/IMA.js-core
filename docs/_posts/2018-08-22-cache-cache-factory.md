<a name="CacheFactory"></a>

## CacheFactory
Factory for creating instances of [CacheEntry](CacheEntry).

**Kind**: global class  

* * *

<a name="CacheFactory+createCacheEntry"></a>

### cacheFactory.createCacheEntry(value, [ttl]) ⇒ <code>CacheEntry</code>
Create a new instance of [CacheEntry](CacheEntry) with value and ttl.

**Kind**: instance method of [<code>CacheFactory</code>](#CacheFactory)  
**Returns**: <code>CacheEntry</code> - The created cache entry.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The cache entry value. |
| [ttl] | <code>number</code> | Cache entry time to live in milliseconds. The        entry will expire after the specified amount of milliseconds. |


* * *

