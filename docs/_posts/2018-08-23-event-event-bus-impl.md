## Classes

<dl>
<dt><a href="#EventBusImpl">EventBusImpl</a></dt>
<dd><p>Helper for custom events.</p>
<p>It offers public methods for firing custom events and two methods for
catching events (e.g. inside view components).</p>
</dd>
</dl>

## Constants

<dl>
<dt><a href="#IMA_EVENT">IMA_EVENT</a> : <code>string</code></dt>
<dd><p>Global name of IMA.js custom event.</p>
</dd>
</dl>

<a name="EventBusImpl"></a>

## EventBusImpl
Helper for custom events.

It offers public methods for firing custom events and two methods for
catching events (e.g. inside view components).

**Kind**: global class  

* [EventBusImpl](#EventBusImpl)
    * [new EventBusImpl(window)](#new_EventBusImpl_new)
    * [._window](#EventBusImpl+_window) : <code>Window</code>
    * [._listeners](#EventBusImpl+_listeners) : <code>WeakMap.&lt;function(Event), WeakMap.&lt;EventTarget, Map.&lt;string, function(Event)&gt;&gt;&gt;</code>
    * [._allEventListeners](#EventBusImpl+_allEventListeners) : <code>WeakMap.&lt;EventTarget, WeakSet.&lt;function(Event)&gt;&gt;</code>
    * [.fire()](#EventBusImpl+fire)
    * [.listenAll()](#EventBusImpl+listenAll)
    * [.listen()](#EventBusImpl+listen)
    * [.unlistenAll()](#EventBusImpl+unlistenAll)
    * [.unlisten()](#EventBusImpl+unlisten)


* * *

<a name="new_EventBusImpl_new"></a>

### new EventBusImpl(window)
Initializes the custom event helper.


| Param | Type | Description |
| --- | --- | --- |
| window | <code>Window</code> | The IMA window helper. |


* * *

<a name="EventBusImpl+_window"></a>

### eventBusImpl._window : <code>Window</code>
The IMA window helper.

**Kind**: instance property of [<code>EventBusImpl</code>](#EventBusImpl)  

* * *

<a name="EventBusImpl+_listeners"></a>

### eventBusImpl._listeners : <code>WeakMap.&lt;function(Event), WeakMap.&lt;EventTarget, Map.&lt;string, function(Event)&gt;&gt;&gt;</code>
Map of listeners provided to the public API of this event bus to a
map of event targets to a map of event names to actual listeners
bound to the native API.

The "listen all" event listeners are not registered in this map.

**Kind**: instance property of [<code>EventBusImpl</code>](#EventBusImpl)  

* * *

<a name="EventBusImpl+_allEventListeners"></a>

### eventBusImpl._allEventListeners : <code>WeakMap.&lt;EventTarget, WeakSet.&lt;function(Event)&gt;&gt;</code>
Map of event targets to listeners executed on all IMA.js event bus
events.

**Kind**: instance property of [<code>EventBusImpl</code>](#EventBusImpl)  

* * *

<a name="EventBusImpl+fire"></a>

### eventBusImpl.fire()
**Kind**: instance method of [<code>EventBusImpl</code>](#EventBusImpl)  

* * *

<a name="EventBusImpl+listenAll"></a>

### eventBusImpl.listenAll()
**Kind**: instance method of [<code>EventBusImpl</code>](#EventBusImpl)  

* * *

<a name="EventBusImpl+listen"></a>

### eventBusImpl.listen()
**Kind**: instance method of [<code>EventBusImpl</code>](#EventBusImpl)  

* * *

<a name="EventBusImpl+unlistenAll"></a>

### eventBusImpl.unlistenAll()
**Kind**: instance method of [<code>EventBusImpl</code>](#EventBusImpl)  

* * *

<a name="EventBusImpl+unlisten"></a>

### eventBusImpl.unlisten()
**Kind**: instance method of [<code>EventBusImpl</code>](#EventBusImpl)  

* * *

<a name="IMA_EVENT"></a>

## IMA_EVENT : <code>string</code>
Global name of IMA.js custom event.

**Kind**: global constant  

* * *

