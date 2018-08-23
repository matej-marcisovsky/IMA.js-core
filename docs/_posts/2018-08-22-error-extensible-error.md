<a name="ExtensibleError"></a>

## *ExtensibleError ⇐ <code>Error</code>*
**Kind**: global abstract class  
**Extends**: <code>Error</code>  

* *[ExtensibleError](#ExtensibleError) ⇐ <code>Error</code>*
    * *[new ExtensibleError(message, [dropInternalStackFrames])](#new_ExtensibleError_new)*
    * *[.name](#ExtensibleError+name) : <code>string</code>*
    * *[.message](#ExtensibleError+message) : <code>string</code>*
    * *[._nativeError](#ExtensibleError+_nativeError) : <code>Error</code>*
    * *[._stack](#ExtensibleError+_stack) : <code>string</code>*
    * *[._dropInternalStackFrames](#ExtensibleError+_dropInternalStackFrames) : <code>boolean</code>*
    * *[.stack](#ExtensibleError+stack) : <code>string</code>*


* * *

<a name="new_ExtensibleError_new"></a>

### *new ExtensibleError(message, [dropInternalStackFrames])*
Base class of custom error classes, extending the native `Error` class.

This class has been introduced to fix the Babel-related issues with
extending the native JavaScript (Error) classes.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| message | <code>string</code> |  | The message describing the cause of the error. |
| [dropInternalStackFrames] | <code>boolean</code> | <code>true</code> | Whether or not the call stack        frames referring to the constructors of the custom errors should be        excluded from the stack of this error (just like the native platform        call stack frames are dropped by the JS engine).        This flag is enabled by default. |


* * *

<a name="ExtensibleError+name"></a>

### *extensibleError.name : <code>string</code>*
The name of this error, used in the generated stack trace.

**Kind**: instance property of [<code>ExtensibleError</code>](#ExtensibleError)  

* * *

<a name="ExtensibleError+message"></a>

### *extensibleError.message : <code>string</code>*
The message describing the cause of the error.

**Kind**: instance property of [<code>ExtensibleError</code>](#ExtensibleError)  

* * *

<a name="ExtensibleError+_nativeError"></a>

### *extensibleError._nativeError : <code>Error</code>*
Native error instance we use to generate the call stack. For some reason
some browsers do not generate call stacks for instances of classes
extending the native `Error` class, so we bypass this shortcoming this way.

**Kind**: instance property of [<code>ExtensibleError</code>](#ExtensibleError)  

* * *

<a name="ExtensibleError+_stack"></a>

### *extensibleError._stack : <code>string</code>*
The internal cache of the generated stack. The cache is filled upon first
access to the [stack](#ExtensibleError+stack) property.

**Kind**: instance property of [<code>ExtensibleError</code>](#ExtensibleError)  

* * *

<a name="ExtensibleError+_dropInternalStackFrames"></a>

### *extensibleError._dropInternalStackFrames : <code>boolean</code>*
Whether or not the call stack frames referring to the constructors of
the custom errors should be excluded from the stack of this error (just
like the native platform call stack frames are dropped by the JS
engine).

**Kind**: instance property of [<code>ExtensibleError</code>](#ExtensibleError)  

* * *

<a name="ExtensibleError+stack"></a>

### *extensibleError.stack : <code>string</code>*
The call stack captured at the moment of creation of this error. The
formatting of the stack is browser-dependant.

**Kind**: instance property of [<code>ExtensibleError</code>](#ExtensibleError)  

* * *

