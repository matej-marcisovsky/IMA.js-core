<a name="ViewAdapter"></a>

## ViewAdapter
An adapter component providing the current page controller's state to the
page view component through its properties.

**Kind**: global class  

* [ViewAdapter](#ViewAdapter)
    * [new ViewAdapter(props)](#new_ViewAdapter_new)
    * _instance_
        * [.state](#ViewAdapter+state) : <code>Object.&lt;string, \*&gt;</code>
        * [._view](#ViewAdapter+_view) : <code>function</code>
        * [.componentWillReceiveProps()](#ViewAdapter+componentWillReceiveProps)
        * [.render()](#ViewAdapter+render)
        * [.getChildContext()](#ViewAdapter+getChildContext)
    * _static_
        * [.childContextTypes](#ViewAdapter.childContextTypes) ⇒ <code>Object</code>


* * *

<a name="new_ViewAdapter_new"></a>

### new ViewAdapter(props)
Initializes the adapter component.


| Param | Type | Description |
| --- | --- | --- |
| props | <code>Object</code> | Component properties, containing the actual page view        and the initial page state to pass to the view. |


* * *

<a name="ViewAdapter+state"></a>

### viewAdapter.state : <code>Object.&lt;string, \*&gt;</code>
The current page state as provided by the controller.

**Kind**: instance property of [<code>ViewAdapter</code>](#ViewAdapter)  

* * *

<a name="ViewAdapter+_view"></a>

### viewAdapter._view : <code>function</code>
The actual page view to render.

**Kind**: instance property of [<code>ViewAdapter</code>](#ViewAdapter)  

* * *

<a name="ViewAdapter+componentWillReceiveProps"></a>

### viewAdapter.componentWillReceiveProps()
**Kind**: instance method of [<code>ViewAdapter</code>](#ViewAdapter)  

* * *

<a name="ViewAdapter+render"></a>

### viewAdapter.render()
**Kind**: instance method of [<code>ViewAdapter</code>](#ViewAdapter)  

* * *

<a name="ViewAdapter+getChildContext"></a>

### viewAdapter.getChildContext()
**Kind**: instance method of [<code>ViewAdapter</code>](#ViewAdapter)  

* * *

<a name="ViewAdapter.childContextTypes"></a>

### ViewAdapter.childContextTypes ⇒ <code>Object</code>
**Kind**: static property of [<code>ViewAdapter</code>](#ViewAdapter)  

* * *

