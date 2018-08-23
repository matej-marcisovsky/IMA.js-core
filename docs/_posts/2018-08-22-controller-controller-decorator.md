<a name="ControllerDecorator"></a>

## ControllerDecorator ⇐ <code>Controller</code>
Decorator for page controllers. The decorator manages references to the meta
attributes manager and other utilities so these can be easily provided to
the decorated page controller when needed.

**Kind**: global class  
**Extends**: <code>Controller</code>  

* [ControllerDecorator](#ControllerDecorator) ⇐ <code>Controller</code>
    * [new ControllerDecorator(controller, metaManager, router, dictionary, settings)](#new_ControllerDecorator_new)
    * [._controller](#ControllerDecorator+_controller) : <code>Controller</code>
    * [._metaManager](#ControllerDecorator+_metaManager) : <code>MetaManager</code>
    * [._router](#ControllerDecorator+_router) : <code>Router</code>
    * [._dictionary](#ControllerDecorator+_dictionary) : <code>Dictionary</code>
    * [._settings](#ControllerDecorator+_settings) : <code>Object.&lt;string, \*&gt;</code>
    * [.init()](#ControllerDecorator+init)
    * [.destroy()](#ControllerDecorator+destroy)
    * [.activate()](#ControllerDecorator+activate)
    * [.deactivate()](#ControllerDecorator+deactivate)
    * [.load()](#ControllerDecorator+load)
    * [.update()](#ControllerDecorator+update)
    * [.setReactiveView()](#ControllerDecorator+setReactiveView)
    * [.setState()](#ControllerDecorator+setState)
    * [.getState()](#ControllerDecorator+getState)
    * [.addExtension()](#ControllerDecorator+addExtension)
    * [.getExtensions()](#ControllerDecorator+getExtensions)
    * [.setMetaParams()](#ControllerDecorator+setMetaParams)
    * [.setRouteParams()](#ControllerDecorator+setRouteParams)
    * [.getRouteParams()](#ControllerDecorator+getRouteParams)
    * [.setPageStateManager()](#ControllerDecorator+setPageStateManager)
    * [.getHttpStatus()](#ControllerDecorator+getHttpStatus)
    * [.getMetaManager()](#ControllerDecorator+getMetaManager) ⇒ <code>MetaManager</code>


* * *

<a name="new_ControllerDecorator_new"></a>

### new ControllerDecorator(controller, metaManager, router, dictionary, settings)
Initializes the controller decorator.


| Param | Type | Description |
| --- | --- | --- |
| controller | <code>Controller</code> | The controller being decorated. |
| metaManager | <code>MetaManager</code> | The meta page attributes manager. |
| router | <code>Router</code> | The application router. |
| dictionary | <code>Dictionary</code> | Localization phrases dictionary. |
| settings | <code>Object.&lt;string, \*&gt;</code> | Application settings for the        current application environment. |


* * *

<a name="ControllerDecorator+_controller"></a>

### controllerDecorator._controller : <code>Controller</code>
The controller being decorated.

**Kind**: instance property of [<code>ControllerDecorator</code>](#ControllerDecorator)  

* * *

<a name="ControllerDecorator+_metaManager"></a>

### controllerDecorator._metaManager : <code>MetaManager</code>
The meta page attributes manager.

**Kind**: instance property of [<code>ControllerDecorator</code>](#ControllerDecorator)  

* * *

<a name="ControllerDecorator+_router"></a>

### controllerDecorator._router : <code>Router</code>
The application router.

**Kind**: instance property of [<code>ControllerDecorator</code>](#ControllerDecorator)  

* * *

<a name="ControllerDecorator+_dictionary"></a>

### controllerDecorator._dictionary : <code>Dictionary</code>
Localization phrases dictionary.

**Kind**: instance property of [<code>ControllerDecorator</code>](#ControllerDecorator)  

* * *

<a name="ControllerDecorator+_settings"></a>

### controllerDecorator._settings : <code>Object.&lt;string, \*&gt;</code>
Application settings for the current application environment.

**Kind**: instance property of [<code>ControllerDecorator</code>](#ControllerDecorator)  

* * *

<a name="ControllerDecorator+init"></a>

### controllerDecorator.init()
**Kind**: instance method of [<code>ControllerDecorator</code>](#ControllerDecorator)  

* * *

<a name="ControllerDecorator+destroy"></a>

### controllerDecorator.destroy()
**Kind**: instance method of [<code>ControllerDecorator</code>](#ControllerDecorator)  

* * *

<a name="ControllerDecorator+activate"></a>

### controllerDecorator.activate()
**Kind**: instance method of [<code>ControllerDecorator</code>](#ControllerDecorator)  

* * *

<a name="ControllerDecorator+deactivate"></a>

### controllerDecorator.deactivate()
**Kind**: instance method of [<code>ControllerDecorator</code>](#ControllerDecorator)  

* * *

<a name="ControllerDecorator+load"></a>

### controllerDecorator.load()
**Kind**: instance method of [<code>ControllerDecorator</code>](#ControllerDecorator)  

* * *

<a name="ControllerDecorator+update"></a>

### controllerDecorator.update()
**Kind**: instance method of [<code>ControllerDecorator</code>](#ControllerDecorator)  

* * *

<a name="ControllerDecorator+setReactiveView"></a>

### controllerDecorator.setReactiveView()
**Kind**: instance method of [<code>ControllerDecorator</code>](#ControllerDecorator)  

* * *

<a name="ControllerDecorator+setState"></a>

### controllerDecorator.setState()
**Kind**: instance method of [<code>ControllerDecorator</code>](#ControllerDecorator)  

* * *

<a name="ControllerDecorator+getState"></a>

### controllerDecorator.getState()
**Kind**: instance method of [<code>ControllerDecorator</code>](#ControllerDecorator)  

* * *

<a name="ControllerDecorator+addExtension"></a>

### controllerDecorator.addExtension()
**Kind**: instance method of [<code>ControllerDecorator</code>](#ControllerDecorator)  

* * *

<a name="ControllerDecorator+getExtensions"></a>

### controllerDecorator.getExtensions()
**Kind**: instance method of [<code>ControllerDecorator</code>](#ControllerDecorator)  

* * *

<a name="ControllerDecorator+setMetaParams"></a>

### controllerDecorator.setMetaParams()
**Kind**: instance method of [<code>ControllerDecorator</code>](#ControllerDecorator)  

* * *

<a name="ControllerDecorator+setRouteParams"></a>

### controllerDecorator.setRouteParams()
**Kind**: instance method of [<code>ControllerDecorator</code>](#ControllerDecorator)  

* * *

<a name="ControllerDecorator+getRouteParams"></a>

### controllerDecorator.getRouteParams()
**Kind**: instance method of [<code>ControllerDecorator</code>](#ControllerDecorator)  

* * *

<a name="ControllerDecorator+setPageStateManager"></a>

### controllerDecorator.setPageStateManager()
**Kind**: instance method of [<code>ControllerDecorator</code>](#ControllerDecorator)  

* * *

<a name="ControllerDecorator+getHttpStatus"></a>

### controllerDecorator.getHttpStatus()
**Kind**: instance method of [<code>ControllerDecorator</code>](#ControllerDecorator)  

* * *

<a name="ControllerDecorator+getMetaManager"></a>

### controllerDecorator.getMetaManager() ⇒ <code>MetaManager</code>
Returns the meta attributes manager configured by the decorated
controller.

**Kind**: instance method of [<code>ControllerDecorator</code>](#ControllerDecorator)  
**Returns**: <code>MetaManager</code> - The Meta attributes manager configured by the
        decorated controller.  

* * *

