<a name="Namespace"></a>

## ~~Namespace~~
***Deprecated***

Namespace creation, manipulation and traversal utility. This utility is used
to create semi-global shared namespaces for registering references to
interfaces, classes and constants of the application to provide access to
each other more easily than by using the ES6 import/export mechanism.

**Kind**: global class  

* ~~[Namespace](#Namespace)~~
    * [new exports.Namespace()](#new_Namespace_new)
    * ~~[.namespace(path)](#Namespace+namespace) ⇒ <code>\*</code>~~
    * [.has(path)](#Namespace+has) ⇒ <code>boolean</code>
    * [.get(path)](#Namespace+get) ⇒ <code>\*</code>


* * *

<a name="new_Namespace_new"></a>

### new exports.Namespace()
Initializes the namespace provider.

This is a private constructor, you should use the exported <code>ns</code>
instance to create and use namespaces (see the examples).


* * *

<a name="Namespace+namespace"></a>

### ~~namespace.namespace(path) ⇒ <code>\*</code>~~
***Deprecated***

Verifies that the specified path in namespace exists, creates it if it
does not, and returns the value at the specified path in the namespace.

The method recursively creates all path parts in the namespaces as empty
plain objects for all path parts that do not exist yet, including the
last one. This means, that if called with a non-existing namespace path
as an argument, the return value will be the last created namespace
object.

**Kind**: instance method of [<code>Namespace</code>](#Namespace)  
**Returns**: <code>\*</code> - The value at the specified path in the namespace.  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>string</code> | The namespace path. |


* * *

<a name="Namespace+has"></a>

### namespace.has(path) ⇒ <code>boolean</code>
Verifies that the specified namespace path point to an existing
namespace or terminal value.

**Kind**: instance method of [<code>Namespace</code>](#Namespace)  
**Returns**: <code>boolean</code> - <code>true</code> if the namespace or terminal value exists
        at the specified path.  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>string</code> | The namespace path to test. |


* * *

<a name="Namespace+get"></a>

### namespace.get(path) ⇒ <code>\*</code>
Return value for the specified namespace path point.

**Kind**: instance method of [<code>Namespace</code>](#Namespace)  
**Returns**: <code>\*</code> - The value at the specified path in the namespace.  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>string</code> | The namespace path to test. |


* * *

