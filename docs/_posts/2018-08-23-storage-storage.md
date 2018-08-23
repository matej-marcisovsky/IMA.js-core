<a name="Storage"></a>

## Storage
**Kind**: global interface  

* [Storage](#Storage)
    * [.init()](#Storage+init) ⇒ [<code>Storage</code>](#Storage)
    * [.has(key)](#Storage+has) ⇒ <code>boolean</code>
    * [.get(key)](#Storage+get) ⇒ <code>\*</code>
    * [.set(key, value)](#Storage+set) ⇒ [<code>Storage</code>](#Storage)
    * [.delete(key)](#Storage+delete) ⇒ [<code>Storage</code>](#Storage)
    * [.clear()](#Storage+clear) ⇒ [<code>Storage</code>](#Storage)
    * [.keys()](#Storage+keys) ⇒ <code>Iterator.&lt;string&gt;</code>
    * [.size()](#Storage+size) ⇒ <code>number</code>


* * *

<a name="Storage+init"></a>

### storage.init() ⇒ [<code>Storage</code>](#Storage)
This method is used to finalize the initialization of the storage after
the dependencies provided through the constructor have been prepared for
use.

This method must be invoked only once and it must be the first method
invoked on this instance.

**Kind**: instance method of [<code>Storage</code>](#Storage)  
**Returns**: [<code>Storage</code>](#Storage) - This storage.  

* * *

<a name="Storage+has"></a>

### storage.has(key) ⇒ <code>boolean</code>
Returns <code>true</code> if the entry identified by the specified key exists
in this storage.

**Kind**: instance method of [<code>Storage</code>](#Storage)  
**Returns**: <code>boolean</code> - <code>true</code> if the storage entry exists.  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | The key identifying the storage entry. |


* * *

<a name="Storage+get"></a>

### storage.get(key) ⇒ <code>\*</code>
Retrieves the value of the entry identified by the specified . The
method returns <code>undefined</code> if the entry does not exists.

Entries set to the <code>undefined</code> value can be tested for existence
using the <code>has</code> method.

**Kind**: instance method of [<code>Storage</code>](#Storage)  
**Returns**: <code>\*</code> - The value of the storage entry.  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | The key identifying the storage entry. |


* * *

<a name="Storage+set"></a>

### storage.set(key, value) ⇒ [<code>Storage</code>](#Storage)
Sets the storage entry identified by the specified key to the provided
value. The method creates the entry if it does not exist already.

**Kind**: instance method of [<code>Storage</code>](#Storage)  
**Returns**: [<code>Storage</code>](#Storage) - This storage.  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | The key identifying the storage entry. |
| value | <code>\*</code> | The storage entry value. |


* * *

<a name="Storage+delete"></a>

### storage.delete(key) ⇒ [<code>Storage</code>](#Storage)
Deletes the entry identified by the specified key from this storage.

**Kind**: instance method of [<code>Storage</code>](#Storage)  
**Returns**: [<code>Storage</code>](#Storage) - This storage.  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | The key identifying the storage entry. |


* * *

<a name="Storage+clear"></a>

### storage.clear() ⇒ [<code>Storage</code>](#Storage)
Clears the storage of all entries.

**Kind**: instance method of [<code>Storage</code>](#Storage)  
**Returns**: [<code>Storage</code>](#Storage) - This storage.  

* * *

<a name="Storage+keys"></a>

### storage.keys() ⇒ <code>Iterator.&lt;string&gt;</code>
Returns an iterator for traversing the keys in this storage. The order
in which the keys are traversed is undefined.

**Kind**: instance method of [<code>Storage</code>](#Storage)  
**Returns**: <code>Iterator.&lt;string&gt;</code> - An iterator for traversing the keys in this
        storage. The iterator also implements the iterable protocol,
        returning itself as its own iterator, allowing it to be used in
        a <code>for..of</code> loop.  

* * *

<a name="Storage+size"></a>

### storage.size() ⇒ <code>number</code>
Returns the number of entries in this storage.

**Kind**: instance method of [<code>Storage</code>](#Storage)  
**Returns**: <code>number</code> - The number of entries in this storage.  

* * *

