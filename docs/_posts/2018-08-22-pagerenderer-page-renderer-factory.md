<a name="PageRendererFactory"></a>

## PageRendererFactory
Factory for page render.

**Kind**: global class  

* [PageRendererFactory](#PageRendererFactory)
    * [new PageRendererFactory(oc, React)](#new_PageRendererFactory_new)
    * [._oc](#PageRendererFactory+_oc) : <code>ObjectContainer</code>
    * [._React](#PageRendererFactory+_React) : <code>React</code>
    * [.getUtils()](#PageRendererFactory+getUtils)
    * [.getDocumentView(documentView)](#PageRendererFactory+getDocumentView) ⇒ <code>function</code>
    * [.getManagedRootView(managedRootView)](#PageRendererFactory+getManagedRootView) ⇒ <code>function</code>
    * [._resolveClassConstructor(view)](#PageRendererFactory+_resolveClassConstructor) ⇒ <code>function</code>
    * [.wrapView(view, props)](#PageRendererFactory+wrapView) ⇒ <code>React.Element</code>
    * [.createReactElementFactory(view)](#PageRendererFactory+createReactElementFactory) ⇒ <code>function</code>


* * *

<a name="new_PageRendererFactory_new"></a>

### new PageRendererFactory(oc, React)
Initializes the factory used by the page renderer.


| Param | Type | Description |
| --- | --- | --- |
| oc | <code>ObjectContainer</code> | The application's dependency injector - the        object container. |
| React | <code>React</code> | The React framework instance to use to render the        page. |


* * *

<a name="PageRendererFactory+_oc"></a>

### pageRendererFactory._oc : <code>ObjectContainer</code>
The application's dependency injector - the object container.

**Kind**: instance property of [<code>PageRendererFactory</code>](#PageRendererFactory)  

* * *

<a name="PageRendererFactory+_React"></a>

### pageRendererFactory._React : <code>React</code>
Rect framework instance, used to render the page.

**Kind**: instance property of [<code>PageRendererFactory</code>](#PageRendererFactory)  
**Access**: protected  

* * *

<a name="PageRendererFactory+getUtils"></a>

### pageRendererFactory.getUtils()
Return object of services which are defined for alias $Utils.

**Kind**: instance method of [<code>PageRendererFactory</code>](#PageRendererFactory)  

* * *

<a name="PageRendererFactory+getDocumentView"></a>

### pageRendererFactory.getDocumentView(documentView) ⇒ <code>function</code>
Returns the class constructor of the specified document view component.
Document view may be specified as a namespace path or as a class
constructor.

**Kind**: instance method of [<code>PageRendererFactory</code>](#PageRendererFactory)  
**Returns**: <code>function</code> - The constructor of the document
        view component.  

| Param | Type | Description |
| --- | --- | --- |
| documentView | <code>function</code> \| <code>string</code> | The        namespace path pointing to the document view component, or the        constructor of the document view component. |


* * *

<a name="PageRendererFactory+getManagedRootView"></a>

### pageRendererFactory.getManagedRootView(managedRootView) ⇒ <code>function</code>
Returns the class constructor of the specified managed root view
component. Managed root view may be specified as a namespace
path or as a class constructor.

**Kind**: instance method of [<code>PageRendererFactory</code>](#PageRendererFactory)  
**Returns**: <code>function</code> - The constructor of the managed
        root view component.  

| Param | Type | Description |
| --- | --- | --- |
| managedRootView | <code>function</code> \| <code>string</code> | The        namespace path pointing to the managed root view component, or        the constructor of the React component. |


* * *

<a name="PageRendererFactory+_resolveClassConstructor"></a>

### pageRendererFactory._resolveClassConstructor(view) ⇒ <code>function</code>
Returns the class constructor of the specified view component.
View may be specified as a namespace path or as a class
constructor.

**Kind**: instance method of [<code>PageRendererFactory</code>](#PageRendererFactory)  
**Returns**: <code>function</code> - The constructor of the view
        component.  

| Param | Type | Description |
| --- | --- | --- |
| view | <code>function</code> | The namespace path        pointing to the view component, or the constructor        of the <code>React.Component</code>. |


* * *

<a name="PageRendererFactory+wrapView"></a>

### pageRendererFactory.wrapView(view, props) ⇒ <code>React.Element</code>
Wraps the provided view into the view adapter so it can access the state
passed from controller through the <code>props</code> property instead of the
<code>state</code> property.

**Kind**: instance method of [<code>PageRendererFactory</code>](#PageRendererFactory)  
**Returns**: <code>React.Element</code> - View adapter handling passing the controller's
        state to an instance of the specified page view through
        properties.  

| Param | Type | Description |
| --- | --- | --- |
| view | <code>function</code> \| <code>string</code> | The namespace path        pointing to the view component, or the constructor        of the <code>React.Component</code>. |
| props | <code>Object</code> | The initial props to pass to the view. |


* * *

<a name="PageRendererFactory+createReactElementFactory"></a>

### pageRendererFactory.createReactElementFactory(view) ⇒ <code>function</code>
Return a function that produces ReactElements of a given type.
Like React.createElement.

**Kind**: instance method of [<code>PageRendererFactory</code>](#PageRendererFactory)  
**Returns**: <code>function</code> - The created factory
        function. The factory accepts an object containing the
        component's properties as the argument and returns a rendered
        component.  

| Param | Type | Description |
| --- | --- | --- |
| view | <code>string</code> \| <code>function</code> | The react        component for which a factory function should be created. |


* * *

