<a name="Window"></a>

## Window
**Kind**: global interface  

* [Window](#Window)
    * [.isClient()](#Window+isClient) ⇒ <code>boolean</code>
    * [.isCookieEnabled()](#Window+isCookieEnabled) ⇒ <code>boolean</code>
    * [.hasSessionStorage()](#Window+hasSessionStorage) ⇒ <code>boolean</code>
    * [.setTitle(title)](#Window+setTitle)
    * ~~[.getWebSocket()](#Window+getWebSocket) ⇒ <code>function</code>~~
    * [.getWindow()](#Window+getWindow) ⇒ <code>undefined</code> \| [<code>Window</code>](#Window)
    * [.getDocument()](#Window+getDocument) ⇒ <code>undefined</code> \| <code>Document</code>
    * [.getScrollX()](#Window+getScrollX) ⇒ <code>number</code>
    * [.getScrollY()](#Window+getScrollY) ⇒ <code>number</code>
    * [.scrollTo(x, y)](#Window+scrollTo)
    * [.getDomain()](#Window+getDomain) ⇒ <code>string</code>
    * [.getHost()](#Window+getHost) ⇒ <code>string</code>
    * [.getPath()](#Window+getPath) ⇒ <code>string</code>
    * [.getUrl()](#Window+getUrl) ⇒ <code>string</code>
    * [.getBody()](#Window+getBody) ⇒ <code>undefined</code> \| <code>HTMLBodyElement</code>
    * [.getElementById(id)](#Window+getElementById) ⇒ <code>HTMLElement</code>
    * [.getHistoryState()](#Window+getHistoryState) ⇒ <code>Object</code>
    * [.querySelector(selector)](#Window+querySelector) ⇒ <code>HTMLElement</code>
    * [.querySelectorAll(selector)](#Window+querySelectorAll) ⇒ <code>NodeList</code>
    * [.redirect(url)](#Window+redirect)
    * [.pushState(state, title, url)](#Window+pushState)
    * [.replaceState(state, title, url)](#Window+replaceState)
    * [.createCustomEvent(name, options)](#Window+createCustomEvent) ⇒ <code>CustomEvent</code>
    * [.bindEventListener(eventTarget, event, listener, [useCapture])](#Window+bindEventListener)
    * [.unbindEventListener(eventTarget, event, listener, [useCapture])](#Window+unbindEventListener)


* * *

<a name="Window+isClient"></a>

### window.isClient() ⇒ <code>boolean</code>
Returns <code>true</code> if invoked at the client side.

**Kind**: instance method of [<code>Window</code>](#Window)  
**Returns**: <code>boolean</code> - <code>true</code> if invoked at the client side.  

* * *

<a name="Window+isCookieEnabled"></a>

### window.isCookieEnabled() ⇒ <code>boolean</code>
Returns <code>true</code> if the cookies are set and processed with every
HTTP request and response automatically by the environment.

**Kind**: instance method of [<code>Window</code>](#Window)  
**Returns**: <code>boolean</code> - <code>true</code> if cookies are handled automatically by
        the environment.  

* * *

<a name="Window+hasSessionStorage"></a>

### window.hasSessionStorage() ⇒ <code>boolean</code>
Returns <code>true</code> if the session storage is supported.

**Kind**: instance method of [<code>Window</code>](#Window)  
**Returns**: <code>boolean</code> - <code>true</code> if the session storage is supported.  

* * *

<a name="Window+setTitle"></a>

### window.setTitle(title)
Sets the new page title of the document.

**Kind**: instance method of [<code>Window</code>](#Window)  

| Param | Type | Description |
| --- | --- | --- |
| title | <code>string</code> | The new page title. |


* * *

<a name="Window+getWebSocket"></a>

### ~~window.getWebSocket() ⇒ <code>function</code>~~
***Deprecated***

Returns the current <code>WebSocket</code> implementation to use.

**Kind**: instance method of [<code>Window</code>](#Window)  
**Returns**: <code>function</code> - The current <code>WebSocket</code>
        implementation.  

* * *

<a name="Window+getWindow"></a>

### window.getWindow() ⇒ <code>undefined</code> \| [<code>Window</code>](#Window)
Returns the native <code>window</code> object representing the global context
at the client-side. The method returns <code>undefined</code> if used at the
server-side.

**Kind**: instance method of [<code>Window</code>](#Window)  
**Returns**: <code>undefined</code> \| [<code>Window</code>](#Window) - The <code>window</code> object at the
        client-side, or <code>undefined</code> at the server-side.  

* * *

<a name="Window+getDocument"></a>

### window.getDocument() ⇒ <code>undefined</code> \| <code>Document</code>
Returns the native <code>document</code> object representing any web page loaded
in the browser and serves as an entry point into the web page's content
which is the DOM tree at the client-side. The method returns <code>undefined</code>
if used at the server-side.

**Kind**: instance method of [<code>Window</code>](#Window)  
**Returns**: <code>undefined</code> \| <code>Document</code> - The <code>document</code> object at the
        client-side, or <code>undefined</code> at the server-side.  

* * *

<a name="Window+getScrollX"></a>

### window.getScrollX() ⇒ <code>number</code>
Returns the number of pixels the viewport is scrolled horizontally.

**Kind**: instance method of [<code>Window</code>](#Window)  
**Returns**: <code>number</code> - The number of pixels the viewport is scrolled
        horizontally.  

* * *

<a name="Window+getScrollY"></a>

### window.getScrollY() ⇒ <code>number</code>
Returns the number of pixels the document is scrolled vertically.

**Kind**: instance method of [<code>Window</code>](#Window)  
**Returns**: <code>number</code> - The number of pixels the document is scrolled
        vertically.  

* * *

<a name="Window+scrollTo"></a>

### window.scrollTo(x, y)
Scrolls the viewport to the specified location (if possible).

**Kind**: instance method of [<code>Window</code>](#Window)  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>number</code> | Horizontal scroll offset in pixels. |
| y | <code>number</code> | Vertical scroll offset in pixels. |


* * *

<a name="Window+getDomain"></a>

### window.getDomain() ⇒ <code>string</code>
Returns the domain of the current document's URL as
<code>`${protocol</code>://${host}`}.

**Kind**: instance method of [<code>Window</code>](#Window)  
**Returns**: <code>string</code> - The current domain.  

* * *

<a name="Window+getHost"></a>

### window.getHost() ⇒ <code>string</code>
Returns the application's host.

**Kind**: instance method of [<code>Window</code>](#Window)  
**Returns**: <code>string</code> - The current host.  

* * *

<a name="Window+getPath"></a>

### window.getPath() ⇒ <code>string</code>
Returns the path part of the current URL, including the query string.

**Kind**: instance method of [<code>Window</code>](#Window)  
**Returns**: <code>string</code> - The path and query string parts of the current URL.  

* * *

<a name="Window+getUrl"></a>

### window.getUrl() ⇒ <code>string</code>
Returns the current document's URL.

**Kind**: instance method of [<code>Window</code>](#Window)  
**Returns**: <code>string</code> - The current document's URL.  

* * *

<a name="Window+getBody"></a>

### window.getBody() ⇒ <code>undefined</code> \| <code>HTMLBodyElement</code>
Returns the document's body element. The method returns
<code>undefined</code> if invoked at the server-side.

**Kind**: instance method of [<code>Window</code>](#Window)  
**Returns**: <code>undefined</code> \| <code>HTMLBodyElement</code> - The document's body element, or
        <code>undefined</code> if invoked at the server side.  

* * *

<a name="Window+getElementById"></a>

### window.getElementById(id) ⇒ <code>HTMLElement</code>
Returns the HTML element with the specified <code>id</code> attribute value.

**Kind**: instance method of [<code>Window</code>](#Window)  
**Returns**: <code>HTMLElement</code> - The element with the specified id, or
        <code>null</code> if no such element exists.  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The value of the <code>id</code> attribute to look for. |


* * *

<a name="Window+getHistoryState"></a>

### window.getHistoryState() ⇒ <code>Object</code>
Returns the history state.

**Kind**: instance method of [<code>Window</code>](#Window)  
**Returns**: <code>Object</code> - The current history state  

* * *

<a name="Window+querySelector"></a>

### window.querySelector(selector) ⇒ <code>HTMLElement</code>
Returns the first element matching the specified CSS 3 selector.

**Kind**: instance method of [<code>Window</code>](#Window)  
**Returns**: <code>HTMLElement</code> - The first element matching the CSS selector or
        <code>null</code> if no such element exists.  

| Param | Type | Description |
| --- | --- | --- |
| selector | <code>string</code> | The CSS selector. |


* * *

<a name="Window+querySelectorAll"></a>

### window.querySelectorAll(selector) ⇒ <code>NodeList</code>
Returns a node list of all elements matching the specified CSS 3
selector.

**Kind**: instance method of [<code>Window</code>](#Window)  
**Returns**: <code>NodeList</code> - A node list containing all elements matching the
        specified CSS selector.  

| Param | Type | Description |
| --- | --- | --- |
| selector | <code>string</code> | The CSS selector. |


* * *

<a name="Window+redirect"></a>

### window.redirect(url)
Performs a hard redirect (discarding the current JavaScript state) to
the specified URL.

**Kind**: instance method of [<code>Window</code>](#Window)  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | The URL to which the browser will be redirected. |


* * *

<a name="Window+pushState"></a>

### window.pushState(state, title, url)
Pushes a new state to the browser history. The method has no effect if
the current browser does not support the history API (IE9).

**Kind**: instance method of [<code>Window</code>](#Window)  

| Param | Type | Description |
| --- | --- | --- |
| state | <code>Object.&lt;string, \*&gt;</code> | A state object associated with the        history item, preferably representing the page state. |
| title | <code>string</code> | The page title related to the state. Note that        this parameter is ignored by some browsers. |
| url | <code>string</code> | The new URL at which the state is available. |


* * *

<a name="Window+replaceState"></a>

### window.replaceState(state, title, url)
Replaces the current history entry. The method has no effect if the
current browser does not support the history API (IE9).

**Kind**: instance method of [<code>Window</code>](#Window)  

| Param | Type | Description |
| --- | --- | --- |
| state | <code>Object.&lt;string, \*&gt;</code> | A state object associated with the        history item, preferably representing the page state. |
| title | <code>string</code> | The page title related to the state. Note that        this parameter is ignored by some browsers. |
| url | <code>string</code> | The new URL at which the state is available. |


* * *

<a name="Window+createCustomEvent"></a>

### window.createCustomEvent(name, options) ⇒ <code>CustomEvent</code>
Create new instance of CustomEvent of the specified name and using the
provided options.

**Kind**: instance method of [<code>Window</code>](#Window)  
**Returns**: <code>CustomEvent</code> - The created custom event.  
**See**: https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | Custom event's name (sometimes referred to as the        event's type). |
| options | <code>Object.&lt;string, \*&gt;</code> | The custom event's options. |


* * *

<a name="Window+bindEventListener"></a>

### window.bindEventListener(eventTarget, event, listener, [useCapture])
Registers the provided event listener to be executed when the specified
event occurs on the specified event target.

Registering the same event listener for the same event on the same event
target with the same <code>useCapture</code> flag value repeatedly has no
effect.

**Kind**: instance method of [<code>Window</code>](#Window)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| eventTarget | <code>EventTarget</code> |  | The event target. |
| event | <code>string</code> |  | The name of the event. |
| listener | <code>function</code> |  | The event listener. |
| [useCapture] | <code>boolean</code> | <code>false</code> | If true, the method initiates event        capture. After initiating capture, all events of the specified        type will be dispatched to the registered listener before being        dispatched to any EventTarget beneath it in the DOM tree. Events        which are bubbling upward through the tree will not trigger a        listener designated to use capture. |


* * *

<a name="Window+unbindEventListener"></a>

### window.unbindEventListener(eventTarget, event, listener, [useCapture])
Deregisters the provided event listener, so it will no longer we
executed when the specified event occurs on the specified event target.

The method has no effect if the provided event listener is not
registered to be executed at the specified event.

**Kind**: instance method of [<code>Window</code>](#Window)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| eventTarget | <code>EventTarget</code> |  | The event target. |
| event | <code>string</code> |  | The name of the event. |
| listener | <code>function</code> |  | The event listener. |
| [useCapture] | <code>boolean</code> | <code>false</code> | The <code>useCapture</code> flag value        that was used when the listener was registered. |


* * *

