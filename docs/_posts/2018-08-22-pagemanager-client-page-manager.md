<a name="ClientPageManager"></a>

## ClientPageManager
Page manager for controller on the client side.

**Kind**: global class  

* [ClientPageManager](#ClientPageManager)
    * [new ClientPageManager(pageFactory, pageRenderer, stateManager, window, eventBus)](#new_ClientPageManager_new)
    * [._window](#ClientPageManager+_window) : <code>ima.window.Window</code>
    * [._eventBus](#ClientPageManager+_eventBus) : <code>ima.event.EventBus</code>
    * [._boundOnCustomEventHandler()](#ClientPageManager+_boundOnCustomEventHandler) : <code>function</code>
    * [.init()](#ClientPageManager+init)
    * [.manage()](#ClientPageManager+manage)
    * [.scrollTo()](#ClientPageManager+scrollTo)
    * [.destroy()](#ClientPageManager+destroy)
    * [._onCustomEventHandler(event)](#ClientPageManager+_onCustomEventHandler)
    * [._parseCustomEvent(event)](#ClientPageManager+_parseCustomEvent) ⇒ <code>Object</code>
    * [._handleEventWithController(method, data)](#ClientPageManager+_handleEventWithController) ⇒ <code>boolean</code>
    * [._handleEventWithExtensions(method, data)](#ClientPageManager+_handleEventWithExtensions) ⇒ <code>boolean</code>


* * *

<a name="new_ClientPageManager_new"></a>

### new ClientPageManager(pageFactory, pageRenderer, stateManager, window, eventBus)
Initializes the client-side page manager.


| Param | Type | Description |
| --- | --- | --- |
| pageFactory | <code>PageFactory</code> | Factory used by the page manager to        create instances of the controller for the current route, and        decorate the controllers and page state managers. |
| pageRenderer | <code>PageRenderer</code> | The current renderer of the page. |
| stateManager | <code>PageStateManager</code> | The current page state manager. |
| window | <code>Window</code> | The utility for manipulating the global context        and global client-side-specific APIs. |
| eventBus | <code>EventBus</code> | The event bus for dispatching and listening        for custom IMA events propagated through the DOM. |


* * *

<a name="ClientPageManager+_window"></a>

### clientPageManager._window : <code>ima.window.Window</code>
The utility for manipulating the global context and global
client-side-specific APIs.

**Kind**: instance property of [<code>ClientPageManager</code>](#ClientPageManager)  

* * *

<a name="ClientPageManager+_eventBus"></a>

### clientPageManager._eventBus : <code>ima.event.EventBus</code>
The event bus for dispatching and listening for custom IMA events
propagated through the DOM.

**Kind**: instance property of [<code>ClientPageManager</code>](#ClientPageManager)  

* * *

<a name="ClientPageManager+_boundOnCustomEventHandler"></a>

### clientPageManager._boundOnCustomEventHandler() : <code>function</code>
Event listener for the custom DOM events used by the event bus,
bound to this instance.

**Kind**: instance method of [<code>ClientPageManager</code>](#ClientPageManager)  

* * *

<a name="ClientPageManager+init"></a>

### clientPageManager.init()
**Kind**: instance method of [<code>ClientPageManager</code>](#ClientPageManager)  

* * *

<a name="ClientPageManager+manage"></a>

### clientPageManager.manage()
**Kind**: instance method of [<code>ClientPageManager</code>](#ClientPageManager)  

* * *

<a name="ClientPageManager+scrollTo"></a>

### clientPageManager.scrollTo()
**Kind**: instance method of [<code>ClientPageManager</code>](#ClientPageManager)  

* * *

<a name="ClientPageManager+destroy"></a>

### clientPageManager.destroy()
**Kind**: instance method of [<code>ClientPageManager</code>](#ClientPageManager)  

* * *

<a name="ClientPageManager+_onCustomEventHandler"></a>

### clientPageManager._onCustomEventHandler(event)
Custom DOM event handler.

The handler invokes the event listener in the active controller, if such
listener is present. The name of the controller's listener method is
created by turning the first symbol of the event's name to upper case,
and then prefixing the result with the 'on' prefix.

For example: for an event named 'toggle' the controller's listener
would be named 'onToggle'.

The controller's listener will be invoked with the event's data as an
argument.

**Kind**: instance method of [<code>ClientPageManager</code>](#ClientPageManager)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>CustomEvent</code> | The encountered event bus DOM event. |


* * *

<a name="ClientPageManager+_parseCustomEvent"></a>

### clientPageManager._parseCustomEvent(event) ⇒ <code>Object</code>
Extracts the details of the provided event bus custom DOM event, along
with the expected name of the current controller's method for
intercepting the event.

**Kind**: instance method of [<code>ClientPageManager</code>](#ClientPageManager)  
**Returns**: <code>Object</code> - The event's
        details.  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>CustomEvent</code> | The encountered event bus custom DOM event. |


* * *

<a name="ClientPageManager+_handleEventWithController"></a>

### clientPageManager._handleEventWithController(method, data) ⇒ <code>boolean</code>
Attempts to handle the currently processed event bus custom DOM event
using the current controller. The method returns <code>true</code> if the
event is handled by the controller.

**Kind**: instance method of [<code>ClientPageManager</code>](#ClientPageManager)  
**Returns**: <code>boolean</code> - <code>true</code> if the event has been handled by the
        controller, <code>false</code> if the controller does not have a
        method for processing the event.  

| Param | Type | Description |
| --- | --- | --- |
| method | <code>string</code> | The name of the method the current controller        should use to process the currently processed event bus custom        DOM event. |
| data | <code>Object.&lt;string, \*&gt;</code> | The custom event's data. |


* * *

<a name="ClientPageManager+_handleEventWithExtensions"></a>

### clientPageManager._handleEventWithExtensions(method, data) ⇒ <code>boolean</code>
Attempts to handle the currently processed event bus custom DOM event
using the registered extensions of the current controller. The method
returns <code>true</code> if the event is handled by the controller.

**Kind**: instance method of [<code>ClientPageManager</code>](#ClientPageManager)  
**Returns**: <code>boolean</code> - <code>true</code> if the event has been handled by one of
        the controller's extensions, <code>false</code> if none of the
        controller's extensions has a method for processing the event.  

| Param | Type | Description |
| --- | --- | --- |
| method | <code>string</code> | The name of the method the current controller        should use to process the currently processed event bus custom        DOM event. |
| data | <code>Object.&lt;string, \*&gt;</code> | The custom event's data. |


* * *

