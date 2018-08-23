<a name="AbstractPageRenderer"></a>

## AbstractPageRenderer
Base class for implementations of the {@linkcode PageRenderer} interface.

**Kind**: global class  

* [AbstractPageRenderer](#AbstractPageRenderer)
    * [new AbstractPageRenderer(factory, Helper, ReactDOM, settings)](#new_AbstractPageRenderer_new)
    * [._factory](#AbstractPageRenderer+_factory) : <code>PageRendererFactory</code>
    * [._Helper](#AbstractPageRenderer+_Helper) : <code>Vendor.$Helper</code>
    * [._ReactDOM](#AbstractPageRenderer+_ReactDOM) : <code>Vendor.ReactDOM</code>
    * [._settings](#AbstractPageRenderer+_settings) : <code>Object.&lt;string, \*&gt;</code>
    * [._reactiveView](#AbstractPageRenderer+_reactiveView) : <code>React.Component</code>
    * *[.mount()](#AbstractPageRenderer+mount)*
    * [.update()](#AbstractPageRenderer+update)
    * [.unmount()](#AbstractPageRenderer+unmount)
    * [.clearState()](#AbstractPageRenderer+clearState)
    * [.setState()](#AbstractPageRenderer+setState)
    * [._generateViewProps(view, [state])](#AbstractPageRenderer+_generateViewProps) ⇒ <code>Object.&lt;string, \*&gt;</code>
    * [._getWrappedPageView(controller, view, routeOptions)](#AbstractPageRenderer+_getWrappedPageView)
    * [._getDocumentView(documentView)](#AbstractPageRenderer+_getDocumentView) ⇒ <code>function</code>


* * *

<a name="new_AbstractPageRenderer_new"></a>

### new AbstractPageRenderer(factory, Helper, ReactDOM, settings)
Initializes the abstract page renderer.


| Param | Type | Description |
| --- | --- | --- |
| factory | <code>PageRendererFactory</code> | Factory for receive $Utils to view. |
| Helper | <code>vendor.$Helper</code> | The IMA.js helper methods. |
| ReactDOM | <code>vendor.ReactDOM</code> | React framework instance, will be used        to render the page. |
| settings | <code>Object.&lt;string, \*&gt;</code> | Application settings for the current        application environment. |


* * *

<a name="AbstractPageRenderer+_factory"></a>

### abstractPageRenderer._factory : <code>PageRendererFactory</code>
Factory for receive $Utils to view.

**Kind**: instance property of [<code>AbstractPageRenderer</code>](#AbstractPageRenderer)  
**Access**: protected  

* * *

<a name="AbstractPageRenderer+_Helper"></a>

### abstractPageRenderer._Helper : <code>Vendor.$Helper</code>
The IMA.js helper methods.

**Kind**: instance property of [<code>AbstractPageRenderer</code>](#AbstractPageRenderer)  
**Access**: protected  

* * *

<a name="AbstractPageRenderer+_ReactDOM"></a>

### abstractPageRenderer._ReactDOM : <code>Vendor.ReactDOM</code>
Rect framework instance, used to render the page.

**Kind**: instance property of [<code>AbstractPageRenderer</code>](#AbstractPageRenderer)  
**Access**: protected  

* * *

<a name="AbstractPageRenderer+_settings"></a>

### abstractPageRenderer._settings : <code>Object.&lt;string, \*&gt;</code>
Application setting for the current application environment.

**Kind**: instance property of [<code>AbstractPageRenderer</code>](#AbstractPageRenderer)  
**Access**: protected  

* * *

<a name="AbstractPageRenderer+_reactiveView"></a>

### abstractPageRenderer._reactiveView : <code>React.Component</code>
**Kind**: instance property of [<code>AbstractPageRenderer</code>](#AbstractPageRenderer)  
**Access**: protected  

* * *

<a name="AbstractPageRenderer+mount"></a>

### *abstractPageRenderer.mount()*
**Kind**: instance abstract method of [<code>AbstractPageRenderer</code>](#AbstractPageRenderer)  

* * *

<a name="AbstractPageRenderer+update"></a>

### abstractPageRenderer.update()
**Kind**: instance method of [<code>AbstractPageRenderer</code>](#AbstractPageRenderer)  

* * *

<a name="AbstractPageRenderer+unmount"></a>

### abstractPageRenderer.unmount()
**Kind**: instance method of [<code>AbstractPageRenderer</code>](#AbstractPageRenderer)  

* * *

<a name="AbstractPageRenderer+clearState"></a>

### abstractPageRenderer.clearState()
**Kind**: instance method of [<code>AbstractPageRenderer</code>](#AbstractPageRenderer)  

* * *

<a name="AbstractPageRenderer+setState"></a>

### abstractPageRenderer.setState()
**Kind**: instance method of [<code>AbstractPageRenderer</code>](#AbstractPageRenderer)  

* * *

<a name="AbstractPageRenderer+_generateViewProps"></a>

### abstractPageRenderer._generateViewProps(view, [state]) ⇒ <code>Object.&lt;string, \*&gt;</code>
Generate properties for view from state.

**Kind**: instance method of [<code>AbstractPageRenderer</code>](#AbstractPageRenderer)  
**Access**: protected  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| view | <code>function</code> |  | The page        view React component to wrap. |
| [state] | <code>Object.&lt;string, \*&gt;</code> | <code>{}</code> |  |


* * *

<a name="AbstractPageRenderer+_getWrappedPageView"></a>

### abstractPageRenderer._getWrappedPageView(controller, view, routeOptions)
Returns wrapped page view component with managed root view and view adapter.

**Kind**: instance method of [<code>AbstractPageRenderer</code>](#AbstractPageRenderer)  

| Param | Type | Description |
| --- | --- | --- |
| controller | <code>ControllerDecorator</code> |  |
| view | <code>function</code> |  |
| routeOptions | <code>Object</code> | The current route options. |


* * *

<a name="AbstractPageRenderer+_getDocumentView"></a>

### abstractPageRenderer._getDocumentView(documentView) ⇒ <code>function</code>
Returns the class constructor of the specified document view component.

**Kind**: instance method of [<code>AbstractPageRenderer</code>](#AbstractPageRenderer)  
**Returns**: <code>function</code> - The constructor of the document
        view component.  

| Param | Type | Description |
| --- | --- | --- |
| documentView | <code>function</code> \| <code>string</code> | The        namespace path pointing to the document view component, or the        constructor of the document view component. |


* * *

