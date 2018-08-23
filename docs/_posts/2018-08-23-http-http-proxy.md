<a name="HttpProxy"></a>

## HttpProxy
Middleware proxy between [HttpAgent](HttpAgent) implementations and the
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API),
providing a Promise-oriented API for sending requests.

**Kind**: global class  

* [HttpProxy](#HttpProxy)
    * [new HttpProxy(transformer, window)](#new_HttpProxy_new)
    * _instance_
        * [._transformer](#HttpProxy+_transformer) : <code>UrlTransformer</code>
        * [._window](#HttpProxy+_window) : <code>Window</code>
        * [._defaultHeaders](#HttpProxy+_defaultHeaders) : <code>Map.&lt;string, string&gt;</code>
        * [.request(method, url, data, [options])](#HttpProxy+request) ⇒ <code>Promise.&lt;HttpAgent~Response&gt;</code>
        * [.setDefaultHeader(header, value)](#HttpProxy+setDefaultHeader)
        * [.clearDefaultHeaders()](#HttpProxy+clearDefaultHeaders)
        * [.getErrorParams(method, url, data, options, status, body, cause)](#HttpProxy+getErrorParams) ⇒ [<code>ErrorParams</code>](#HttpProxy..ErrorParams)
        * [.haveToSetCookiesManually()](#HttpProxy+haveToSetCookiesManually) ⇒ <code>boolean</code>
        * [._processResponse(requestParams, response, responseBody)](#HttpProxy+_processResponse) ⇒ <code>HttpAgent~Response</code>
        * [._headersToPlainObject(headers)](#HttpProxy+_headersToPlainObject) ⇒ <code>Object.&lt;string, string&gt;</code>
        * [._processError(fetchError, requestParams)](#HttpProxy+_processError) ⇒ <code>GenericError</code>
        * [._createError(cause, requestParams, status, responseBody)](#HttpProxy+_createError) ⇒ <code>GenericError</code>
        * [._getFetchApi()](#HttpProxy+_getFetchApi) ⇒ <code>function</code>
        * [._composeRequestParams(method, url, data, options)](#HttpProxy+_composeRequestParams) ⇒ [<code>RequestParams</code>](#HttpProxy..RequestParams)
        * [._composeRequestInit(method, data, options)](#HttpProxy+_composeRequestInit) ⇒ <code>RequestInit</code>
        * [._getContentType(method, data, options)](#HttpProxy+_getContentType) ⇒ <code>string</code>
        * [._composeRequestUrl(url, data)](#HttpProxy+_composeRequestUrl) ⇒ <code>string</code>
        * [._shouldRequestHaveBody(method, data)](#HttpProxy+_shouldRequestHaveBody) ⇒ <code>boolean</code>
    * _inner_
        * [~RequestParams](#HttpProxy..RequestParams) : <code>Object</code>
        * [~ErrorParams](#HttpProxy..ErrorParams) : <code>Object</code>


* * *

<a name="new_HttpProxy_new"></a>

### new HttpProxy(transformer, window)
Initializes the HTTP proxy.


| Param | Type | Description |
| --- | --- | --- |
| transformer | <code>UrlTransformer</code> | A transformer of URLs to which        requests are made. |
| window | <code>Window</code> | Helper for manipulating the global object `window`        regardless of the client/server-side environment. |


* * *

<a name="HttpProxy+_transformer"></a>

### httpProxy._transformer : <code>UrlTransformer</code>
A transformer of URLs to which requests are made.

**Kind**: instance property of [<code>HttpProxy</code>](#HttpProxy)  

* * *

<a name="HttpProxy+_window"></a>

### httpProxy._window : <code>Window</code>
Helper for manipulating the global object `window` regardless of the
client/server-side environment.

**Kind**: instance property of [<code>HttpProxy</code>](#HttpProxy)  

* * *

<a name="HttpProxy+_defaultHeaders"></a>

### httpProxy._defaultHeaders : <code>Map.&lt;string, string&gt;</code>
The default HTTP headers to include with the HTTP requests, unless
overridden.

**Kind**: instance property of [<code>HttpProxy</code>](#HttpProxy)  

* * *

<a name="HttpProxy+request"></a>

### httpProxy.request(method, url, data, [options]) ⇒ <code>Promise.&lt;HttpAgent~Response&gt;</code>
Executes a HTTP request to the specified URL using the specified HTTP
method, carrying the provided data.

**Kind**: instance method of [<code>HttpProxy</code>](#HttpProxy)  
**Returns**: <code>Promise.&lt;HttpAgent~Response&gt;</code> - A promise that resolves to the server
        response.  

| Param | Type | Description |
| --- | --- | --- |
| method | <code>string</code> | The HTTP method to use. |
| url | <code>string</code> | The URL to which the request should be made. |
| data | <code>Object.&lt;string, (boolean\|number\|string\|Date)&gt;</code> | The data to        be send to the server. The data will be included as query        parameters if the request method is `GET` or `HEAD`, and as        a request body for any other request method. |
| [options] | <code>HttpAgent~RequestOptions</code> | Optional request options. |


* * *

<a name="HttpProxy+setDefaultHeader"></a>

### httpProxy.setDefaultHeader(header, value)
Sets the specified default HTTP header. The header will be sent with all
subsequent HTTP requests unless reconfigured using this method,
overridden by request options, or cleared by
[clearDefaultHeaders](#HttpProxy+clearDefaultHeaders) method.

**Kind**: instance method of [<code>HttpProxy</code>](#HttpProxy)  

| Param | Type | Description |
| --- | --- | --- |
| header | <code>string</code> | A header name. |
| value | <code>string</code> | A header value. |


* * *

<a name="HttpProxy+clearDefaultHeaders"></a>

### httpProxy.clearDefaultHeaders()
Clears all defaults headers sent with all requests.

**Kind**: instance method of [<code>HttpProxy</code>](#HttpProxy)  

* * *

<a name="HttpProxy+getErrorParams"></a>

### httpProxy.getErrorParams(method, url, data, options, status, body, cause) ⇒ [<code>ErrorParams</code>](#HttpProxy..ErrorParams)
Gets an object that describes a failed HTTP request, providing
information about both the failure reported by the server and how the
request has been sent to the server.

**Kind**: instance method of [<code>HttpProxy</code>](#HttpProxy)  
**Returns**: [<code>ErrorParams</code>](#HttpProxy..ErrorParams) - An object containing both the details of
        the error and the request that lead to it.  

| Param | Type | Description |
| --- | --- | --- |
| method | <code>string</code> | The HTTP method used to make the request. |
| url | <code>string</code> | The URL to which the request has been made. |
| data | <code>Object.&lt;string, (boolean\|number\|string\|Date)&gt;</code> | The data sent        with the request. |
| options | <code>HttpAgent~RequestOptions</code> | Optional request options. |
| status | <code>number</code> | The HTTP response status code send by the server. |
| body | <code>object</code> | The body of HTTP error response (detailed        information). |
| cause | <code>Error</code> | The low-level cause error. |


* * *

<a name="HttpProxy+haveToSetCookiesManually"></a>

### httpProxy.haveToSetCookiesManually() ⇒ <code>boolean</code>
Returns `true` if cookies have to be processed manually by setting
`Cookie` HTTP header on requests and parsing the `Set-Cookie` HTTP
response header.

The result of this method depends on the current application
environment, the client-side usually handles cookie processing
automatically, leading this method returning `false`.

At the client-side, the method tests whether the client has cookies
enabled (which results in cookies being automatically processed by the
browser), and returns `true` or `false` accordingly.

**Kind**: instance method of [<code>HttpProxy</code>](#HttpProxy)  
**Returns**: <code>boolean</code> - `true` if cookies are not processed automatically by
        the environment and have to be handled manually by parsing
        response headers and setting request headers, otherwise `false`.  

* * *

<a name="HttpProxy+_processResponse"></a>

### httpProxy._processResponse(requestParams, response, responseBody) ⇒ <code>HttpAgent~Response</code>
Processes the response received from the server.

**Kind**: instance method of [<code>HttpProxy</code>](#HttpProxy)  
**Returns**: <code>HttpAgent~Response</code> - The server's response along with all related
        metadata.  

| Param | Type | Description |
| --- | --- | --- |
| requestParams | [<code>RequestParams</code>](#HttpProxy..RequestParams) | The original request's        parameters. |
| response | <code>Response</code> | The Fetch API's `Response` object representing        the server's response. |
| responseBody | <code>\*</code> | The server's response body. |


* * *

<a name="HttpProxy+_headersToPlainObject"></a>

### httpProxy._headersToPlainObject(headers) ⇒ <code>Object.&lt;string, string&gt;</code>
Converts the provided Fetch API's `Headers` object to a plain object.

**Kind**: instance method of [<code>HttpProxy</code>](#HttpProxy)  
**Returns**: <code>Object.&lt;string, string&gt;</code> - Converted headers.  

| Param | Type | Description |
| --- | --- | --- |
| headers | <code>Headers</code> | The headers to convert. |


* * *

<a name="HttpProxy+_processError"></a>

### httpProxy._processError(fetchError, requestParams) ⇒ <code>GenericError</code>
Processes the provided Fetch API or internal error and creates an error
to expose to the calling API.

**Kind**: instance method of [<code>HttpProxy</code>](#HttpProxy)  
**Returns**: <code>GenericError</code> - The error to provide to the calling API.  

| Param | Type | Description |
| --- | --- | --- |
| fetchError | <code>Error</code> | The internal error to process. |
| requestParams | [<code>RequestParams</code>](#HttpProxy..RequestParams) | An object representing the        complete request parameters used to create and send the HTTP        request. |


* * *

<a name="HttpProxy+_createError"></a>

### httpProxy._createError(cause, requestParams, status, responseBody) ⇒ <code>GenericError</code>
Creates an error that represents a failed HTTP request.

**Kind**: instance method of [<code>HttpProxy</code>](#HttpProxy)  
**Returns**: <code>GenericError</code> - The error representing a failed HTTP request.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| cause | <code>Error</code> |  | The error's message. |
| requestParams | [<code>RequestParams</code>](#HttpProxy..RequestParams) |  | An object representing the        complete request parameters used to create and send the HTTP        request. |
| status | <code>number</code> |  | Server's response HTTP status code. |
| responseBody | <code>\*</code> | <code></code> | The body of the server's response, if any. |


* * *

<a name="HttpProxy+_getFetchApi"></a>

### httpProxy._getFetchApi() ⇒ <code>function</code>
Returns [window.fetch](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch)
compatible API to use, depending on the method being used at the server
(polyfill) or client (native/polyfill) side.

**Kind**: instance method of [<code>HttpProxy</code>](#HttpProxy)  
**Returns**: <code>function</code> - An
        implementation of the Fetch API to use.  

* * *

<a name="HttpProxy+_composeRequestParams"></a>

### httpProxy._composeRequestParams(method, url, data, options) ⇒ [<code>RequestParams</code>](#HttpProxy..RequestParams)
Composes an object representing the HTTP request parameters from the
provided arguments.

**Kind**: instance method of [<code>HttpProxy</code>](#HttpProxy)  
**Returns**: [<code>RequestParams</code>](#HttpProxy..RequestParams) - An object
        representing the complete request parameters used to create and
        send the HTTP request.  

| Param | Type | Description |
| --- | --- | --- |
| method | <code>string</code> | The HTTP method to use. |
| url | <code>string</code> | The URL to which the request should be sent. |
| data | <code>Object.&lt;string, (boolean\|number\|string\|Date)&gt;</code> | The data to        send with the request. |
| options | <code>HttpAgent~RequestOptions</code> | Optional request options. |


* * *

<a name="HttpProxy+_composeRequestInit"></a>

### httpProxy._composeRequestInit(method, data, options) ⇒ <code>RequestInit</code>
Composes an init object, which can be used as a second argument of
`window.fetch` method.

**Kind**: instance method of [<code>HttpProxy</code>](#HttpProxy)  
**Returns**: <code>RequestInit</code> - A `RequestInit` object of the Fetch API.  

| Param | Type | Description |
| --- | --- | --- |
| method | <code>string</code> | The HTTP method to use. |
| data | <code>Object.&lt;string, (boolean\|number\|string\|Date)&gt;</code> | The data to        be send with a request. |
| options | <code>HttpAgent~RequestOptions</code> | Options provided by the HTTP        agent. |


* * *

<a name="HttpProxy+_getContentType"></a>

### httpProxy._getContentType(method, data, options) ⇒ <code>string</code>
Gets a `Content-Type` header value for defined method, data and options.

**Kind**: instance method of [<code>HttpProxy</code>](#HttpProxy)  
**Returns**: <code>string</code> - A `Content-Type` header value.  

| Param | Type | Description |
| --- | --- | --- |
| method | <code>string</code> | The HTTP method to use. |
| data | <code>Object.&lt;string, (boolean\|number\|string\|Date)&gt;</code> | The data to        be send with a request. |
| options | <code>HttpAgent~RequestOptions</code> | Options provided by the HTTP        agent. |


* * *

<a name="HttpProxy+_composeRequestUrl"></a>

### httpProxy._composeRequestUrl(url, data) ⇒ <code>string</code>
Transforms the provided URL using the current URL transformer and adds
the provided data to the URL's query string.

**Kind**: instance method of [<code>HttpProxy</code>](#HttpProxy)  
**Returns**: <code>string</code> - The transformed URL with the provided data attached to
        its query string.  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | The URL to prepare for use with the fetch API. |
| data | <code>Object.&lt;string, (boolean\|number\|string\|Date)&gt;</code> | The data to be        attached to the query string. |


* * *

<a name="HttpProxy+_shouldRequestHaveBody"></a>

### httpProxy._shouldRequestHaveBody(method, data) ⇒ <code>boolean</code>
Checks if a request should have a body (`GET` and `HEAD` requests don't
have a body).

**Kind**: instance method of [<code>HttpProxy</code>](#HttpProxy)  
**Returns**: <code>boolean</code> - `true` if a request has a body, otherwise `false`.  

| Param | Type | Description |
| --- | --- | --- |
| method | <code>string</code> | The HTTP method. |
| data | <code>Object.&lt;string, (boolean\|number\|string\|Date)&gt;</code> | The data to        be send with a request. |


* * *

<a name="HttpProxy..RequestParams"></a>

### HttpProxy~RequestParams : <code>Object</code>
An object representing the complete request parameters used to create and
send the HTTP request.

**Kind**: inner typedef of [<code>HttpProxy</code>](#HttpProxy)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| method | <code>string</code> | The HTTP method. |
| url | <code>string</code> | The original URL to which to make the request. |
| transformedUrl | <code>string</code> | The actual URL to which to make the           request, created by applying the URL transformer to the           original URL. |
| data | <code>Object.&lt;string, (boolean\|number\|string\|Date)&gt;</code> | The request           data, sent as query or body. |
| options | <code>HttpAgent~RequestOptions</code> | The high-level request options           provided by the HTTP agent. |


* * *

<a name="HttpProxy..ErrorParams"></a>

### HttpProxy~ErrorParams : <code>Object</code>
An object that describes a failed HTTP request, providing
information about both the failure reported by the server and how the
request has been sent to the server.

**Kind**: inner typedef of [<code>HttpProxy</code>](#HttpProxy)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| errorName | <code>string</code> | An error name. |
| status | <code>number</code> | The HTTP response status code send by the           server. |
| body | <code>object</code> | The body of HTTP error response (detailed           information). |
| cause | <code>Error</code> | The low-level cause error. |
| params | [<code>RequestParams</code>](#HttpProxy..RequestParams) | An object representing the           complete request parameters used to create and send the HTTP           request. |


* * *

