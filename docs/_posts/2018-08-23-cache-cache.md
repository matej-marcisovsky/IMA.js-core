<a name="Cache"></a>

## Cache
**Kind**: global interface  

* [Cache](#Cache)
    * [.clear()](#Cache+clear)
    * [.has(key)](#Cache+has) ⇒ <code>boolean</code>
    * [.get(key)](#Cache+get) ⇒ <code>\*</code>
    * [.set(key, value, [ttl])](#Cache+set)
    * [.delete(key)](#Cache+delete)
    * [.disable()](#Cache+disable)
    * [.enable()](#Cache+enable)
    * [.serialize()](#Cache+serialize) ⇒ <code>string</code>
    * [.deserialize(serializedData)](#Cache+deserialize)


* * *

<a name="Cache+clear"></a>

### cache.clear()
Clears the cache by deleting all entries.

**Kind**: instance method of [<code>Cache</code>](#Cache)  

* * *

<a name="Cache+has"></a>

### cache.has(key) ⇒ <code>boolean</code>
Tests whether the cache contains a fresh entry for the specified key. A
cache entry is fresh if the has not expired its TTL (time to live).

The method always returns `false` if the cache is currently disabled.

**Kind**: instance method of [<code>Cache</code>](#Cache)  
**Returns**: <code>boolean</code> - `true` if the cache is enabled, the entry exists and has
        not expired yet.  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | The identifier of the cache entry. |


* * *

<a name="Cache+get"></a>

### cache.get(key) ⇒ <code>\*</code>
Returns the value of the entry identified by the specified key.

The method returns `null` if the specified entry does not exist, has
already expired, or the cache is currently disabled.

**Kind**: instance method of [<code>Cache</code>](#Cache)  
**Returns**: <code>\*</code> - The value of the specified cache entry, or `null` if the entry
        is not available.  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | The identifier of the cache entry. |


* * *

<a name="Cache+set"></a>

### cache.set(key, value, [ttl])
Sets the cache entry identified by the specified key to the provided
value. The entry is created if it does not exist yet.

The method has no effect if the cache is currently disabled.

**Kind**: instance method of [<code>Cache</code>](#Cache)  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | The identifier of the cache entry. |
| value | <code>\*</code> | The cache entry value. |
| [ttl] | <code>number</code> | Cache entry time to live in milliseconds. The        entry will expire after the specified amount of milliseconds. Use        `null` or omit the parameter to use the default TTL of this cache. |


* * *

<a name="Cache+delete"></a>

### cache.delete(key)
Deletes the specified cache entry. The method has no effect if the entry
does not exist.

**Kind**: instance method of [<code>Cache</code>](#Cache)  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | The identifier of the cache entry. |


* * *

<a name="Cache+disable"></a>

### cache.disable()
Disables the cache, preventing the retrieval of any cached entries and
reporting all cache entries as non-existing. Disabling the cache does
not however prevent modifying the existing or creating new cache
entries.

Disabling the cache also clears all of its current entries.

The method has no effect if the cache is already disabled.

**Kind**: instance method of [<code>Cache</code>](#Cache)  

* * *

<a name="Cache+enable"></a>

### cache.enable()
Enables the cache, allowing the retrieval of cache entries.

The method has no effect if the cache is already enabled.

**Kind**: instance method of [<code>Cache</code>](#Cache)  

* * *

<a name="Cache+serialize"></a>

### cache.serialize() ⇒ <code>string</code>
Exports the state of this cache to an HTML-safe JSON string. The data
obtained by parsing the result of this method are compatible with the
[deserialize](#Cache+deserialize) method.

**Kind**: instance method of [<code>Cache</code>](#Cache)  
**Returns**: <code>string</code> - A JSON string containing an object representing of the
        current state of this cache.  

* * *

<a name="Cache+deserialize"></a>

### cache.deserialize(serializedData)
Loads the provided serialized cache data into this cache. Entries
present in this cache but not specified in the provided data will remain
in this cache intact.

**Kind**: instance method of [<code>Cache</code>](#Cache)  

| Param | Type | Description |
| --- | --- | --- |
| serializedData | <code>Object.&lt;string, {value: \*, ttl: number}&gt;</code> | An        object representing the state of the cache to load, obtained by        parsing the JSON string returned by the [serialize](#Cache+serialize)        method. |


* * *

