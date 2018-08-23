<a name="Request"></a>

## Request
Wrapper for the ExpressJS request, exposing only the necessary minimum.

**Kind**: global class  

* [Request](#Request)
    * [new Request()](#new_Request_new)
    * [._request](#Request+_request) : <code>Express.Request</code>
    * [.init(request)](#Request+init)
    * [.getPath()](#Request+getPath) ⇒ <code>string</code>
    * [.getCookieHeader()](#Request+getCookieHeader) ⇒ <code>string</code>
    * [.getFile()](#Request+getFile) ⇒ <code>Object.&lt;string, \*&gt;</code>
    * [.getFiles()](#Request+getFiles) ⇒ <code>Object.&lt;string, \*&gt;</code>
    * [.getBody()](#Request+getBody) ⇒ <code>string</code>
    * [.getHeader(header)](#Request+getHeader) ⇒ <code>string</code>
    * [.getIP()](#Request+getIP) ⇒ <code>string</code>
    * [.getIPs()](#Request+getIPs) ⇒ <code>Array.&lt;string&gt;</code>


* * *

<a name="new_Request_new"></a>

### new Request()
Initializes the request.


* * *

<a name="Request+_request"></a>

### request._request : <code>Express.Request</code>
The current ExpressJS request object, or <code>null</code> if running at
the client side.

**Kind**: instance property of [<code>Request</code>](#Request)  

* * *

<a name="Request+init"></a>

### request.init(request)
Initializes the request using the provided ExpressJS request object.

**Kind**: instance method of [<code>Request</code>](#Request)  

| Param | Type | Description |
| --- | --- | --- |
| request | <code>Express.Request</code> | The ExpressJS request object        representing the current request. Use <code>null</code> at the client        side. |


* * *

<a name="Request+getPath"></a>

### request.getPath() ⇒ <code>string</code>
Returns the path part of the URL to which the request was made.

**Kind**: instance method of [<code>Request</code>](#Request)  
**Returns**: <code>string</code> - The path to which the request was made.  

* * *

<a name="Request+getCookieHeader"></a>

### request.getCookieHeader() ⇒ <code>string</code>
Returns the <code>Cookie</code> HTTP header value.

**Kind**: instance method of [<code>Request</code>](#Request)  
**Returns**: <code>string</code> - The value of the <code>Cookie</code> header.  

* * *

<a name="Request+getFile"></a>

### request.getFile() ⇒ <code>Object.&lt;string, \*&gt;</code>
Returns uploaded file to server and meta information.

**Kind**: instance method of [<code>Request</code>](#Request)  

* * *

<a name="Request+getFiles"></a>

### request.getFiles() ⇒ <code>Object.&lt;string, \*&gt;</code>
Returns upaloaded files to server with their meta information.

**Kind**: instance method of [<code>Request</code>](#Request)  

* * *

<a name="Request+getBody"></a>

### request.getBody() ⇒ <code>string</code>
Returns body of request.

**Kind**: instance method of [<code>Request</code>](#Request)  

* * *

<a name="Request+getHeader"></a>

### request.getHeader(header) ⇒ <code>string</code>
Returns the specified HTTP request header.

**Kind**: instance method of [<code>Request</code>](#Request)  

| Param | Type |
| --- | --- |
| header | <code>string</code> | 


* * *

<a name="Request+getIP"></a>

### request.getIP() ⇒ <code>string</code>
Returns the remote IP address of the request.

**Kind**: instance method of [<code>Request</code>](#Request)  

* * *

<a name="Request+getIPs"></a>

### request.getIPs() ⇒ <code>Array.&lt;string&gt;</code>
Returns array of IP addresses specified in the “X-Forwarded-For”
request header.

**Kind**: instance method of [<code>Request</code>](#Request)  

* * *

