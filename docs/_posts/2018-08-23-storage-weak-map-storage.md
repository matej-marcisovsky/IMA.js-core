## Classes

<dl>
<dt><a href="#WeakMapStorage">WeakMapStorage</a></dt>
<dd><p>A specialization of the <code>MapStorage</code> storage mimicking the native
<code>WeakMap</code> using its internal garbage collector used once the size of
the storage reaches the configured threshold.</p>
</dd>
<dt><a href="#WeakRef">WeakRef</a></dt>
<dd><p>A simple reference wrapper that emulates a weak reference. We seem to have
no other option, since WeakMap and WeakSet are not enumerable (so what is
the point of WeakMap and WeakSet if you still need to manage the keys?!) and
there is no native way to create a weak reference.</p>
</dd>
</dl>

<a name="WeakMapStorage"></a>

## WeakMapStorage
A specialization of the <code>MapStorage</code> storage mimicking the native
<code>WeakMap</code> using its internal garbage collector used once the size of
the storage reaches the configured threshold.

**Kind**: global class  

* [WeakMapStorage](#WeakMapStorage)
    * [new WeakMapStorage(config)](#new_WeakMapStorage_new)
    * [._entryTtl](#WeakMapStorage+_entryTtl) : <code>number</code>
    * [.has()](#WeakMapStorage+has)
    * [.get()](#WeakMapStorage+get)
    * [.set()](#WeakMapStorage+set)
    * [.delete()](#WeakMapStorage+delete)
    * [.keys()](#WeakMapStorage+keys)
    * [.size()](#WeakMapStorage+size)
    * [._discardExpiredEntries()](#WeakMapStorage+_discardExpiredEntries)


* * *

<a name="new_WeakMapStorage_new"></a>

### new WeakMapStorage(config)
Initializes the storage.


| Param | Type | Description |
| --- | --- | --- |
| config | <code>Object</code> | Weak map storage configuration. The        fields have the following meaning:        - entryTtl The time-to-live of a storage entry in milliseconds. |


* * *

<a name="WeakMapStorage+_entryTtl"></a>

### weakMapStorage._entryTtl : <code>number</code>
The time-to-live of a storage entry in milliseconds.

**Kind**: instance property of [<code>WeakMapStorage</code>](#WeakMapStorage)  

* * *

<a name="WeakMapStorage+has"></a>

### weakMapStorage.has()
**Kind**: instance method of [<code>WeakMapStorage</code>](#WeakMapStorage)  

* * *

<a name="WeakMapStorage+get"></a>

### weakMapStorage.get()
**Kind**: instance method of [<code>WeakMapStorage</code>](#WeakMapStorage)  

* * *

<a name="WeakMapStorage+set"></a>

### weakMapStorage.set()
**Kind**: instance method of [<code>WeakMapStorage</code>](#WeakMapStorage)  

* * *

<a name="WeakMapStorage+delete"></a>

### weakMapStorage.delete()
**Kind**: instance method of [<code>WeakMapStorage</code>](#WeakMapStorage)  

* * *

<a name="WeakMapStorage+keys"></a>

### weakMapStorage.keys()
**Kind**: instance method of [<code>WeakMapStorage</code>](#WeakMapStorage)  

* * *

<a name="WeakMapStorage+size"></a>

### weakMapStorage.size()
**Kind**: instance method of [<code>WeakMapStorage</code>](#WeakMapStorage)  

* * *

<a name="WeakMapStorage+_discardExpiredEntries"></a>

### weakMapStorage._discardExpiredEntries()
Deletes all expired entries from this storage.

**Kind**: instance method of [<code>WeakMapStorage</code>](#WeakMapStorage)  

* * *

<a name="WeakRef"></a>

## WeakRef
A simple reference wrapper that emulates a weak reference. We seem to have
no other option, since WeakMap and WeakSet are not enumerable (so what is
the point of WeakMap and WeakSet if you still need to manage the keys?!) and
there is no native way to create a weak reference.

**Kind**: global class  

* [WeakRef](#WeakRef)
    * [new WeakRef(target, ttl)](#new_WeakRef_new)
    * [._reference](#WeakRef+_reference) : <code>Object</code>
    * [._expiration](#WeakRef+_expiration) : <code>number</code>
    * [.target](#WeakRef+target) ⇒ <code>Object</code>


* * *

<a name="new_WeakRef_new"></a>

### new WeakRef(target, ttl)
Initializes the weak reference to the target reference.


| Param | Type | Description |
| --- | --- | --- |
| target | <code>Object</code> | The target reference that should be referenced by        this weak reference. |
| ttl | <code>number</code> | The maximum number of milliseconds the weak        reference should be kept. The reference will be discarded once        ACCESSED after the specified timeout. |


* * *

<a name="WeakRef+_reference"></a>

### weakRef._reference : <code>Object</code>
The actual target reference, or <code>null</code> if the reference has
been already discarded.

**Kind**: instance property of [<code>WeakRef</code>](#WeakRef)  

* * *

<a name="WeakRef+_expiration"></a>

### weakRef._expiration : <code>number</code>
The UNIX timestamp with millisecond precision marking the moment at
or after which the reference will be discarded.

**Kind**: instance property of [<code>WeakRef</code>](#WeakRef)  

* * *

<a name="WeakRef+target"></a>

### weakRef.target ⇒ <code>Object</code>
Returns the target reference, provided that the target reference is
still alive. Returns <code>null</code> if the reference has been discarded.

**Kind**: instance property of [<code>WeakRef</code>](#WeakRef)  
**Returns**: <code>Object</code> - The target reference, or <code>null</code> if the reference
        has been discarded by the garbage collector.  

* * *

