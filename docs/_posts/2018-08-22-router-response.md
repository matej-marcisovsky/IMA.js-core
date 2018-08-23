<a name="Response"></a>

## Response
Wrapper for the ExpressJS response, exposing only the necessary minimum.

**Kind**: global class  

* [Response](#Response)
    * [new Response()](#new_Response_new)
    * [._response](#Response+_response) : <code>Express.Response</code>
    * [._isSent](#Response+_isSent) : <code>boolean</code>
    * [._status](#Response+_status) : <code>number</code>
    * [._content](#Response+_content) : <code>string</code>
    * [._pageState](#Response+_pageState) : <code>Object.&lt;string, \*&gt;</code>
    * [._internalCookieStorage](#Response+_internalCookieStorage) : <code>Map.&lt;string, {value: string, options: {domain: string&#x3D;, expires: (number\|string)&#x3D;}}&gt;</code>
    * [._cookieTransformFunction](#Response+_cookieTransformFunction) : <code>Object</code>
    * [.init(response, [cookieTransformFunction])](#Response+init) ⇒ <code>ima.router.Response</code>
    * [.redirect(url, [status])](#Response+redirect) ⇒ [<code>Response</code>](#Response)
    * [.status(httpStatus)](#Response+status) ⇒ [<code>Response</code>](#Response)
    * [.send(content)](#Response+send) ⇒ [<code>Response</code>](#Response)
    * [.setPageState(pageState)](#Response+setPageState) ⇒ [<code>Response</code>](#Response)
    * [.setCookie(name, value, options)](#Response+setCookie) ⇒ [<code>Response</code>](#Response)
    * [.getResponseParams()](#Response+getResponseParams) ⇒ <code>Object</code>
    * [.isResponseSent()](#Response+isResponseSent) ⇒ <code>boolean</code>
    * [._setCookieHeaders()](#Response+_setCookieHeaders)
    * [._prepareCookieOptionsForExpress(options)](#Response+_prepareCookieOptionsForExpress) ⇒ <code>Object</code>


* * *

<a name="new_Response_new"></a>

### new Response()
Initializes the response.


* * *

<a name="Response+_response"></a>

### response._response : <code>Express.Response</code>
The ExpressJS response object, or <code>null</code> if running at the
client side.

**Kind**: instance property of [<code>Response</code>](#Response)  

* * *

<a name="Response+_isSent"></a>

### response._isSent : <code>boolean</code>
It is flag for sent response for request.

**Kind**: instance property of [<code>Response</code>](#Response)  

* * *

<a name="Response+_status"></a>

### response._status : <code>number</code>
HTTP Status code.

**Kind**: instance property of [<code>Response</code>](#Response)  

* * *

<a name="Response+_content"></a>

### response._content : <code>string</code>
The content of response.

**Kind**: instance property of [<code>Response</code>](#Response)  

* * *

<a name="Response+_pageState"></a>

### response._pageState : <code>Object.&lt;string, \*&gt;</code>
The rendered page state.

**Kind**: instance property of [<code>Response</code>](#Response)  

* * *

<a name="Response+_internalCookieStorage"></a>

### response._internalCookieStorage : <code>Map.&lt;string, {value: string, options: {domain: string&#x3D;, expires: (number\|string)&#x3D;}}&gt;</code>
Internal cookie storage for Set-Cookie header.

**Kind**: instance property of [<code>Response</code>](#Response)  

* * *

<a name="Response+_cookieTransformFunction"></a>

### response._cookieTransformFunction : <code>Object</code>
Transform function for cookie value.

**Kind**: instance property of [<code>Response</code>](#Response)  

* * *

<a name="Response+init"></a>

### response.init(response, [cookieTransformFunction]) ⇒ <code>ima.router.Response</code>
Initializes this response wrapper with the provided ExpressJS response
object.

**Kind**: instance method of [<code>Response</code>](#Response)  
**Returns**: <code>ima.router.Response</code> - This response.  

| Param | Type | Description |
| --- | --- | --- |
| response | <code>Express.Response</code> | The ExpressJS response, or        <code>null</code> if the code is running at the client side. |
| [cookieTransformFunction] | <code>Object</code> |  |


* * *

<a name="Response+redirect"></a>

### response.redirect(url, [status]) ⇒ [<code>Response</code>](#Response)
Redirects the client to the specified location, with the specified
redirect HTTP response code.

For full list of HTTP response status codes see
http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html

Use this method only at the server side.

**Kind**: instance method of [<code>Response</code>](#Response)  
**Returns**: [<code>Response</code>](#Response) - This response.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| url | <code>string</code> |  | The URL to which the client should be redirected. |
| [status] | <code>number</code> | <code>302</code> | The HTTP status code to send to the        client. |


* * *

<a name="Response+status"></a>

### response.status(httpStatus) ⇒ [<code>Response</code>](#Response)
Sets the HTTP status code that will be sent to the client when the
response is sent.

For full list of available response codes see
http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html

Use this method only at the server side.

**Kind**: instance method of [<code>Response</code>](#Response)  
**Returns**: [<code>Response</code>](#Response) - This response.  

| Param | Type | Description |
| --- | --- | --- |
| httpStatus | <code>number</code> | HTTP response status code to send to the        client. |


* * *

<a name="Response+send"></a>

### response.send(content) ⇒ [<code>Response</code>](#Response)
Sends the response to the client with the provided content. Use this
method only at the server side.

**Kind**: instance method of [<code>Response</code>](#Response)  
**Returns**: [<code>Response</code>](#Response) - This response.  

| Param | Type | Description |
| --- | --- | --- |
| content | <code>string</code> | The response body. |


* * *

<a name="Response+setPageState"></a>

### response.setPageState(pageState) ⇒ [<code>Response</code>](#Response)
Sets the rendered page state.

**Kind**: instance method of [<code>Response</code>](#Response)  
**Returns**: [<code>Response</code>](#Response) - This response.  

| Param | Type | Description |
| --- | --- | --- |
| pageState | <code>Object.&lt;string, \*&gt;</code> | The rendered page state. |


* * *

<a name="Response+setCookie"></a>

### response.setCookie(name, value, options) ⇒ [<code>Response</code>](#Response)
Sets a cookie, which will be sent to the client with the response.

**Kind**: instance method of [<code>Response</code>](#Response)  
**Returns**: [<code>Response</code>](#Response) - This response.  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The cookie name. |
| value | <code>boolean</code> \| <code>number</code> \| <code>string</code> | The cookie value, will be        converted to string. |
| options | <code>Object</code> | Cookie attributes. Only the attributes listed in the type        annotation of this field are supported. For documentation and full        list of cookie attributes        see http://tools.ietf.org/html/rfc2965#page-5 |


* * *

<a name="Response+getResponseParams"></a>

### response.getResponseParams() ⇒ <code>Object</code>
Return object which contains response status, content and rendered
page state.

**Kind**: instance method of [<code>Response</code>](#Response)  

* * *

<a name="Response+isResponseSent"></a>

### response.isResponseSent() ⇒ <code>boolean</code>
Return true if response is sent from server to client.

**Kind**: instance method of [<code>Response</code>](#Response)  

* * *

<a name="Response+_setCookieHeaders"></a>

### response._setCookieHeaders()
Set cookie headers for response.

**Kind**: instance method of [<code>Response</code>](#Response)  

* * *

<a name="Response+_prepareCookieOptionsForExpress"></a>

### response._prepareCookieOptionsForExpress(options) ⇒ <code>Object</code>
Prepares cookie options for Express.

**Kind**: instance method of [<code>Response</code>](#Response)  
**Returns**: <code>Object</code> - Cookie options prepared for Express.  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | Cookie attributes. Only the attributes listed in the type        annotation of this field are supported. For documentation and full        list of cookie attributes        see http://tools.ietf.org/html/rfc2965#page-5 |


* * *

