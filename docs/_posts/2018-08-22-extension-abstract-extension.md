<a name="AbstractExtension"></a>

## *AbstractExtension ⇐ <code>Extension</code>*
Abstract extension

**Kind**: global abstract class  
**Extends**: <code>Extension</code>  

* *[AbstractExtension](#AbstractExtension) ⇐ <code>Extension</code>*
    * *[._pageStateManager](#AbstractExtension+_pageStateManager) : <code>PageStateManager</code>*
    * *[.status](#AbstractExtension+status) : <code>number</code>*
    * *[.params](#AbstractExtension+params) : <code>Object.&lt;string, string&gt;</code>*
    * *[.init()](#AbstractExtension+init)*
    * *[.destroy()](#AbstractExtension+destroy)*
    * *[.activate()](#AbstractExtension+activate)*
    * *[.deactivate()](#AbstractExtension+deactivate)*
    * **[.load()](#AbstractExtension+load)**
    * *[.update()](#AbstractExtension+update)*
    * *[.setState()](#AbstractExtension+setState)*
    * *[.getState()](#AbstractExtension+getState)*
    * *[.setRouteParams()](#AbstractExtension+setRouteParams)*
    * *[.getRouteParams()](#AbstractExtension+getRouteParams)*
    * *[.setPageStateManager()](#AbstractExtension+setPageStateManager)*
    * *[.getHttpStatus()](#AbstractExtension+getHttpStatus)*
    * *[.getAllowedStateKeys()](#AbstractExtension+getAllowedStateKeys)*


* * *

<a name="AbstractExtension+_pageStateManager"></a>

### *abstractExtension._pageStateManager : <code>PageStateManager</code>*
State manager.

**Kind**: instance property of [<code>AbstractExtension</code>](#AbstractExtension)  
**Access**: protected  

* * *

<a name="AbstractExtension+status"></a>

### *abstractExtension.status : <code>number</code>*
The HTTP response code to send to the client.

**Kind**: instance property of [<code>AbstractExtension</code>](#AbstractExtension)  

* * *

<a name="AbstractExtension+params"></a>

### *abstractExtension.params : <code>Object.&lt;string, string&gt;</code>*
The route parameters extracted from the current route.

**Kind**: instance property of [<code>AbstractExtension</code>](#AbstractExtension)  

* * *

<a name="AbstractExtension+init"></a>

### *abstractExtension.init()*
**Kind**: instance method of [<code>AbstractExtension</code>](#AbstractExtension)  

* * *

<a name="AbstractExtension+destroy"></a>

### *abstractExtension.destroy()*
**Kind**: instance method of [<code>AbstractExtension</code>](#AbstractExtension)  

* * *

<a name="AbstractExtension+activate"></a>

### *abstractExtension.activate()*
**Kind**: instance method of [<code>AbstractExtension</code>](#AbstractExtension)  

* * *

<a name="AbstractExtension+deactivate"></a>

### *abstractExtension.deactivate()*
**Kind**: instance method of [<code>AbstractExtension</code>](#AbstractExtension)  

* * *

<a name="AbstractExtension+load"></a>

### **abstractExtension.load()**
**Kind**: instance abstract method of [<code>AbstractExtension</code>](#AbstractExtension)  

* * *

<a name="AbstractExtension+update"></a>

### *abstractExtension.update()*
**Kind**: instance method of [<code>AbstractExtension</code>](#AbstractExtension)  

* * *

<a name="AbstractExtension+setState"></a>

### *abstractExtension.setState()*
**Kind**: instance method of [<code>AbstractExtension</code>](#AbstractExtension)  

* * *

<a name="AbstractExtension+getState"></a>

### *abstractExtension.getState()*
**Kind**: instance method of [<code>AbstractExtension</code>](#AbstractExtension)  

* * *

<a name="AbstractExtension+setRouteParams"></a>

### *abstractExtension.setRouteParams()*
**Kind**: instance method of [<code>AbstractExtension</code>](#AbstractExtension)  

* * *

<a name="AbstractExtension+getRouteParams"></a>

### *abstractExtension.getRouteParams()*
**Kind**: instance method of [<code>AbstractExtension</code>](#AbstractExtension)  

* * *

<a name="AbstractExtension+setPageStateManager"></a>

### *abstractExtension.setPageStateManager()*
**Kind**: instance method of [<code>AbstractExtension</code>](#AbstractExtension)  

* * *

<a name="AbstractExtension+getHttpStatus"></a>

### *abstractExtension.getHttpStatus()*
**Kind**: instance method of [<code>AbstractExtension</code>](#AbstractExtension)  

* * *

<a name="AbstractExtension+getAllowedStateKeys"></a>

### *abstractExtension.getAllowedStateKeys()*
Returns array of allowed state keys for extension.

**Kind**: instance method of [<code>AbstractExtension</code>](#AbstractExtension)  

* * *

