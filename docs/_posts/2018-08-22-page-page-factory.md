<a name="PageFactory"></a>

## PageFactory
Factory for page.

**Kind**: global class  

* [PageFactory](#PageFactory)
    * [new PageFactory(oc)](#new_PageFactory_new)
    * [._oc](#PageFactory+_oc) : <code>ObjectContainer</code>
    * [.createController(controller)](#PageFactory+createController) ⇒ <code>Controller</code>
    * [.createView(view)](#PageFactory+createView) ⇒ <code>function</code>
    * [.decorateController(controller)](#PageFactory+decorateController) ⇒ <code>Controller</code>
    * [.decoratePageStateManager(pageStateManager, allowedStateKeys)](#PageFactory+decoratePageStateManager) ⇒ <code>PageStateManager</code>


* * *

<a name="new_PageFactory_new"></a>

### new PageFactory(oc)
Factory used by page management classes.


| Param | Type |
| --- | --- |
| oc | <code>ObjectContainer</code> | 


* * *

<a name="PageFactory+_oc"></a>

### pageFactory._oc : <code>ObjectContainer</code>
The current application object container.

**Kind**: instance property of [<code>PageFactory</code>](#PageFactory)  

* * *

<a name="PageFactory+createController"></a>

### pageFactory.createController(controller) ⇒ <code>Controller</code>
Create new instance of {@linkcode Controller}.

**Kind**: instance method of [<code>PageFactory</code>](#PageFactory)  

| Param | Type |
| --- | --- |
| controller | <code>string</code> \| <code>function</code> | 


* * *

<a name="PageFactory+createView"></a>

### pageFactory.createView(view) ⇒ <code>function</code>
Retrieves the specified react component class.

**Kind**: instance method of [<code>PageFactory</code>](#PageFactory)  
**Returns**: <code>function</code> - The react component class
        constructor.  

| Param | Type | Description |
| --- | --- | --- |
| view | <code>string</code> \| <code>function</code> | The namespace        referring to a react component class, or a react component class        constructor. |


* * *

<a name="PageFactory+decorateController"></a>

### pageFactory.decorateController(controller) ⇒ <code>Controller</code>
Returns decorated controller for ease setting seo params in controller.

**Kind**: instance method of [<code>PageFactory</code>](#PageFactory)  

| Param | Type |
| --- | --- |
| controller | <code>Controller</code> | 


* * *

<a name="PageFactory+decoratePageStateManager"></a>

### pageFactory.decoratePageStateManager(pageStateManager, allowedStateKeys) ⇒ <code>PageStateManager</code>
Returns decorated page state manager for extension.

**Kind**: instance method of [<code>PageFactory</code>](#PageFactory)  

| Param | Type |
| --- | --- |
| pageStateManager | <code>PageStateManager</code> | 
| allowedStateKeys | <code>Array.&lt;string&gt;</code> | 


* * *

