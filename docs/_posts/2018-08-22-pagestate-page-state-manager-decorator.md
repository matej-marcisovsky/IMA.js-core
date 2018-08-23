<a name="PageStateManagerDecorator"></a>

## PageStateManagerDecorator
Decorator for page state manager, which add logic for limiting Extension
competence.

**Kind**: global class  

* [PageStateManagerDecorator](#PageStateManagerDecorator)
    * [new PageStateManagerDecorator(pageStateManager, allowedStateKeys)](#new_PageStateManagerDecorator_new)
    * [._pageStateManager](#PageStateManagerDecorator+_pageStateManager) : <code>PageStateManager</code>
    * [._allowedStateKeys](#PageStateManagerDecorator+_allowedStateKeys) : <code>Array.&lt;string&gt;</code>
    * [.clear()](#PageStateManagerDecorator+clear)
    * [.setState()](#PageStateManagerDecorator+setState)
    * [.getState()](#PageStateManagerDecorator+getState)
    * [.getAllStates()](#PageStateManagerDecorator+getAllStates)


* * *

<a name="new_PageStateManagerDecorator_new"></a>

### new PageStateManagerDecorator(pageStateManager, allowedStateKeys)
Initializes the page state manager decorator.


| Param | Type |
| --- | --- |
| pageStateManager | <code>PageStateManager</code> | 
| allowedStateKeys | <code>Array.&lt;string&gt;</code> | 


* * *

<a name="PageStateManagerDecorator+_pageStateManager"></a>

### pageStateManagerDecorator._pageStateManager : <code>PageStateManager</code>
The current page state manager.

**Kind**: instance property of [<code>PageStateManagerDecorator</code>](#PageStateManagerDecorator)  

* * *

<a name="PageStateManagerDecorator+_allowedStateKeys"></a>

### pageStateManagerDecorator._allowedStateKeys : <code>Array.&lt;string&gt;</code>
Array of access keys for state.

**Kind**: instance property of [<code>PageStateManagerDecorator</code>](#PageStateManagerDecorator)  

* * *

<a name="PageStateManagerDecorator+clear"></a>

### pageStateManagerDecorator.clear()
**Kind**: instance method of [<code>PageStateManagerDecorator</code>](#PageStateManagerDecorator)  

* * *

<a name="PageStateManagerDecorator+setState"></a>

### pageStateManagerDecorator.setState()
**Kind**: instance method of [<code>PageStateManagerDecorator</code>](#PageStateManagerDecorator)  

* * *

<a name="PageStateManagerDecorator+getState"></a>

### pageStateManagerDecorator.getState()
**Kind**: instance method of [<code>PageStateManagerDecorator</code>](#PageStateManagerDecorator)  

* * *

<a name="PageStateManagerDecorator+getAllStates"></a>

### pageStateManagerDecorator.getAllStates()
**Kind**: instance method of [<code>PageStateManagerDecorator</code>](#PageStateManagerDecorator)  

* * *

