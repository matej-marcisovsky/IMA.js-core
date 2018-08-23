<a name="PageStateManagerImpl"></a>

## PageStateManagerImpl
The implementation of the {@linkcode PageStateManager} interface.

**Kind**: global class  

* [PageStateManagerImpl](#PageStateManagerImpl)
    * [new PageStateManagerImpl(dispatcher)](#new_PageStateManagerImpl_new)
    * [._states](#PageStateManagerImpl+_states) : <code>Array.&lt;Object.&lt;string, \*&gt;&gt;</code>
    * [._cursor](#PageStateManagerImpl+_cursor) : <code>number</code>
    * [.onChange](#PageStateManagerImpl+onChange) : <code>function</code>
    * [._dispatcher](#PageStateManagerImpl+_dispatcher) : <code>Dispatcher</code>
    * [.clear()](#PageStateManagerImpl+clear)
    * [.setState()](#PageStateManagerImpl+setState)
    * [.getState()](#PageStateManagerImpl+getState)
    * [.getAllStates()](#PageStateManagerImpl+getAllStates)
    * [._eraseExcessHistory()](#PageStateManagerImpl+_eraseExcessHistory)
    * [._pushToHistory(newState)](#PageStateManagerImpl+_pushToHistory)
    * [._callOnChangeCallback(newState)](#PageStateManagerImpl+_callOnChangeCallback)


* * *

<a name="new_PageStateManagerImpl_new"></a>

### new PageStateManagerImpl(dispatcher)
Initializes the page state manager.


| Param | Type | Description |
| --- | --- | --- |
| dispatcher | <code>Dispatcher</code> | Dispatcher fires events to app. |


* * *

<a name="PageStateManagerImpl+_states"></a>

### pageStateManagerImpl._states : <code>Array.&lt;Object.&lt;string, \*&gt;&gt;</code>
**Kind**: instance property of [<code>PageStateManagerImpl</code>](#PageStateManagerImpl)  

* * *

<a name="PageStateManagerImpl+_cursor"></a>

### pageStateManagerImpl._cursor : <code>number</code>
**Kind**: instance property of [<code>PageStateManagerImpl</code>](#PageStateManagerImpl)  

* * *

<a name="PageStateManagerImpl+onChange"></a>

### pageStateManagerImpl.onChange : <code>function</code>
**Kind**: instance property of [<code>PageStateManagerImpl</code>](#PageStateManagerImpl)  

* * *

<a name="PageStateManagerImpl+_dispatcher"></a>

### pageStateManagerImpl._dispatcher : <code>Dispatcher</code>
**Kind**: instance property of [<code>PageStateManagerImpl</code>](#PageStateManagerImpl)  

* * *

<a name="PageStateManagerImpl+clear"></a>

### pageStateManagerImpl.clear()
**Kind**: instance method of [<code>PageStateManagerImpl</code>](#PageStateManagerImpl)  

* * *

<a name="PageStateManagerImpl+setState"></a>

### pageStateManagerImpl.setState()
**Kind**: instance method of [<code>PageStateManagerImpl</code>](#PageStateManagerImpl)  

* * *

<a name="PageStateManagerImpl+getState"></a>

### pageStateManagerImpl.getState()
**Kind**: instance method of [<code>PageStateManagerImpl</code>](#PageStateManagerImpl)  

* * *

<a name="PageStateManagerImpl+getAllStates"></a>

### pageStateManagerImpl.getAllStates()
**Kind**: instance method of [<code>PageStateManagerImpl</code>](#PageStateManagerImpl)  

* * *

<a name="PageStateManagerImpl+_eraseExcessHistory"></a>

### pageStateManagerImpl._eraseExcessHistory()
Erase the oldest state from storage only if it exceed max
defined size of history.

**Kind**: instance method of [<code>PageStateManagerImpl</code>](#PageStateManagerImpl)  

* * *

<a name="PageStateManagerImpl+_pushToHistory"></a>

### pageStateManagerImpl._pushToHistory(newState)
Push new state to history storage.

**Kind**: instance method of [<code>PageStateManagerImpl</code>](#PageStateManagerImpl)  

| Param | Type |
| --- | --- |
| newState | <code>Object.&lt;string, \*&gt;</code> | 


* * *

<a name="PageStateManagerImpl+_callOnChangeCallback"></a>

### pageStateManagerImpl._callOnChangeCallback(newState)
Call registered callback function on (@codelink onChange) with newState.

**Kind**: instance method of [<code>PageStateManagerImpl</code>](#PageStateManagerImpl)  

| Param | Type |
| --- | --- |
| newState | <code>Object.&lt;string, \*&gt;</code> | 


* * *

