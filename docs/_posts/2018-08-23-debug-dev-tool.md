<a name="DevTool"></a>

## DevTool
Developer tools, used mostly for navigating the page state history.

**Kind**: global class  

* [DevTool](#DevTool)
    * [new DevTool(pageManager, stateManager, window, dispatcher, eventBus)](#new_DevTool_new)
    * [._pageManager](#DevTool+_pageManager) : <code>PageManager</code>
    * [._stateManager](#DevTool+_stateManager) : <code>PageStateManager</code>
    * [._window](#DevTool+_window) : <code>Window</code>
    * [._dispatcher](#DevTool+_dispatcher) : <code>Dispatcher</code>
    * [._eventBus](#DevTool+_eventBus) : <code>EventBus</code>
    * [.init()](#DevTool+init)
    * [.setState(statePatch)](#DevTool+setState)
    * [.getState()](#DevTool+getState) ⇒ <code>Object.&lt;string, \*&gt;</code>
    * [.clearAppSource()](#DevTool+clearAppSource)


* * *

<a name="new_DevTool_new"></a>

### new DevTool(pageManager, stateManager, window, dispatcher, eventBus)
Initializes the developer tools.


| Param | Type | Description |
| --- | --- | --- |
| pageManager | <code>PageManager</code> | Application page manager. |
| stateManager | <code>PageStateManager</code> | Application state manager. |
| window | <code>Window</code> | IMA window wrapper. |
| dispatcher | <code>Dispatcher</code> | IMA event dispatcher. |
| eventBus | <code>EventBus</code> | IMA DOM event bus. |


* * *

<a name="DevTool+_pageManager"></a>

### devTool._pageManager : <code>PageManager</code>
Application page manager.

**Kind**: instance property of [<code>DevTool</code>](#DevTool)  

* * *

<a name="DevTool+_stateManager"></a>

### devTool._stateManager : <code>PageStateManager</code>
Application state manager.

**Kind**: instance property of [<code>DevTool</code>](#DevTool)  

* * *

<a name="DevTool+_window"></a>

### devTool._window : <code>Window</code>
IMA window wrapper.

**Kind**: instance property of [<code>DevTool</code>](#DevTool)  

* * *

<a name="DevTool+_dispatcher"></a>

### devTool._dispatcher : <code>Dispatcher</code>
IMA event dispatcher.

**Kind**: instance property of [<code>DevTool</code>](#DevTool)  

* * *

<a name="DevTool+_eventBus"></a>

### devTool._eventBus : <code>EventBus</code>
IMA DOM event bus.

**Kind**: instance property of [<code>DevTool</code>](#DevTool)  

* * *

<a name="DevTool+init"></a>

### devTool.init()
Initializes the developer tools.

**Kind**: instance method of [<code>DevTool</code>](#DevTool)  

* * *

<a name="DevTool+setState"></a>

### devTool.setState(statePatch)
Sets the provided state to the state manager.

**Kind**: instance method of [<code>DevTool</code>](#DevTool)  

| Param | Type | Description |
| --- | --- | --- |
| statePatch | <code>Object.&lt;string, \*&gt;</code> | A patch of the current page state. |


* * *

<a name="DevTool+getState"></a>

### devTool.getState() ⇒ <code>Object.&lt;string, \*&gt;</code>
Returns the current page state.

**Kind**: instance method of [<code>DevTool</code>](#DevTool)  
**Returns**: <code>Object.&lt;string, \*&gt;</code> - The current page state.  

* * *

<a name="DevTool+clearAppSource"></a>

### devTool.clearAppSource()
Clears the current application state.

**Kind**: instance method of [<code>DevTool</code>](#DevTool)  

* * *

