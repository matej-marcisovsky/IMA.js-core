## Classes

<dl>
<dt><a href="#SessionStorage">SessionStorage</a></dt>
<dd><p>Implementation of the <code>Storage</code> interface that relies on the
native <code>sessionStorage</code> DOM storage for storing its entries.</p>
</dd>
<dt><a href="#StorageIterator">StorageIterator</a></dt>
<dd><p>Implementation of the iterator protocol and the iterable protocol for DOM
storage keys.</p>
</dd>
</dl>

<a name="SessionStorage"></a>

## SessionStorage
Implementation of the <code>Storage</code> interface that relies on the
native <code>sessionStorage</code> DOM storage for storing its entries.

**Kind**: global class  

* [SessionStorage](#SessionStorage)
    * [new SessionStorage(window)](#new_SessionStorage_new)
    * [._storage](#SessionStorage+_storage) : <code>Storage</code>
    * [.init()](#SessionStorage+init)
    * [.has()](#SessionStorage+has)
    * [.get()](#SessionStorage+get)
    * [.set()](#SessionStorage+set)
    * [.delete()](#SessionStorage+delete)
    * [.clear()](#SessionStorage+clear)
    * [.keys()](#SessionStorage+keys)
    * [.size()](#SessionStorage+size)
    * [._deleteOldestEntry()](#SessionStorage+_deleteOldestEntry)


* * *

<a name="new_SessionStorage_new"></a>

### new SessionStorage(window)
Initializes the session storage.


| Param | Type |
| --- | --- |
| window | <code>Window</code> | 


* * *

<a name="SessionStorage+_storage"></a>

### sessionStorage._storage : <code>Storage</code>
The DOM storage providing the actual storage of the entries.

**Kind**: instance property of [<code>SessionStorage</code>](#SessionStorage)  

* * *

<a name="SessionStorage+init"></a>

### sessionStorage.init()
**Kind**: instance method of [<code>SessionStorage</code>](#SessionStorage)  

* * *

<a name="SessionStorage+has"></a>

### sessionStorage.has()
**Kind**: instance method of [<code>SessionStorage</code>](#SessionStorage)  

* * *

<a name="SessionStorage+get"></a>

### sessionStorage.get()
**Kind**: instance method of [<code>SessionStorage</code>](#SessionStorage)  

* * *

<a name="SessionStorage+set"></a>

### sessionStorage.set()
**Kind**: instance method of [<code>SessionStorage</code>](#SessionStorage)  

* * *

<a name="SessionStorage+delete"></a>

### sessionStorage.delete()
**Kind**: instance method of [<code>SessionStorage</code>](#SessionStorage)  

* * *

<a name="SessionStorage+clear"></a>

### sessionStorage.clear()
**Kind**: instance method of [<code>SessionStorage</code>](#SessionStorage)  

* * *

<a name="SessionStorage+keys"></a>

### sessionStorage.keys()
**Kind**: instance method of [<code>SessionStorage</code>](#SessionStorage)  

* * *

<a name="SessionStorage+size"></a>

### sessionStorage.size()
**Kind**: instance method of [<code>SessionStorage</code>](#SessionStorage)  

* * *

<a name="SessionStorage+_deleteOldestEntry"></a>

### sessionStorage._deleteOldestEntry()
Deletes the oldest entry in this storage.

**Kind**: instance method of [<code>SessionStorage</code>](#SessionStorage)  

* * *

<a name="StorageIterator"></a>

## StorageIterator
Implementation of the iterator protocol and the iterable protocol for DOM
storage keys.

**Kind**: global class  
**See**: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols  

* [StorageIterator](#StorageIterator)
    * [new StorageIterator(storage)](#new_StorageIterator_new)
    * [._storage](#StorageIterator+_storage) : <code>Storage</code>
    * [._currentKeyIndex](#StorageIterator+_currentKeyIndex) : <code>number</code>
    * [.next()](#StorageIterator+next) ⇒ <code>Object</code>


* * *

<a name="new_StorageIterator_new"></a>

### new StorageIterator(storage)
Initializes the DOM storage iterator.


| Param | Type | Description |
| --- | --- | --- |
| storage | <code>Storage</code> | The DOM storage to iterate through. |


* * *

<a name="StorageIterator+_storage"></a>

### storageIterator._storage : <code>Storage</code>
The DOM storage being iterated.

**Kind**: instance property of [<code>StorageIterator</code>](#StorageIterator)  

* * *

<a name="StorageIterator+_currentKeyIndex"></a>

### storageIterator._currentKeyIndex : <code>number</code>
The current index of the DOM storage key this iterator will return
next.

**Kind**: instance property of [<code>StorageIterator</code>](#StorageIterator)  

* * *

<a name="StorageIterator+next"></a>

### storageIterator.next() ⇒ <code>Object</code>
Iterates to the next item. This method implements the iterator protocol.

**Kind**: instance method of [<code>StorageIterator</code>](#StorageIterator)  
**Returns**: <code>Object</code> - The next value in
        the sequence and whether the iterator is done iterating through
        the values.  

* * *

