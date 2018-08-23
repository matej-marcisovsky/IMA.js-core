<a name="AbstractPageManager"></a>

## AbstractPageManager
Page manager for controller.

**Kind**: global class  

* [AbstractPageManager](#AbstractPageManager)
    * [new AbstractPageManager(pageFactory, pageRenderer, pageStateManager)](#new_AbstractPageManager_new)
    * [._pageFactory](#AbstractPageManager+_pageFactory) : <code>PageFactory</code>
    * [._pageRenderer](#AbstractPageManager+_pageRenderer) : <code>PageRenderer</code>
    * [._pageStateManager](#AbstractPageManager+_pageStateManager) : <code>PageStateManager</code>
    * [._managedPage](#AbstractPageManager+_managedPage) : <code>Object</code>
    * [.init()](#AbstractPageManager+init)
    * [.manage()](#AbstractPageManager+manage)
    * *[.scrollTo()](#AbstractPageManager+scrollTo)*
    * [.destroy()](#AbstractPageManager+destroy)
    * [._storeManagedPageValue(controller, view, options, params, controllerInstance, decoratedController, viewInstance)](#AbstractPageManager+_storeManagedPageValue)
    * [._clearManagedPageValue()](#AbstractPageManager+_clearManagedPageValue)
    * [._setRestrictedPageStateManager(extension, extensionState)](#AbstractPageManager+_setRestrictedPageStateManager)
    * [._initPageSource()](#AbstractPageManager+_initPageSource)
    * [._initController()](#AbstractPageManager+_initController)
    * [._initExtensions()](#AbstractPageManager+_initExtensions)
    * [._loadPageSource()](#AbstractPageManager+_loadPageSource) ⇒ <code>Object.&lt;string, (Promise.&lt;\*&gt;\|\*)&gt;</code>
    * [._getLoadedControllerState()](#AbstractPageManager+_getLoadedControllerState) ⇒ <code>Object.&lt;string, (Promise.&lt;\*&gt;\|\*)&gt;</code>
    * [._getLoadedExtensionsState()](#AbstractPageManager+_getLoadedExtensionsState) ⇒ <code>Object.&lt;string, (Promise.&lt;\*&gt;\|\*)&gt;</code>
    * [._activatePageSource()](#AbstractPageManager+_activatePageSource)
    * [._activateController()](#AbstractPageManager+_activateController)
    * [._activateExtensions()](#AbstractPageManager+_activateExtensions)
    * [._updatePageSource()](#AbstractPageManager+_updatePageSource) ⇒ <code>Promise.&lt;{status: number, content: ?string}&gt;</code>
    * [._getUpdatedControllerState()](#AbstractPageManager+_getUpdatedControllerState) ⇒ <code>Object.&lt;string, (Promise.&lt;\*&gt;\|\*)&gt;</code>
    * [._getUpdatedExtensionsState()](#AbstractPageManager+_getUpdatedExtensionsState) ⇒ <code>Object.&lt;string, (Promise\|\*)&gt;</code>
    * [._deactivatePageSource()](#AbstractPageManager+_deactivatePageSource)
    * [._deactivateController()](#AbstractPageManager+_deactivateController)
    * [._deactivateExtensions()](#AbstractPageManager+_deactivateExtensions)
    * [._destroyPageSource()](#AbstractPageManager+_destroyPageSource)
    * [._destroyController()](#AbstractPageManager+_destroyController)
    * [._destroyExtensions()](#AbstractPageManager+_destroyExtensions)
    * [._clearComponentState(options)](#AbstractPageManager+_clearComponentState)
    * [._onChangeStateHandler(state)](#AbstractPageManager+_onChangeStateHandler)
    * [._hasOnlyUpdate(controller, view, options)](#AbstractPageManager+_hasOnlyUpdate) ⇒ <code>boolean</code>
    * [._preManage(options)](#AbstractPageManager+_preManage)
    * [._postManage(options)](#AbstractPageManager+_postManage)


* * *

<a name="new_AbstractPageManager_new"></a>

### new AbstractPageManager(pageFactory, pageRenderer, pageStateManager)
Initializes the page manager.


| Param | Type | Description |
| --- | --- | --- |
| pageFactory | <code>PageFactory</code> | Factory used by the page manager to        create instances of the controller for the current route, and        decorate the controllers and page state managers. |
| pageRenderer | <code>PageRenderer</code> | The current renderer of the page. |
| pageStateManager | <code>PageStateManager</code> | The current page state        manager. |


* * *

<a name="AbstractPageManager+_pageFactory"></a>

### abstractPageManager._pageFactory : <code>PageFactory</code>
Factory used by the page manager to create instances of the
controller for the current route, and decorate the controllers and
page state managers.

**Kind**: instance property of [<code>AbstractPageManager</code>](#AbstractPageManager)  
**Access**: protected  

* * *

<a name="AbstractPageManager+_pageRenderer"></a>

### abstractPageManager._pageRenderer : <code>PageRenderer</code>
The current renderer of the page.

**Kind**: instance property of [<code>AbstractPageManager</code>](#AbstractPageManager)  
**Access**: protected  

* * *

<a name="AbstractPageManager+_pageStateManager"></a>

### abstractPageManager._pageStateManager : <code>PageStateManager</code>
The current page state manager.

**Kind**: instance property of [<code>AbstractPageManager</code>](#AbstractPageManager)  
**Access**: protected  

* * *

<a name="AbstractPageManager+_managedPage"></a>

### abstractPageManager._managedPage : <code>Object</code>
Details of the currently managed page.

**Kind**: instance property of [<code>AbstractPageManager</code>](#AbstractPageManager)  
**Access**: protected  

* * *

<a name="AbstractPageManager+init"></a>

### abstractPageManager.init()
**Kind**: instance method of [<code>AbstractPageManager</code>](#AbstractPageManager)  

* * *

<a name="AbstractPageManager+manage"></a>

### abstractPageManager.manage()
**Kind**: instance method of [<code>AbstractPageManager</code>](#AbstractPageManager)  

* * *

<a name="AbstractPageManager+scrollTo"></a>

### *abstractPageManager.scrollTo()*
**Kind**: instance abstract method of [<code>AbstractPageManager</code>](#AbstractPageManager)  

* * *

<a name="AbstractPageManager+destroy"></a>

### abstractPageManager.destroy()
**Kind**: instance method of [<code>AbstractPageManager</code>](#AbstractPageManager)  

* * *

<a name="AbstractPageManager+_storeManagedPageValue"></a>

### abstractPageManager._storeManagedPageValue(controller, view, options, params, controllerInstance, decoratedController, viewInstance)
**Kind**: instance method of [<code>AbstractPageManager</code>](#AbstractPageManager)  
**Access**: protected  

| Param | Type | Description |
| --- | --- | --- |
| controller | <code>string</code> \| <code>function</code> |  |
| view | <code>string</code> \| <code>function</code> |  |
| options | <code>Object</code> |  |
| params | <code>Object.&lt;string, string&gt;</code> | The route parameters. |
| controllerInstance | <code>AbstractController</code> |  |
| decoratedController | <code>ControllerDecorator</code> |  |
| viewInstance | <code>React.Component</code> |  |


* * *

<a name="AbstractPageManager+_clearManagedPageValue"></a>

### abstractPageManager._clearManagedPageValue()
Clear value from managed page.

**Kind**: instance method of [<code>AbstractPageManager</code>](#AbstractPageManager)  
**Access**: protected  

* * *

<a name="AbstractPageManager+_setRestrictedPageStateManager"></a>

### abstractPageManager._setRestrictedPageStateManager(extension, extensionState)
Set page state manager to extension which has restricted rights to set
global state.

**Kind**: instance method of [<code>AbstractPageManager</code>](#AbstractPageManager)  

| Param | Type |
| --- | --- |
| extension | <code>ima.extension.Extension</code> | 
| extensionState | <code>Object.&lt;string, \*&gt;</code> | 


* * *

<a name="AbstractPageManager+_initPageSource"></a>

### abstractPageManager._initPageSource()
Initialize page source so call init method on controller and his
extensions.

**Kind**: instance method of [<code>AbstractPageManager</code>](#AbstractPageManager)  
**Access**: protected  

* * *

<a name="AbstractPageManager+_initController"></a>

### abstractPageManager._initController()
Initializes managed instance of controller with the provided parameters.

**Kind**: instance method of [<code>AbstractPageManager</code>](#AbstractPageManager)  
**Access**: protected  

* * *

<a name="AbstractPageManager+_initExtensions"></a>

### abstractPageManager._initExtensions()
Initialize extensions for managed instance of controller with the
provided parameters.

**Kind**: instance method of [<code>AbstractPageManager</code>](#AbstractPageManager)  
**Access**: protected  

* * *

<a name="AbstractPageManager+_loadPageSource"></a>

### abstractPageManager._loadPageSource() ⇒ <code>Object.&lt;string, (Promise.&lt;\*&gt;\|\*)&gt;</code>
Load page source so call load method on controller and his extensions.
Merge loaded state and render it.

**Kind**: instance method of [<code>AbstractPageManager</code>](#AbstractPageManager)  
**Access**: protected  

* * *

<a name="AbstractPageManager+_getLoadedControllerState"></a>

### abstractPageManager._getLoadedControllerState() ⇒ <code>Object.&lt;string, (Promise.&lt;\*&gt;\|\*)&gt;</code>
Load controller state from managed instance of controller.

**Kind**: instance method of [<code>AbstractPageManager</code>](#AbstractPageManager)  
**Access**: protected  

* * *

<a name="AbstractPageManager+_getLoadedExtensionsState"></a>

### abstractPageManager._getLoadedExtensionsState() ⇒ <code>Object.&lt;string, (Promise.&lt;\*&gt;\|\*)&gt;</code>
Load extensions state from managed instance of controller.

**Kind**: instance method of [<code>AbstractPageManager</code>](#AbstractPageManager)  
**Access**: protected  

* * *

<a name="AbstractPageManager+_activatePageSource"></a>

### abstractPageManager._activatePageSource()
Activate page source so call activate method on controller and his
extensions.

**Kind**: instance method of [<code>AbstractPageManager</code>](#AbstractPageManager)  
**Access**: protected  

* * *

<a name="AbstractPageManager+_activateController"></a>

### abstractPageManager._activateController()
Activate managed instance of controller.

**Kind**: instance method of [<code>AbstractPageManager</code>](#AbstractPageManager)  
**Access**: protected  

* * *

<a name="AbstractPageManager+_activateExtensions"></a>

### abstractPageManager._activateExtensions()
Activate extensions for managed instance of controller.

**Kind**: instance method of [<code>AbstractPageManager</code>](#AbstractPageManager)  
**Access**: protected  

* * *

<a name="AbstractPageManager+_updatePageSource"></a>

### abstractPageManager._updatePageSource() ⇒ <code>Promise.&lt;{status: number, content: ?string}&gt;</code>
Update page source so call update method on controller and his
extensions. Merge updated state and render it.

**Kind**: instance method of [<code>AbstractPageManager</code>](#AbstractPageManager)  
**Access**: protected  

* * *

<a name="AbstractPageManager+_getUpdatedControllerState"></a>

### abstractPageManager._getUpdatedControllerState() ⇒ <code>Object.&lt;string, (Promise.&lt;\*&gt;\|\*)&gt;</code>
Return updated controller state for current page controller.

**Kind**: instance method of [<code>AbstractPageManager</code>](#AbstractPageManager)  
**Access**: protected  

* * *

<a name="AbstractPageManager+_getUpdatedExtensionsState"></a>

### abstractPageManager._getUpdatedExtensionsState() ⇒ <code>Object.&lt;string, (Promise\|\*)&gt;</code>
Return updated extensions state for current page controller.

**Kind**: instance method of [<code>AbstractPageManager</code>](#AbstractPageManager)  
**Access**: protected  

* * *

<a name="AbstractPageManager+_deactivatePageSource"></a>

### abstractPageManager._deactivatePageSource()
Deactivate page source so call deactivate method on controller and his
extensions.

**Kind**: instance method of [<code>AbstractPageManager</code>](#AbstractPageManager)  
**Access**: protected  

* * *

<a name="AbstractPageManager+_deactivateController"></a>

### abstractPageManager._deactivateController()
Deactivate last managed instance of controller only If controller was
activated.

**Kind**: instance method of [<code>AbstractPageManager</code>](#AbstractPageManager)  
**Access**: protected  

* * *

<a name="AbstractPageManager+_deactivateExtensions"></a>

### abstractPageManager._deactivateExtensions()
Deactivate extensions for last managed instance of controller only if
they were activated.

**Kind**: instance method of [<code>AbstractPageManager</code>](#AbstractPageManager)  
**Access**: protected  

* * *

<a name="AbstractPageManager+_destroyPageSource"></a>

### abstractPageManager._destroyPageSource()
Destroy page source so call destroy method on controller and his
extensions.

**Kind**: instance method of [<code>AbstractPageManager</code>](#AbstractPageManager)  
**Access**: protected  

* * *

<a name="AbstractPageManager+_destroyController"></a>

### abstractPageManager._destroyController()
Destroy last managed instance of controller.

**Kind**: instance method of [<code>AbstractPageManager</code>](#AbstractPageManager)  
**Access**: protected  

* * *

<a name="AbstractPageManager+_destroyExtensions"></a>

### abstractPageManager._destroyExtensions()
Destroy extensions for last managed instance of controller.

**Kind**: instance method of [<code>AbstractPageManager</code>](#AbstractPageManager)  
**Access**: protected  

* * *

<a name="AbstractPageManager+_clearComponentState"></a>

### abstractPageManager._clearComponentState(options)
The method clear state on current renderred component to DOM.

**Kind**: instance method of [<code>AbstractPageManager</code>](#AbstractPageManager)  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | The current route options. |


* * *

<a name="AbstractPageManager+_onChangeStateHandler"></a>

### abstractPageManager._onChangeStateHandler(state)
On change event handler set state to view.

**Kind**: instance method of [<code>AbstractPageManager</code>](#AbstractPageManager)  

| Param | Type |
| --- | --- |
| state | <code>Object.&lt;string, \*&gt;</code> | 


* * *

<a name="AbstractPageManager+_hasOnlyUpdate"></a>

### abstractPageManager._hasOnlyUpdate(controller, view, options) ⇒ <code>boolean</code>
Return true if manager has to update last managed controller and view.

**Kind**: instance method of [<code>AbstractPageManager</code>](#AbstractPageManager)  
**Access**: protected  

| Param | Type |
| --- | --- |
| controller | <code>string</code> \| <code>function</code> | 
| view | <code>string</code> \| <code>function</code> | 
| options | <code>Object</code> | 


* * *

<a name="AbstractPageManager+_preManage"></a>

### abstractPageManager._preManage(options)
Make defined instruction as scroll for current page options before than
change page.

**Kind**: instance method of [<code>AbstractPageManager</code>](#AbstractPageManager)  
**Access**: protected  

| Param | Type |
| --- | --- |
| options | <code>Object</code> | 


* * *

<a name="AbstractPageManager+_postManage"></a>

### abstractPageManager._postManage(options)
Make defined instruction for current page options after that
changed page.

**Kind**: instance method of [<code>AbstractPageManager</code>](#AbstractPageManager)  
**Access**: protected  

| Param | Type |
| --- | --- |
| options | <code>Object</code> | 


* * *

