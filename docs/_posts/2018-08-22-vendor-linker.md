<a name="VendorLinker"></a>

## VendorLinker
Utility for linking vendor node modules with the application by exporting
them to the IMA loader's modules.

**Kind**: global class  

* [VendorLinker](#VendorLinker)
    * [new exports.VendorLinker()](#new_VendorLinker_new)
    * [._modules](#VendorLinker+_modules) : <code>Map.&lt;string, Object.&lt;string, \*&gt;&gt;</code>
    * [._plugins](#VendorLinker+_plugins) : <code>Array.&lt;Object.&lt;string, \*&gt;&gt;</code>
    * [.set(moduleName, moduleValues)](#VendorLinker+set)
    * [.get(moduleName, [imaInternalModule])](#VendorLinker+get) ⇒ <code>Object.&lt;string, \*&gt;</code>
    * [.clear()](#VendorLinker+clear) ⇒ [<code>VendorLinker</code>](#VendorLinker)
    * [.bindToNamespace(ns)](#VendorLinker+bindToNamespace)
    * [.getImaPlugins()](#VendorLinker+getImaPlugins) ⇒ <code>Array.&lt;Object.&lt;string, \*&gt;&gt;</code>


* * *

<a name="new_VendorLinker_new"></a>

### new exports.VendorLinker()
Initializes the vendor linker.


* * *

<a name="VendorLinker+_modules"></a>

### vendorLinker._modules : <code>Map.&lt;string, Object.&lt;string, \*&gt;&gt;</code>
Internal storage of loaded modules.

**Kind**: instance property of [<code>VendorLinker</code>](#VendorLinker)  

* * *

<a name="VendorLinker+_plugins"></a>

### vendorLinker._plugins : <code>Array.&lt;Object.&lt;string, \*&gt;&gt;</code>
Internal storage of loaded IMA plugins.

**Kind**: instance property of [<code>VendorLinker</code>](#VendorLinker)  

* * *

<a name="VendorLinker+set"></a>

### vendorLinker.set(moduleName, moduleValues)
Sets the provided vendor node module to the internal registry of this
vendor linker, and registers an IMA loader module of the same name,
exporting the same values.

**Kind**: instance method of [<code>VendorLinker</code>](#VendorLinker)  

| Param | Type | Description |
| --- | --- | --- |
| moduleName | <code>string</code> | The name of the module. |
| moduleValues | <code>Object.&lt;string, \*&gt;</code> | Values exported from the module. |


* * *

<a name="VendorLinker+get"></a>

### vendorLinker.get(moduleName, [imaInternalModule]) ⇒ <code>Object.&lt;string, \*&gt;</code>
Returns the provided vendor node module from the internal registry of this
vendor linker.

**Kind**: instance method of [<code>VendorLinker</code>](#VendorLinker)  
**Returns**: <code>Object.&lt;string, \*&gt;</code> - moduleValues Values exported from the module.  

| Param | Type | Description |
| --- | --- | --- |
| moduleName | <code>string</code> | The name of the module. |
| [imaInternalModule] | <code>boolean</code> |  |


* * *

<a name="VendorLinker+clear"></a>

### vendorLinker.clear() ⇒ [<code>VendorLinker</code>](#VendorLinker)
Clears all loaded modules and plugins from this vendor linker.

**Kind**: instance method of [<code>VendorLinker</code>](#VendorLinker)  
**Returns**: [<code>VendorLinker</code>](#VendorLinker) - This vendor linker.  

* * *

<a name="VendorLinker+bindToNamespace"></a>

### vendorLinker.bindToNamespace(ns)
Binds the vendor modules loaded in this vendor linker to the
<code>Vendor</code> sub-namespace of the provided namespace.

**Kind**: instance method of [<code>VendorLinker</code>](#VendorLinker)  

| Param | Type | Description |
| --- | --- | --- |
| ns | <code>Namespace</code> | The namespace to which the vendor modules should        be bound. |


* * *

<a name="VendorLinker+getImaPlugins"></a>

### vendorLinker.getImaPlugins() ⇒ <code>Array.&lt;Object.&lt;string, \*&gt;&gt;</code>
Returns the loaded IMA plugins as an array of export objects.

**Kind**: instance method of [<code>VendorLinker</code>](#VendorLinker)  
**Returns**: <code>Array.&lt;Object.&lt;string, \*&gt;&gt;</code> - The loaded IMA plugins.  

* * *

