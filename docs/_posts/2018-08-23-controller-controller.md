<a name="Controller"></a>

## Controller
**Kind**: global interface  

* [Controller](#Controller)
    * [.init()](#Controller+init)
    * [.destroy()](#Controller+destroy)
    * [.activate()](#Controller+activate)
    * [.deactivate()](#Controller+deactivate)
    * [.load()](#Controller+load) ⇒ <code>Object.&lt;string, (Promise\|\*)&gt;</code>
    * [.update([prevParams])](#Controller+update) ⇒ <code>Object.&lt;string, (Promise\|\*)&gt;</code>
    * [.setState(statePatch)](#Controller+setState)
    * [.getState()](#Controller+getState) ⇒ <code>Object.&lt;string, \*&gt;</code>
    * [.addExtension(extension)](#Controller+addExtension) ⇒ [<code>Controller</code>](#Controller)
    * [.getExtensions()](#Controller+getExtensions) ⇒ <code>Array.&lt;Extension&gt;</code>
    * [.setMetaParams(loadedResources, metaManager, router, dictionary, settings)](#Controller+setMetaParams)
    * [.setRouteParams([params])](#Controller+setRouteParams)
    * [.getRouteParams()](#Controller+getRouteParams) ⇒ <code>Object.&lt;string, string&gt;</code>
    * [.setPageStateManager(pageStateManager)](#Controller+setPageStateManager)
    * [.getHttpStatus()](#Controller+getHttpStatus) ⇒ <code>number</code>


* * *

<a name="Controller+init"></a>

### controller.init()
Callback for initializing the controller after the route parameters have
been set on this controller.

**Kind**: instance method of [<code>Controller</code>](#Controller)  

* * *

<a name="Controller+destroy"></a>

### controller.destroy()
Finalization callback, called when the controller is being discarded by
the application. This usually happens when the user navigates to a
different URL.

This method is the lifecycle counterpart of the [init](#Controller+init)
method.

The controller should release all resources obtained in the
[init](#Controller+init) method. The controller must release any resources
that might not be released automatically when the controller's instance
is destroyed by the garbage collector.

**Kind**: instance method of [<code>Controller</code>](#Controller)  

* * *

<a name="Controller+activate"></a>

### controller.activate()
Callback for activating the controller in the UI. This is the last
method invoked during controller initialization, called after all the
promises returned from the [load](#Controller+load) method have been
resolved and the controller has configured the meta manager.

The controller may register any React and DOM event listeners in this
method. The controller may start receiving event bus event after this
method completes.

**Kind**: instance method of [<code>Controller</code>](#Controller)  

* * *

<a name="Controller+deactivate"></a>

### controller.deactivate()
Callback for deactivating the controller in the UI. This is the first
method invoked during controller deinitialization. This usually happens
when the user navigates to a different URL.

This method is the lifecycle counterpart of the
[activate](#Controller+activate) method.

The controller should deregister listeners registered and release all
resources obtained in the [activate](#Controller+activate) method.

**Kind**: instance method of [<code>Controller</code>](#Controller)  

* * *

<a name="Controller+load"></a>

### controller.load() ⇒ <code>Object.&lt;string, (Promise\|\*)&gt;</code>
Callback the controller uses to request the resources it needs to render
its view. This method is invoked after the [init](#Controller+init)
method.

The controller should request all resources it needs in this method, and
represent each resource request as a promise that will resolve once the
resource is ready for use (these can be data fetched over HTTP(S),
database connections, etc).

The method must return a plain flat object. The field names of the
object identify the resources being fetched and prepared, each value
must be either the resource (e.g. view configuration or a value
retrieved synchronously) or a Promise that will resolve to the resource.

The IMA will use the object to set the state of the controller.

If at the server side, the IMA will wait for all the promises to
resolve, replaces the promises with the resolved values and sets the
resulting object as the controller's state.

If at the client side, the IMA will first set the controller's state to
an object containing only the fields of the returned object that were
not promises. IMA will then update the controller's state every time a
promise of the returned object resolves. IMA will update the state by
adding the resolved resource to the controller's state.

Any returned promise that gets rejected will redirect the application to
the error page. The error page that will be used depends on the status
code of the error.

**Kind**: instance method of [<code>Controller</code>](#Controller)  
**Returns**: <code>Object.&lt;string, (Promise\|\*)&gt;</code> - A map object of promises
        resolved when all resources the controller requires are ready.
        The resolved values will be pushed to the controller's state.  

* * *

<a name="Controller+update"></a>

### controller.update([prevParams]) ⇒ <code>Object.&lt;string, (Promise\|\*)&gt;</code>
Callback for updating the controller after a route update. This method
is invoked if the current route has the `onlyUpdate` flag set to `true` and
the current controller and view match those used by the previously active
route, or, the `onlyUpdate` option of the current route is a callback and
returned `true`.

The method must return an object with the same semantics as the result
of the [load](#Controller+load) method. The controller's state will only
be patched by the returned object instead of replacing it completely.

The other controller lifecycle callbacks ([init](#Controller+init),
[load](#Controller+load), [activate](#Controller+activate),
[deactivate](#Controller+deactivate), [Controller#deinit](Controller#deinit)) are not call
in case this method is used.

**Kind**: instance method of [<code>Controller</code>](#Controller)  
**Returns**: <code>Object.&lt;string, (Promise\|\*)&gt;</code> - A map object of promises
        resolved when all resources the controller requires are ready.
        The resolved values will be pushed to the controller's state.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [prevParams] | <code>Object.&lt;string, string&gt;</code> | <code>{}</code> | Previous route        parameters. |


* * *

<a name="Controller+setState"></a>

### controller.setState(statePatch)
Patches the state of this controller using the provided object by
copying the provided patch object fields to the controller's state
object.

You can use this method to modify the state partially or add new fields
to the state object.

Note that the state is not patched recursively but by replacing the
values of the top-level fields of the state object.

Once the promises returned by the [load](#Controller+load) method are
resolved, this method is called with the an object containing the
resolved values. The field names of the passed object will match the
field names in the object returned from the [load](#Controller+load)
method.

**Kind**: instance method of [<code>Controller</code>](#Controller)  

| Param | Type | Description |
| --- | --- | --- |
| statePatch | <code>Object.&lt;string, \*&gt;</code> | Patch of the controller's state to        apply. |


* * *

<a name="Controller+getState"></a>

### controller.getState() ⇒ <code>Object.&lt;string, \*&gt;</code>
Returns the controller's current state.

**Kind**: instance method of [<code>Controller</code>](#Controller)  
**Returns**: <code>Object.&lt;string, \*&gt;</code> - The current state of this controller.  

* * *

<a name="Controller+addExtension"></a>

### controller.addExtension(extension) ⇒ [<code>Controller</code>](#Controller)
Adds the provided extension to this controller. All extensions should be
added to the controller before the [init](#Controller+init) method is
invoked.

**Kind**: instance method of [<code>Controller</code>](#Controller)  
**Returns**: [<code>Controller</code>](#Controller) - This controller.  

| Param | Type | Description |
| --- | --- | --- |
| extension | <code>Extension</code> | The extension to add to this controller. |


* * *

<a name="Controller+getExtensions"></a>

### controller.getExtensions() ⇒ <code>Array.&lt;Extension&gt;</code>
Returns the controller's extensions.

**Kind**: instance method of [<code>Controller</code>](#Controller)  
**Returns**: <code>Array.&lt;Extension&gt;</code> - The extensions added to this controller.  

* * *

<a name="Controller+setMetaParams"></a>

### controller.setMetaParams(loadedResources, metaManager, router, dictionary, settings)
Callback used to configure the meta attribute manager. The method is
called after the the controller's state has been patched with the all
loaded resources and the view has been rendered.

**Kind**: instance method of [<code>Controller</code>](#Controller)  

| Param | Type | Description |
| --- | --- | --- |
| loadedResources | <code>Object.&lt;string, \*&gt;</code> | A plain object representing a        map of resource names to resources loaded by the        [load](#Controller+load) method. This is the same object as the one        passed to the [setState](#Controller+setState) method. |
| metaManager | <code>MetaManager</code> | Meta attributes manager to configure. |
| router | <code>Router</code> | The current application router. |
| dictionary | <code>Dictionary</code> | The current localization dictionary. |
| settings | <code>Object.&lt;string, \*&gt;</code> | The application settings for the        current application environment. |


* * *

<a name="Controller+setRouteParams"></a>

### controller.setRouteParams([params])
Sets the current route parameters. This method is invoked before the
[init](#Controller+init) method.

**Kind**: instance method of [<code>Controller</code>](#Controller)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [params] | <code>Object.&lt;string, string&gt;</code> | <code>{}</code> | The current route parameters. |


* * *

<a name="Controller+getRouteParams"></a>

### controller.getRouteParams() ⇒ <code>Object.&lt;string, string&gt;</code>
Returns the current route parameters.

**Kind**: instance method of [<code>Controller</code>](#Controller)  
**Returns**: <code>Object.&lt;string, string&gt;</code> - The current route parameters.  

* * *

<a name="Controller+setPageStateManager"></a>

### controller.setPageStateManager(pageStateManager)
Sets the page state manager. The page state manager manages the
controller's state. The state manager can be set to `null` if this
controller loses the right to modify the state of the current page (e.g.
the user has navigated to a different route using a different
controller).

**Kind**: instance method of [<code>Controller</code>](#Controller)  

| Param | Type | Description |
| --- | --- | --- |
| pageStateManager | <code>PageStateManager</code> | The current state manager to        use. |


* * *

<a name="Controller+getHttpStatus"></a>

### controller.getHttpStatus() ⇒ <code>number</code>
Returns the HTTP status code to send to the client, should the
controller be used at the server-side.

**Kind**: instance method of [<code>Controller</code>](#Controller)  
**Returns**: <code>number</code> - The HTTP status code to send to the client.  

* * *

