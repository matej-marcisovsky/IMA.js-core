<a name="AbstractController"></a>

## *AbstractController ⇐ <code>Controller</code>*
Basic implementation of the [Controller](Controller) interface, providing the
default implementation of the most of the API.

**Kind**: global abstract class  
**Extends**: <code>Controller</code>  

* *[AbstractController](#AbstractController) ⇐ <code>Controller</code>*
    * *[new AbstractController()](#new_AbstractController_new)*
    * *[._pageStateManager](#AbstractController+_pageStateManager) : <code>PageStateManager</code>*
    * *[._extensions](#AbstractController+_extensions) : <code>Array.&lt;Extension&gt;</code>*
    * *[.status](#AbstractController+status) : <code>number</code>*
    * *[.params](#AbstractController+params) : <code>Object.&lt;string, string&gt;</code>*
    * *[.init()](#AbstractController+init)*
    * *[.destroy()](#AbstractController+destroy)*
    * *[.activate()](#AbstractController+activate)*
    * *[.deactivate()](#AbstractController+deactivate)*
    * **[.load()](#AbstractController+load)**
    * *[.update()](#AbstractController+update)*
    * *[.setState()](#AbstractController+setState)*
    * *[.getState()](#AbstractController+getState)*
    * *[.addExtension()](#AbstractController+addExtension)*
    * *[.getExtensions()](#AbstractController+getExtensions)*
    * **[.setMetaParams()](#AbstractController+setMetaParams)**
    * *[.setRouteParams()](#AbstractController+setRouteParams)*
    * *[.getRouteParams()](#AbstractController+getRouteParams)*
    * *[.setPageStateManager()](#AbstractController+setPageStateManager)*
    * *[.getHttpStatus()](#AbstractController+getHttpStatus)*


* * *

<a name="new_AbstractController_new"></a>

### *new AbstractController()*
Initializes the controller.


* * *

<a name="AbstractController+_pageStateManager"></a>

### *abstractController._pageStateManager : <code>PageStateManager</code>*
State manager.

**Kind**: instance property of [<code>AbstractController</code>](#AbstractController)  
**Access**: protected  

* * *

<a name="AbstractController+_extensions"></a>

### *abstractController._extensions : <code>Array.&lt;Extension&gt;</code>*
The controller's extensions.

**Kind**: instance property of [<code>AbstractController</code>](#AbstractController)  

* * *

<a name="AbstractController+status"></a>

### *abstractController.status : <code>number</code>*
The HTTP response code to send to the client.

**Kind**: instance property of [<code>AbstractController</code>](#AbstractController)  

* * *

<a name="AbstractController+params"></a>

### *abstractController.params : <code>Object.&lt;string, string&gt;</code>*
The route parameters extracted from the current route. This field is
set externally by IMA right before the [Controller#init](Controller#init) or the
[Controller#update](Controller#update) method is called.

**Kind**: instance property of [<code>AbstractController</code>](#AbstractController)  

* * *

<a name="AbstractController+init"></a>

### *abstractController.init()*
**Kind**: instance method of [<code>AbstractController</code>](#AbstractController)  

* * *

<a name="AbstractController+destroy"></a>

### *abstractController.destroy()*
**Kind**: instance method of [<code>AbstractController</code>](#AbstractController)  

* * *

<a name="AbstractController+activate"></a>

### *abstractController.activate()*
**Kind**: instance method of [<code>AbstractController</code>](#AbstractController)  

* * *

<a name="AbstractController+deactivate"></a>

### *abstractController.deactivate()*
**Kind**: instance method of [<code>AbstractController</code>](#AbstractController)  

* * *

<a name="AbstractController+load"></a>

### **abstractController.load()**
**Kind**: instance abstract method of [<code>AbstractController</code>](#AbstractController)  

* * *

<a name="AbstractController+update"></a>

### *abstractController.update()*
**Kind**: instance method of [<code>AbstractController</code>](#AbstractController)  

* * *

<a name="AbstractController+setState"></a>

### *abstractController.setState()*
**Kind**: instance method of [<code>AbstractController</code>](#AbstractController)  

* * *

<a name="AbstractController+getState"></a>

### *abstractController.getState()*
**Kind**: instance method of [<code>AbstractController</code>](#AbstractController)  

* * *

<a name="AbstractController+addExtension"></a>

### *abstractController.addExtension()*
**Kind**: instance method of [<code>AbstractController</code>](#AbstractController)  

* * *

<a name="AbstractController+getExtensions"></a>

### *abstractController.getExtensions()*
**Kind**: instance method of [<code>AbstractController</code>](#AbstractController)  

* * *

<a name="AbstractController+setMetaParams"></a>

### **abstractController.setMetaParams()**
**Kind**: instance abstract method of [<code>AbstractController</code>](#AbstractController)  

* * *

<a name="AbstractController+setRouteParams"></a>

### *abstractController.setRouteParams()*
**Kind**: instance method of [<code>AbstractController</code>](#AbstractController)  

* * *

<a name="AbstractController+getRouteParams"></a>

### *abstractController.getRouteParams()*
**Kind**: instance method of [<code>AbstractController</code>](#AbstractController)  

* * *

<a name="AbstractController+setPageStateManager"></a>

### *abstractController.setPageStateManager()*
**Kind**: instance method of [<code>AbstractController</code>](#AbstractController)  

* * *

<a name="AbstractController+getHttpStatus"></a>

### *abstractController.getHttpStatus()*
**Kind**: instance method of [<code>AbstractController</code>](#AbstractController)  

* * *

