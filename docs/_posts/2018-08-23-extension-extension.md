<a name="Extension"></a>

## Extension
**Kind**: global interface  

* [Extension](#Extension)
    * [.init()](#Extension+init)
    * [.destroy()](#Extension+destroy)
    * [.activate()](#Extension+activate)
    * [.deactivate()](#Extension+deactivate)
    * [.load()](#Extension+load) ⇒ <code>Object.&lt;string, (Promise\|\*)&gt;</code>
    * [.update([prevParams])](#Extension+update) ⇒ <code>Object.&lt;string, (Promise\|\*)&gt;</code>
    * [.setState(statePatch)](#Extension+setState)
    * [.getState()](#Extension+getState) ⇒ <code>Object.&lt;string, \*&gt;</code>
    * [.setPageStateManager(pageStateManager)](#Extension+setPageStateManager)
    * [.setRouteParams([params])](#Extension+setRouteParams)
    * [.getRouteParams()](#Extension+getRouteParams) ⇒ <code>Object.&lt;string, string&gt;</code>
    * [.getAllowedStateKeys()](#Extension+getAllowedStateKeys) ⇒ <code>Array.&lt;string&gt;</code>


* * *

<a name="Extension+init"></a>

### extension.init()
Callback for initializing the controller extension after the route
parameters have been set on this extension.

**Kind**: instance method of [<code>Extension</code>](#Extension)  

* * *

<a name="Extension+destroy"></a>

### extension.destroy()
Finalization callback, called when the controller is being discarded by
the application. This usually happens when the user navigates to a
different URL.

This method is the lifecycle counterpart of the [init](#Extension+init)
method.

The extension should release all resources obtained in the
[init](#Extension+init) method. The extension must release any resources
that might not be released automatically when the extensions's instance
is destroyed by the garbage collector.

**Kind**: instance method of [<code>Extension</code>](#Extension)  

* * *

<a name="Extension+activate"></a>

### extension.activate()
Callback for activating the extension in the UI. This is the last
method invoked during controller (and extensions) initialization, called
after all the promises returned from the [load](#Extension+load) method have
been resolved and the controller has configured the meta manager.

The extension may register any React and DOM event listeners in this
method. The extension may start receiving event bus event after this
method completes.

**Kind**: instance method of [<code>Extension</code>](#Extension)  

* * *

<a name="Extension+deactivate"></a>

### extension.deactivate()
Callback for deactivating the extension in the UI. This is the first
method invoked during extension deinitialization. This usually happens
when the user navigates to a different URL.

This method is the lifecycle counterpart of the [activate](#Extension+activate)
method.

The extension should deregister listeners registered and release all
resources obtained in the [activate](#Extension+activate) method.

**Kind**: instance method of [<code>Extension</code>](#Extension)  

* * *

<a name="Extension+load"></a>

### extension.load() ⇒ <code>Object.&lt;string, (Promise\|\*)&gt;</code>
Callback the extension uses to request the resources it needs to render
its related parts of the view. This method is invoked after the
[init](#Extension+init) method.

The extension should request all resources it needs in this method, and
represent each resource request as a promise that will resolve once the
resource is ready for use (these can be data fetched over HTTP(S),
database connections, etc).

The method must return a plain flat object. The field names of the
object identify the resources being fetched and prepared, each value
must be either the resource (e.g. view configuration or a value
retrieved synchronously) or a Promise that will resolve to the resource.

The IMA will use the object to set the state of the controller.

Any returned promise that gets rejected will redirect the application to
the error page. The error page that will be used depends on the status
code of the error.

**Kind**: instance method of [<code>Extension</code>](#Extension)  
**Returns**: <code>Object.&lt;string, (Promise\|\*)&gt;</code> - A map object of promises
        resolved when all resources the extension requires are ready.
        The resolved values will be pushed to the controller's state.  

* * *

<a name="Extension+update"></a>

### extension.update([prevParams]) ⇒ <code>Object.&lt;string, (Promise\|\*)&gt;</code>
Callback for updating the extension after a route update. This method
is invoked if the current route has the `onlyUpdate` flag set to `true` and
the current controller and view match those used by the previously active
route, or, the `onlyUpdate` option of the current route is a callback and
returned `true`.

The method must return an object with the same semantics as the result
of the [load](#Extension+load) method. The controller's state will then be
patched by the returned object.

The other extension lifecycle callbacks ([init](#Extension+init),
[load](#Extension+load), [activate](#Extension+activate),
[deactivate](#Extension+deactivate), [Extension#deinit](Extension#deinit)) are not call in
case this method is used.

**Kind**: instance method of [<code>Extension</code>](#Extension)  
**Returns**: <code>Object.&lt;string, (Promise\|\*)&gt;</code> - A map object of promises
        resolved when all resources the extension requires are ready.
        The resolved values will be pushed to the controller's state.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [prevParams] | <code>Object.&lt;string, string&gt;</code> | <code>{}</code> | Previous route        parameters. |


* * *

<a name="Extension+setState"></a>

### extension.setState(statePatch)
Patches the state of the controller using this extension by using the
provided object by copying the provided patch object fields to the
controller's state object.

Note that the state is not patched recursively but by replacing the
values of the top-level fields of the state object.

Note that the extension may modify only the fields of the state that it
has specified by its [getAllowedStateKeys](#Extension+getAllowedStateKeys) method.

**Kind**: instance method of [<code>Extension</code>](#Extension)  

| Param | Type | Description |
| --- | --- | --- |
| statePatch | <code>Object.&lt;string, \*&gt;</code> | Patch of the controller's state to        apply. |


* * *

<a name="Extension+getState"></a>

### extension.getState() ⇒ <code>Object.&lt;string, \*&gt;</code>
Returns the current state of the controller using this extension.

**Kind**: instance method of [<code>Extension</code>](#Extension)  
**Returns**: <code>Object.&lt;string, \*&gt;</code> - The current state of the controller.  

* * *

<a name="Extension+setPageStateManager"></a>

### extension.setPageStateManager(pageStateManager)
Sets the state manager used to manage the controller's state..

**Kind**: instance method of [<code>Extension</code>](#Extension)  

| Param | Type | Description |
| --- | --- | --- |
| pageStateManager | <code>PageStateManager</code> | The current state manager to        use. |


* * *

<a name="Extension+setRouteParams"></a>

### extension.setRouteParams([params])
Sets the current route parameters. This method is invoked before the
[init](#Extension+init) method.

**Kind**: instance method of [<code>Extension</code>](#Extension)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [params] | <code>Object.&lt;string, string&gt;</code> | <code>{}</code> | The current route        parameters. |


* * *

<a name="Extension+getRouteParams"></a>

### extension.getRouteParams() ⇒ <code>Object.&lt;string, string&gt;</code>
Returns the current route parameters.

**Kind**: instance method of [<code>Extension</code>](#Extension)  
**Returns**: <code>Object.&lt;string, string&gt;</code> - The current route parameters.  

* * *

<a name="Extension+getAllowedStateKeys"></a>

### extension.getAllowedStateKeys() ⇒ <code>Array.&lt;string&gt;</code>
Returns the names of the state fields that may be manipulated by this
extension. Manipulations of other fields of the state will be ignored.

**Kind**: instance method of [<code>Extension</code>](#Extension)  
**Returns**: <code>Array.&lt;string&gt;</code> - The names of the state fields that may be manipulated
        by this extension.  

* * *

