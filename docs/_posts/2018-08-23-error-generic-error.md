<a name="GenericError"></a>

## GenericError ⇐ <code>Error</code>
Implementation of the [Error](Error) interface, providing more advanced
error API.

**Kind**: global class  
**Extends**: <code>Error</code>  

* [GenericError](#GenericError) ⇐ <code>Error</code>
    * [new GenericError(message, [params], [dropInternalStackFrames])](#new_GenericError_new)
    * [._params](#GenericError+_params) : <code>Object.&lt;string, \*&gt;</code>
    * [.getHttpStatus()](#GenericError+getHttpStatus)
    * [.getParams()](#GenericError+getParams)


* * *

<a name="new_GenericError_new"></a>

### new GenericError(message, [params], [dropInternalStackFrames])
Initializes the generic IMA error.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| message | <code>string</code> |  | The message describing the cause of the error. |
| [params] | <code>Object.&lt;string, \*&gt;</code> | <code>{}</code> | A data map providing additional        details related to the error. It is recommended to set the        <code>status</code> field to the HTTP response code that should be sent        to the client. |
| [dropInternalStackFrames] | <code>boolean</code> | <code>true</code> | Whether or not the call stack        frames referring to the constructors of the custom errors should        be excluded from the stack of this error (just like the native        platform call stack frames are dropped by the JS engine).        This flag is enabled by default. |


* * *

<a name="GenericError+_params"></a>

### genericError._params : <code>Object.&lt;string, \*&gt;</code>
The data providing additional details related to this error.

**Kind**: instance property of [<code>GenericError</code>](#GenericError)  

* * *

<a name="GenericError+getHttpStatus"></a>

### genericError.getHttpStatus()
**Kind**: instance method of [<code>GenericError</code>](#GenericError)  

* * *

<a name="GenericError+getParams"></a>

### genericError.getParams()
**Kind**: instance method of [<code>GenericError</code>](#GenericError)  

* * *

