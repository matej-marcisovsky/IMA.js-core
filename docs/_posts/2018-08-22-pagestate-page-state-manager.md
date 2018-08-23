<a name="PageStateManager"></a>

## PageStateManager
Manager of the current page state and state history.

**Kind**: global class  

* [PageStateManager](#PageStateManager)
    * [.clear()](#PageStateManager+clear)
    * [.setState(statePatch)](#PageStateManager+setState)
    * [.getState()](#PageStateManager+getState) ⇒ <code>Object.&lt;string, \*&gt;</code>
    * [.getAllStates()](#PageStateManager+getAllStates) ⇒ <code>Array.&lt;Object.&lt;string, \*&gt;&gt;</code>


* * *

<a name="PageStateManager+clear"></a>

### pageStateManager.clear()
Clears the state history.

**Kind**: instance method of [<code>PageStateManager</code>](#PageStateManager)  

* * *

<a name="PageStateManager+setState"></a>

### pageStateManager.setState(statePatch)
Sets a new page state by applying the provided patch to the current
state.

**Kind**: instance method of [<code>PageStateManager</code>](#PageStateManager)  

| Param | Type | Description |
| --- | --- | --- |
| statePatch | <code>Object.&lt;string, \*&gt;</code> | The patch of the current state. |


* * *

<a name="PageStateManager+getState"></a>

### pageStateManager.getState() ⇒ <code>Object.&lt;string, \*&gt;</code>
Returns the current page state.

**Kind**: instance method of [<code>PageStateManager</code>](#PageStateManager)  
**Returns**: <code>Object.&lt;string, \*&gt;</code> - The current page state.  

* * *

<a name="PageStateManager+getAllStates"></a>

### pageStateManager.getAllStates() ⇒ <code>Array.&lt;Object.&lt;string, \*&gt;&gt;</code>
Returns the recorded history of page states. The states will be
chronologically sorted from the oldest to the newest.

Note that the implementation may limit the size of the recorded history,
therefore the complete history may not be available.

**Kind**: instance method of [<code>PageStateManager</code>](#PageStateManager)  
**Returns**: <code>Array.&lt;Object.&lt;string, \*&gt;&gt;</code> - The recorded history of page states.  

* * *

