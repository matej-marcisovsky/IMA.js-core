## Classes

<dl>
<dt><a href="#DispatcherImpl">DispatcherImpl</a></dt>
<dd><p>Default implementation of the <code>Dispatcher</code> interface.</p>
</dd>
</dl>

## Constants

<dl>
<dt><a href="#EMPTY_MAP">EMPTY_MAP</a> : <code>Map.&lt;function(*), Set.&lt;?Object&gt;&gt;</code></dt>
<dd><p>An empty immutable map of event listener to scopes, used for a mismatch in
the <code>_eventListeners</code> map.</p>
</dd>
<dt><a href="#EMPTY_SET">EMPTY_SET</a> : <code>Set.&lt;?Object&gt;</code></dt>
<dd><p>An empty immutable set of event listener scopes, used for a mismatch in the
<code>_eventListeners</code> map.</p>
</dd>
</dl>

<a name="DispatcherImpl"></a>

## DispatcherImpl
Default implementation of the <code>Dispatcher</code> interface.

**Kind**: global class  

* [DispatcherImpl](#DispatcherImpl)
    * [new DispatcherImpl()](#new_DispatcherImpl_new)
    * [._eventListeners](#DispatcherImpl+_eventListeners) : <code>Map.&lt;string, Map.&lt;function(\*), Set.&lt;?Object&gt;&gt;&gt;</code>
    * [.clear()](#DispatcherImpl+clear)
    * [.listen()](#DispatcherImpl+listen)
    * [.unlisten()](#DispatcherImpl+unlisten)
    * [.fire()](#DispatcherImpl+fire)
    * [._createNewEvent(event)](#DispatcherImpl+_createNewEvent)
    * [._createNewListener(event, listener)](#DispatcherImpl+_createNewListener)
    * [._getScopesOf(event, listener)](#DispatcherImpl+_getScopesOf) ⇒ <code>Set.&lt;?Object&gt;</code>
    * [._getListenersOf(event)](#DispatcherImpl+_getListenersOf) ⇒ <code>Map.&lt;function(\*), Set.&lt;?Object&gt;&gt;</code>


* * *

<a name="new_DispatcherImpl_new"></a>

### new DispatcherImpl()
Initializes the dispatcher.


* * *

<a name="DispatcherImpl+_eventListeners"></a>

### dispatcherImpl._eventListeners : <code>Map.&lt;string, Map.&lt;function(\*), Set.&lt;?Object&gt;&gt;&gt;</code>
Map of event names to a map of event listeners to a set of scopes to
which the event listener should be bound when being executed due to
the event.

**Kind**: instance property of [<code>DispatcherImpl</code>](#DispatcherImpl)  

* * *

<a name="DispatcherImpl+clear"></a>

### dispatcherImpl.clear()
**Kind**: instance method of [<code>DispatcherImpl</code>](#DispatcherImpl)  

* * *

<a name="DispatcherImpl+listen"></a>

### dispatcherImpl.listen()
**Kind**: instance method of [<code>DispatcherImpl</code>](#DispatcherImpl)  

* * *

<a name="DispatcherImpl+unlisten"></a>

### dispatcherImpl.unlisten()
**Kind**: instance method of [<code>DispatcherImpl</code>](#DispatcherImpl)  

* * *

<a name="DispatcherImpl+fire"></a>

### dispatcherImpl.fire()
**Kind**: instance method of [<code>DispatcherImpl</code>](#DispatcherImpl)  

* * *

<a name="DispatcherImpl+_createNewEvent"></a>

### dispatcherImpl._createNewEvent(event)
Create new Map storage of listeners for the specified event.

**Kind**: instance method of [<code>DispatcherImpl</code>](#DispatcherImpl)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>string</code> | The name of the event. |


* * *

<a name="DispatcherImpl+_createNewListener"></a>

### dispatcherImpl._createNewListener(event, listener)
Create new Set storage of scopes for the specified event and listener.

**Kind**: instance method of [<code>DispatcherImpl</code>](#DispatcherImpl)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>string</code> | The name of the event. |
| listener | <code>function</code> | The event listener. |


* * *

<a name="DispatcherImpl+_getScopesOf"></a>

### dispatcherImpl._getScopesOf(event, listener) ⇒ <code>Set.&lt;?Object&gt;</code>
Retrieves the scopes in which the specified event listener should be
executed for the specified event.

**Kind**: instance method of [<code>DispatcherImpl</code>](#DispatcherImpl)  
**Returns**: <code>Set.&lt;?Object&gt;</code> - The scopes in which the specified listeners
        should be executed in case of the specified event. The returned
        set is an unmodifiable empty set if no listeners are registered
        for the event.  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>string</code> | The name of the event. |
| listener | <code>function</code> | The event listener. |


* * *

<a name="DispatcherImpl+_getListenersOf"></a>

### dispatcherImpl._getListenersOf(event) ⇒ <code>Map.&lt;function(\*), Set.&lt;?Object&gt;&gt;</code>
Retrieves the map of event listeners to scopes they are bound to.

**Kind**: instance method of [<code>DispatcherImpl</code>](#DispatcherImpl)  
**Returns**: <code>Map.&lt;function(\*), Set.&lt;?Object&gt;&gt;</code> - A map of event listeners to the
        scopes in which they should be executed. The returned map is an
        unmodifiable empty map if no listeners are registered for the
        event.  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>string</code> | The name of the event. |


* * *

<a name="EMPTY_MAP"></a>

## EMPTY_MAP : <code>Map.&lt;function(\*), Set.&lt;?Object&gt;&gt;</code>
An empty immutable map of event listener to scopes, used for a mismatch in
the <code>_eventListeners</code> map.

**Kind**: global constant  

* * *

<a name="EMPTY_SET"></a>

## EMPTY_SET : <code>Set.&lt;?Object&gt;</code>
An empty immutable set of event listener scopes, used for a mismatch in the
<code>_eventListeners</code> map.

**Kind**: global constant  

* * *

