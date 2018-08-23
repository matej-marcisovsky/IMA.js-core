<a name="ClientPageRenderer"></a>

## ClientPageRenderer
Client-side page renderer. The renderer attempts to reuse the markup sent by
server if possible.

**Kind**: global class  

* [ClientPageRenderer](#ClientPageRenderer)
    * [new ClientPageRenderer(factory, Helper, ReactDOM, settings, window)](#new_ClientPageRenderer_new)
    * [._firstTime](#ClientPageRenderer+_firstTime) : <code>boolean</code>
    * [._window](#ClientPageRenderer+_window) : <code>Window</code>
    * [._viewContainer](#ClientPageRenderer+_viewContainer) : <code>HTMLElement</code>
    * [.mount()](#ClientPageRenderer+mount)
    * [.update()](#ClientPageRenderer+update)
    * [.unmount()](#ClientPageRenderer+unmount)
    * [._handleError(error)](#ClientPageRenderer+_handleError)
    * [._patchPromisesToState(controller, patchedPromises)](#ClientPageRenderer+_patchPromisesToState)
    * [._renderToDOM(controller, view, routeOptions)](#ClientPageRenderer+_renderToDOM)
    * [._separatePromisesAndValues(dataMap)](#ClientPageRenderer+_separatePromisesAndValues) ⇒ <code>Object</code>
    * [._updateMetaAttributes(metaManager)](#ClientPageRenderer+_updateMetaAttributes)
    * [._updateMetaNameAttributes(metaManager)](#ClientPageRenderer+_updateMetaNameAttributes)
    * [._updateMetaPropertyAttributes(metaManager)](#ClientPageRenderer+_updateMetaPropertyAttributes)
    * [._updateMetaLinkAttributes(metaManager)](#ClientPageRenderer+_updateMetaLinkAttributes)


* * *

<a name="new_ClientPageRenderer_new"></a>

### new ClientPageRenderer(factory, Helper, ReactDOM, settings, window)
Initializes the client-side page renderer.


| Param | Type | Description |
| --- | --- | --- |
| factory | <code>PageRendererFactory</code> | Factory for receive $Utils to view. |
| Helper | <code>vendor.$Helper</code> | The IMA.js helper methods. |
| ReactDOM | <code>vendor.ReactDOM</code> | React framework instance to use to        render the page on the client side. |
| settings | <code>Object.&lt;string, \*&gt;</code> | The application setting for the        current application environment. |
| window | <code>Window</code> | Helper for manipulating the global object        (<code>window</code>) regardless of the client/server-side        environment. |


* * *

<a name="ClientPageRenderer+_firstTime"></a>

### clientPageRenderer._firstTime : <code>boolean</code>
Flag signalling that the page is being rendered for the first time.

**Kind**: instance property of [<code>ClientPageRenderer</code>](#ClientPageRenderer)  

* * *

<a name="ClientPageRenderer+_window"></a>

### clientPageRenderer._window : <code>Window</code>
Helper for manipulating the global object (<code>window</code>)
regardless of the client/server-side environment.

**Kind**: instance property of [<code>ClientPageRenderer</code>](#ClientPageRenderer)  

* * *

<a name="ClientPageRenderer+_viewContainer"></a>

### clientPageRenderer._viewContainer : <code>HTMLElement</code>
The HTML element containing the current application view for the
current route.

**Kind**: instance property of [<code>ClientPageRenderer</code>](#ClientPageRenderer)  

* * *

<a name="ClientPageRenderer+mount"></a>

### clientPageRenderer.mount()
**Kind**: instance method of [<code>ClientPageRenderer</code>](#ClientPageRenderer)  

* * *

<a name="ClientPageRenderer+update"></a>

### clientPageRenderer.update()
**Kind**: instance method of [<code>ClientPageRenderer</code>](#ClientPageRenderer)  

* * *

<a name="ClientPageRenderer+unmount"></a>

### clientPageRenderer.unmount()
**Kind**: instance method of [<code>ClientPageRenderer</code>](#ClientPageRenderer)  

* * *

<a name="ClientPageRenderer+_handleError"></a>

### clientPageRenderer._handleError(error)
Show error to console in $Debug mode and re-throw that error
for other error handler.

**Kind**: instance method of [<code>ClientPageRenderer</code>](#ClientPageRenderer)  
**Throws**:

- <code>Error</code> Re-throws the handled error.


| Param | Type |
| --- | --- |
| error | <code>Error</code> | 


* * *

<a name="ClientPageRenderer+_patchPromisesToState"></a>

### clientPageRenderer._patchPromisesToState(controller, patchedPromises)
Patch promise values to controller state.

**Kind**: instance method of [<code>ClientPageRenderer</code>](#ClientPageRenderer)  

| Param | Type |
| --- | --- |
| controller | <code>ControllerDecorator</code> | 
| patchedPromises | <code>Object.&lt;string, Promise.&lt;\*&gt;&gt;</code> | 


* * *

<a name="ClientPageRenderer+_renderToDOM"></a>

### clientPageRenderer._renderToDOM(controller, view, routeOptions)
Renders the current route to DOM.

**Kind**: instance method of [<code>ClientPageRenderer</code>](#ClientPageRenderer)  

| Param | Type | Description |
| --- | --- | --- |
| controller | <code>ControllerDecorator</code> |  |
| view | <code>function</code> |  |
| routeOptions | <code>Object</code> | The current route options. |


* * *

<a name="ClientPageRenderer+_separatePromisesAndValues"></a>

### clientPageRenderer._separatePromisesAndValues(dataMap) ⇒ <code>Object</code>
Separate promises and values from provided data map. Values will be use
for default page state. Promises will be patched to state after their
resolve.

**Kind**: instance method of [<code>ClientPageRenderer</code>](#ClientPageRenderer)  
**Returns**: <code>Object</code> - Return separated promises and other values.  

| Param | Type | Description |
| --- | --- | --- |
| dataMap | <code>Object.&lt;string, \*&gt;</code> | A map of data. |


* * *

<a name="ClientPageRenderer+_updateMetaAttributes"></a>

### clientPageRenderer._updateMetaAttributes(metaManager)
Updates the title and the contents of the meta elements used for SEO.

**Kind**: instance method of [<code>ClientPageRenderer</code>](#ClientPageRenderer)  

| Param | Type | Description |
| --- | --- | --- |
| metaManager | <code>MetaManager</code> | meta attributes storage providing the        new values for page meta elements and title. |


* * *

<a name="ClientPageRenderer+_updateMetaNameAttributes"></a>

### clientPageRenderer._updateMetaNameAttributes(metaManager)
Updates the contents of the generic meta elements used for SEO.

**Kind**: instance method of [<code>ClientPageRenderer</code>](#ClientPageRenderer)  

| Param | Type | Description |
| --- | --- | --- |
| metaManager | <code>MetaManager</code> | meta attributes storage providing the        new values for page meta elements and title. |


* * *

<a name="ClientPageRenderer+_updateMetaPropertyAttributes"></a>

### clientPageRenderer._updateMetaPropertyAttributes(metaManager)
Updates the contents of the specialized meta elements used for SEO.

**Kind**: instance method of [<code>ClientPageRenderer</code>](#ClientPageRenderer)  

| Param | Type | Description |
| --- | --- | --- |
| metaManager | <code>MetaManager</code> | meta attributes storage providing the        new values for page meta elements and title. |


* * *

<a name="ClientPageRenderer+_updateMetaLinkAttributes"></a>

### clientPageRenderer._updateMetaLinkAttributes(metaManager)
Updates the href of the specialized link elements used for SEO.

**Kind**: instance method of [<code>ClientPageRenderer</code>](#ClientPageRenderer)  

| Param | Type | Description |
| --- | --- | --- |
| metaManager | <code>MetaManager</code> | meta attributes storage providing the        new values for page meta elements and title. |


* * *

