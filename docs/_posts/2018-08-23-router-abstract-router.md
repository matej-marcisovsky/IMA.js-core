<a name="AbstractRouter"></a>

## *AbstractRouter*
The basic implementation of the <code>Router</code> interface, providing the
common or default functionality for parts of the API.

**Kind**: global abstract class  

* *[AbstractRouter](#AbstractRouter)*
    * *[new AbstractRouter(pageManager, factory, dispatcher)](#new_AbstractRouter_new)*
    * *[._pageManager](#AbstractRouter+_pageManager) : <code>PageManager</code>*
    * *[._factory](#AbstractRouter+_factory) : <code>RouteFactory</code>*
    * *[._dispatcher](#AbstractRouter+_dispatcher) : <code>Dispatcher</code>*
    * *[._protocol](#AbstractRouter+_protocol) : <code>string</code>*
    * *[._host](#AbstractRouter+_host) : <code>string</code>*
    * *[._root](#AbstractRouter+_root) : <code>string</code>*
    * *[._languagePartPath](#AbstractRouter+_languagePartPath) : <code>string</code>*
    * *[._routes](#AbstractRouter+_routes) : <code>Map.&lt;string, Route&gt;</code>*
    * *[.init()](#AbstractRouter+init)*
    * *[.add()](#AbstractRouter+add)*
    * *[.remove()](#AbstractRouter+remove)*
    * *[.getPath()](#AbstractRouter+getPath)*
    * *[.getUrl()](#AbstractRouter+getUrl)*
    * *[.getBaseUrl()](#AbstractRouter+getBaseUrl)*
    * *[.getDomain()](#AbstractRouter+getDomain)*
    * *[.getHost()](#AbstractRouter+getHost)*
    * *[.getProtocol()](#AbstractRouter+getProtocol)*
    * *[.getCurrentRouteInfo()](#AbstractRouter+getCurrentRouteInfo)*
    * **[.listen()](#AbstractRouter+listen)**
    * **[.redirect()](#AbstractRouter+redirect)**
    * *[.link()](#AbstractRouter+link)*
    * *[.route()](#AbstractRouter+route)*
    * *[.handleError()](#AbstractRouter+handleError)*
    * *[.handleNotFound()](#AbstractRouter+handleNotFound)*
    * *[.isClientError()](#AbstractRouter+isClientError)*
    * *[.isRedirection()](#AbstractRouter+isRedirection)*
    * *[._extractRoutePath(path)](#AbstractRouter+_extractRoutePath) ⇒ <code>string</code>*
    * *[._handle(route, params, options)](#AbstractRouter+_handle) ⇒ <code>Promise.&lt;Object.&lt;string, \*&gt;&gt;</code>*
    * *[._getRouteByPath(path)](#AbstractRouter+_getRouteByPath) ⇒ <code>Route</code>*


* * *

<a name="new_AbstractRouter_new"></a>

### *new AbstractRouter(pageManager, factory, dispatcher)*
Initializes the router.


| Param | Type | Description |
| --- | --- | --- |
| pageManager | <code>PageManager</code> | The page manager handling UI rendering,        and transitions between pages if at the client side. |
| factory | <code>RouteFactory</code> | Factory for routes. |
| dispatcher | <code>Dispatcher</code> | Dispatcher fires events to app. |


* * *

<a name="AbstractRouter+_pageManager"></a>

### *abstractRouter._pageManager : <code>PageManager</code>*
The page manager handling UI rendering, and transitions between
pages if at the client side.

**Kind**: instance property of [<code>AbstractRouter</code>](#AbstractRouter)  

* * *

<a name="AbstractRouter+_factory"></a>

### *abstractRouter._factory : <code>RouteFactory</code>*
Factory for routes.

**Kind**: instance property of [<code>AbstractRouter</code>](#AbstractRouter)  

* * *

<a name="AbstractRouter+_dispatcher"></a>

### *abstractRouter._dispatcher : <code>Dispatcher</code>*
Dispatcher fires events to app.

**Kind**: instance property of [<code>AbstractRouter</code>](#AbstractRouter)  

* * *

<a name="AbstractRouter+_protocol"></a>

### *abstractRouter._protocol : <code>string</code>*
The current protocol used to access the application, terminated by a
colon (for example <code>https:</code>).

**Kind**: instance property of [<code>AbstractRouter</code>](#AbstractRouter)  

* * *

<a name="AbstractRouter+_host"></a>

### *abstractRouter._host : <code>string</code>*
The application's host.

**Kind**: instance property of [<code>AbstractRouter</code>](#AbstractRouter)  

* * *

<a name="AbstractRouter+_root"></a>

### *abstractRouter._root : <code>string</code>*
The URL path pointing to the application's root.

**Kind**: instance property of [<code>AbstractRouter</code>](#AbstractRouter)  

* * *

<a name="AbstractRouter+_languagePartPath"></a>

### *abstractRouter._languagePartPath : <code>string</code>*
The URL path fragment used as a suffix to the <code>_root</code> field
that specifies the current language.

**Kind**: instance property of [<code>AbstractRouter</code>](#AbstractRouter)  

* * *

<a name="AbstractRouter+_routes"></a>

### *abstractRouter._routes : <code>Map.&lt;string, Route&gt;</code>*
Storage of all known routes. The key are the route names.

**Kind**: instance property of [<code>AbstractRouter</code>](#AbstractRouter)  

* * *

<a name="AbstractRouter+init"></a>

### *abstractRouter.init()*
**Kind**: instance method of [<code>AbstractRouter</code>](#AbstractRouter)  

* * *

<a name="AbstractRouter+add"></a>

### *abstractRouter.add()*
**Kind**: instance method of [<code>AbstractRouter</code>](#AbstractRouter)  

* * *

<a name="AbstractRouter+remove"></a>

### *abstractRouter.remove()*
**Kind**: instance method of [<code>AbstractRouter</code>](#AbstractRouter)  

* * *

<a name="AbstractRouter+getPath"></a>

### *abstractRouter.getPath()*
**Kind**: instance method of [<code>AbstractRouter</code>](#AbstractRouter)  

* * *

<a name="AbstractRouter+getUrl"></a>

### *abstractRouter.getUrl()*
**Kind**: instance method of [<code>AbstractRouter</code>](#AbstractRouter)  

* * *

<a name="AbstractRouter+getBaseUrl"></a>

### *abstractRouter.getBaseUrl()*
**Kind**: instance method of [<code>AbstractRouter</code>](#AbstractRouter)  

* * *

<a name="AbstractRouter+getDomain"></a>

### *abstractRouter.getDomain()*
**Kind**: instance method of [<code>AbstractRouter</code>](#AbstractRouter)  

* * *

<a name="AbstractRouter+getHost"></a>

### *abstractRouter.getHost()*
**Kind**: instance method of [<code>AbstractRouter</code>](#AbstractRouter)  

* * *

<a name="AbstractRouter+getProtocol"></a>

### *abstractRouter.getProtocol()*
**Kind**: instance method of [<code>AbstractRouter</code>](#AbstractRouter)  

* * *

<a name="AbstractRouter+getCurrentRouteInfo"></a>

### *abstractRouter.getCurrentRouteInfo()*
**Kind**: instance method of [<code>AbstractRouter</code>](#AbstractRouter)  

* * *

<a name="AbstractRouter+listen"></a>

### **abstractRouter.listen()**
**Kind**: instance abstract method of [<code>AbstractRouter</code>](#AbstractRouter)  

* * *

<a name="AbstractRouter+redirect"></a>

### **abstractRouter.redirect()**
**Kind**: instance abstract method of [<code>AbstractRouter</code>](#AbstractRouter)  

* * *

<a name="AbstractRouter+link"></a>

### *abstractRouter.link()*
**Kind**: instance method of [<code>AbstractRouter</code>](#AbstractRouter)  

* * *

<a name="AbstractRouter+route"></a>

### *abstractRouter.route()*
**Kind**: instance method of [<code>AbstractRouter</code>](#AbstractRouter)  

* * *

<a name="AbstractRouter+handleError"></a>

### *abstractRouter.handleError()*
**Kind**: instance method of [<code>AbstractRouter</code>](#AbstractRouter)  

* * *

<a name="AbstractRouter+handleNotFound"></a>

### *abstractRouter.handleNotFound()*
**Kind**: instance method of [<code>AbstractRouter</code>](#AbstractRouter)  

* * *

<a name="AbstractRouter+isClientError"></a>

### *abstractRouter.isClientError()*
**Kind**: instance method of [<code>AbstractRouter</code>](#AbstractRouter)  

* * *

<a name="AbstractRouter+isRedirection"></a>

### *abstractRouter.isRedirection()*
**Kind**: instance method of [<code>AbstractRouter</code>](#AbstractRouter)  

* * *

<a name="AbstractRouter+_extractRoutePath"></a>

### *abstractRouter._extractRoutePath(path) ⇒ <code>string</code>*
Strips the URL path part that points to the application's root (base
URL) from the provided path.

**Kind**: instance method of [<code>AbstractRouter</code>](#AbstractRouter)  
**Returns**: <code>string</code> - URL path relative to the application's base URL.  
**Access**: protected  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>string</code> | Relative or absolute URL path. |


* * *

<a name="AbstractRouter+_handle"></a>

### *abstractRouter._handle(route, params, options) ⇒ <code>Promise.&lt;Object.&lt;string, \*&gt;&gt;</code>*
Handles the provided route and parameters by initializing the route's
controller and rendering its state via the route's view.

The result is then sent to the client if used at the server side, or
displayed if used as the client side.

**Kind**: instance method of [<code>AbstractRouter</code>](#AbstractRouter)  
**Returns**: <code>Promise.&lt;Object.&lt;string, \*&gt;&gt;</code> - A promise that resolves when the
        page is rendered and the result is sent to the client, or
        displayed if used at the client side.  

| Param | Type | Description |
| --- | --- | --- |
| route | <code>Route</code> | The route that should have its        associated controller rendered via the associated view. |
| params | <code>Object.&lt;string, (Error\|string)&gt;</code> | Parameters extracted from        the URL path and query. |
| options | <code>Object</code> | The options overrides route options defined in the        <code>routes.js</code> configuration file. |


* * *

<a name="AbstractRouter+_getRouteByPath"></a>

### *abstractRouter._getRouteByPath(path) ⇒ <code>Route</code>*
Returns the route matching the provided URL path part. The path may
contain a query.

**Kind**: instance method of [<code>AbstractRouter</code>](#AbstractRouter)  
**Returns**: <code>Route</code> - The route matching the path, or <code>null</code> if no such
        route exists.  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>string</code> | The URL path. |


* * *

