<a name="SessionMapStorage"></a>

## SessionMapStorage
The <code>SessionMap</code> storage is an implementation of the
<code>Storage</code> interface acting as a synchronization proxy between
the underlying map storage and the <code>sessionStorage</code> DOM storage.

**Kind**: global class  

* [SessionMapStorage](#SessionMapStorage)
    * [new SessionMapStorage(map, session)](#new_SessionMapStorage_new)
    * [._map](#SessionMapStorage+_map) : <code>MapStorage</code>
    * [._session](#SessionMapStorage+_session) : <code>SessionStorage</code>
    * [.init()](#SessionMapStorage+init)
    * [.has()](#SessionMapStorage+has)
    * [.get()](#SessionMapStorage+get)
    * [.set()](#SessionMapStorage+set)
    * [.delete()](#SessionMapStorage+delete)
    * [.clear()](#SessionMapStorage+clear)
    * [.keys()](#SessionMapStorage+keys)
    * [.size()](#SessionMapStorage+size)


* * *

<a name="new_SessionMapStorage_new"></a>

### new SessionMapStorage(map, session)
Initializes the storage.


| Param | Type | Description |
| --- | --- | --- |
| map | <code>MapStorage</code> | The map storage to use. |
| session | <code>SessionStorage</code> | The session storage to use. |


* * *

<a name="SessionMapStorage+_map"></a>

### sessionMapStorage._map : <code>MapStorage</code>
The map storage, synced with the session storage.

**Kind**: instance property of [<code>SessionMapStorage</code>](#SessionMapStorage)  

* * *

<a name="SessionMapStorage+_session"></a>

### sessionMapStorage._session : <code>SessionStorage</code>
The session storage, synced with the map storage.

**Kind**: instance property of [<code>SessionMapStorage</code>](#SessionMapStorage)  

* * *

<a name="SessionMapStorage+init"></a>

### sessionMapStorage.init()
**Kind**: instance method of [<code>SessionMapStorage</code>](#SessionMapStorage)  

* * *

<a name="SessionMapStorage+has"></a>

### sessionMapStorage.has()
**Kind**: instance method of [<code>SessionMapStorage</code>](#SessionMapStorage)  

* * *

<a name="SessionMapStorage+get"></a>

### sessionMapStorage.get()
**Kind**: instance method of [<code>SessionMapStorage</code>](#SessionMapStorage)  

* * *

<a name="SessionMapStorage+set"></a>

### sessionMapStorage.set()
**Kind**: instance method of [<code>SessionMapStorage</code>](#SessionMapStorage)  

* * *

<a name="SessionMapStorage+delete"></a>

### sessionMapStorage.delete()
**Kind**: instance method of [<code>SessionMapStorage</code>](#SessionMapStorage)  

* * *

<a name="SessionMapStorage+clear"></a>

### sessionMapStorage.clear()
**Kind**: instance method of [<code>SessionMapStorage</code>](#SessionMapStorage)  

* * *

<a name="SessionMapStorage+keys"></a>

### sessionMapStorage.keys()
**Kind**: instance method of [<code>SessionMapStorage</code>](#SessionMapStorage)  

* * *

<a name="SessionMapStorage+size"></a>

### sessionMapStorage.size()
**Kind**: instance method of [<code>SessionMapStorage</code>](#SessionMapStorage)  

* * *

