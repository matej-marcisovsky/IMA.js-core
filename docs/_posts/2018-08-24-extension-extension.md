---
category: "extension"
title: "Extension"
---

## Extension&nbsp;<a name="Extension" href="https://github.com/seznam/IMA.js-core/tree/stable/extension/Extension.js#L18" target="_blank"><span class="icon"><i class="fas fa-external-link-alt fa-xs"></i></span></a>
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

### extension.init()&nbsp;<a name="Extension+init" href="https://github.com/seznam/IMA.js-core/tree/stable/extension/Extension.js#L23" target="_blank"><span class="icon"><i class="fas fa-external-link-alt fa-xs"></i></span></a>
Callback for initializing the controller extension after the route
parameters have been set on this extension.

**Kind**: instance method of [<code>Extension</code>](#Extension)  

* * *

### extension.destroy()&nbsp;<a name="Extension+destroy" href="https://github.com/seznam/IMA.js-core/tree/stable/extension/Extension.js#L38" target="_blank"><span class="icon"><i class="fas fa-external-link-alt fa-xs"></i></span></a>
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

### extension.activate()&nbsp;<a name="Extension+activate" href="https://github.com/seznam/IMA.js-core/tree/stable/extension/Extension.js#L50" target="_blank"><span class="icon"><i class="fas fa-external-link-alt fa-xs"></i></span></a>
Callback for activating the extension in the UI. This is the last
method invoked during controller (and extensions) initialization, called
after all the promises returned from the [load](#Extension+load) method have
been resolved and the controller has configured the meta manager.

The extension may register any React and DOM event listeners in this
method. The extension may start receiving event bus event after this
method completes.

**Kind**: instance method of [<code>Extension</code>](#Extension)  

* * *

### extension.deactivate()&nbsp;<a name="Extension+deactivate" href="https://github.com/seznam/IMA.js-core/tree/stable/extension/Extension.js#L63" target="_blank"><span class="icon"><i class="fas fa-external-link-alt fa-xs"></i></span></a>
Callback for deactivating the extension in the UI. This is the first
method invoked during extension deinitialization. This usually happens
when the user navigates to a different URL.

This method is the lifecycle counterpart of the [activate](#Extension+activate)
method.

The extension should deregister listeners registered and release all
resources obtained in the [activate](#Extension+activate) method.

**Kind**: instance method of [<code>Extension</code>](#Extension)  

* * *

### extension.load() ⇒ <code>Object.&lt;string, (Promise\|\*)&gt;</code>&nbsp;<a name="Extension+load" href="https://github.com/seznam/IMA.js-core/tree/stable/extension/Extension.js#L90" target="_blank"><span class="icon"><i class="fas fa-external-link-alt fa-xs"></i></span></a>
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

### extension.update([prevParams]) ⇒ <code>Object.&lt;string, (Promise\|\*)&gt;</code>&nbsp;<a name="Extension+update" href="https://github.com/seznam/IMA.js-core/tree/stable/extension/Extension.js#L114" target="_blank"><span class="icon"><i class="fas fa-external-link-alt fa-xs"></i></span></a>
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

### extension.setState(statePatch)&nbsp;<a name="Extension+setState" href="https://github.com/seznam/IMA.js-core/tree/stable/extension/Extension.js#L130" target="_blank"><span class="icon"><i class="fas fa-external-link-alt fa-xs"></i></span></a>
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

### extension.getState() ⇒ <code>Object.&lt;string, \*&gt;</code>&nbsp;<a name="Extension+getState" href="https://github.com/seznam/IMA.js-core/tree/stable/extension/Extension.js#L137" target="_blank"><span class="icon"><i class="fas fa-external-link-alt fa-xs"></i></span></a>
Returns the current state of the controller using this extension.

**Kind**: instance method of [<code>Extension</code>](#Extension)  
**Returns**: <code>Object.&lt;string, \*&gt;</code> - The current state of the controller.  

* * *

### extension.setPageStateManager(pageStateManager)&nbsp;<a name="Extension+setPageStateManager" href="https://github.com/seznam/IMA.js-core/tree/stable/extension/Extension.js#L145" target="_blank"><span class="icon"><i class="fas fa-external-link-alt fa-xs"></i></span></a>
Sets the state manager used to manage the controller's state..

**Kind**: instance method of [<code>Extension</code>](#Extension)  

| Param | Type | Description |
| --- | --- | --- |
| pageStateManager | <code>PageStateManager</code> | The current state manager to        use. |


* * *

### extension.setRouteParams([params])&nbsp;<a name="Extension+setRouteParams" href="https://github.com/seznam/IMA.js-core/tree/stable/extension/Extension.js#L154" target="_blank"><span class="icon"><i class="fas fa-external-link-alt fa-xs"></i></span></a>
Sets the current route parameters. This method is invoked before the
[init](#Extension+init) method.

**Kind**: instance method of [<code>Extension</code>](#Extension)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [params] | <code>Object.&lt;string, string&gt;</code> | <code>{}</code> | The current route        parameters. |


* * *

### extension.getRouteParams() ⇒ <code>Object.&lt;string, string&gt;</code>&nbsp;<a name="Extension+getRouteParams" href="https://github.com/seznam/IMA.js-core/tree/stable/extension/Extension.js#L161" target="_blank"><span class="icon"><i class="fas fa-external-link-alt fa-xs"></i></span></a>
Returns the current route parameters.

**Kind**: instance method of [<code>Extension</code>](#Extension)  
**Returns**: <code>Object.&lt;string, string&gt;</code> - The current route parameters.  

* * *

### extension.getAllowedStateKeys() ⇒ <code>Array.&lt;string&gt;</code>&nbsp;<a name="Extension+getAllowedStateKeys" href="https://github.com/seznam/IMA.js-core/tree/stable/extension/Extension.js#L170" target="_blank"><span class="icon"><i class="fas fa-external-link-alt fa-xs"></i></span></a>
Returns the names of the state fields that may be manipulated by this
extension. Manipulations of other fields of the state will be ignored.

**Kind**: instance method of [<code>Extension</code>](#Extension)  
**Returns**: <code>Array.&lt;string&gt;</code> - The names of the state fields that may be manipulated
        by this extension.  

* * *

