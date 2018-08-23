<a name="ServerRouter"></a>

## ServerRouter
The server-side implementation of the <code>Router</code> interface.

**Kind**: global class  

* [ServerRouter](#ServerRouter)
    * [new ServerRouter(pageManager, factory, dispatcher, request, response)](#new_ServerRouter_new)
    * [._request](#ServerRouter+_request) : <code>Request</code>
    * [._response](#ServerRouter+_response) : <code>Response</code>
    * [.getPath()](#ServerRouter+getPath)
    * [.listen()](#ServerRouter+listen)
    * [.redirect()](#ServerRouter+redirect)


* * *

<a name="new_ServerRouter_new"></a>

### new ServerRouter(pageManager, factory, dispatcher, request, response)
Initializes the router.


| Param | Type | Description |
| --- | --- | --- |
| pageManager | <code>PageManager</code> | The current page manager. |
| factory | <code>RouteFactory</code> | The router factory used to create routes. |
| dispatcher | <code>Dispatcher</code> | Dispatcher fires events to app. |
| request | <code>Request</code> | The current HTTP request. |
| response | <code>Response</code> | The current HTTP response. |


* * *

<a name="ServerRouter+_request"></a>

### serverRouter._request : <code>Request</code>
The current HTTP request.

**Kind**: instance property of [<code>ServerRouter</code>](#ServerRouter)  

* * *

<a name="ServerRouter+_response"></a>

### serverRouter._response : <code>Response</code>
The current HTTP response.

**Kind**: instance property of [<code>ServerRouter</code>](#ServerRouter)  

* * *

<a name="ServerRouter+getPath"></a>

### serverRouter.getPath()
**Kind**: instance method of [<code>ServerRouter</code>](#ServerRouter)  

* * *

<a name="ServerRouter+listen"></a>

### serverRouter.listen()
**Kind**: instance method of [<code>ServerRouter</code>](#ServerRouter)  

* * *

<a name="ServerRouter+redirect"></a>

### serverRouter.redirect()
**Kind**: instance method of [<code>ServerRouter</code>](#ServerRouter)  

* * *

