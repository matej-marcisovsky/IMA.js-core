<a name="AbstractComponent"></a>

## *AbstractComponent*
The base class for all view components.

**Kind**: global abstract class  

* *[AbstractComponent](#AbstractComponent)*
    * *[new AbstractComponent(props, context)](#new_AbstractComponent_new)*
    * *[._utils](#AbstractComponent+_utils) : <code>Object.&lt;string, \*&gt;</code>*
    * *[.utils](#AbstractComponent+utils) ⇒ <code>Object.&lt;string, \*&gt;</code>*
    * *[.localize(key, [params])](#AbstractComponent+localize) ⇒ <code>string</code>*
    * *[.link(name, [params])](#AbstractComponent+link) ⇒ <code>string</code>*
    * *[.cssClasses(classRules, includeComponentClassName)](#AbstractComponent+cssClasses) ⇒ <code>string</code>*
    * *[.fire(eventName, [data])](#AbstractComponent+fire)*
    * *[.listen(eventTarget, eventName, listener)](#AbstractComponent+listen)*
    * *[.unlisten(eventTarget, eventName, listener)](#AbstractComponent+unlisten)*


* * *

<a name="new_AbstractComponent_new"></a>

### *new AbstractComponent(props, context)*
Initializes the component.


| Param | Type | Description |
| --- | --- | --- |
| props | <code>Object.&lt;string, \*&gt;</code> | The component properties. |
| context | <code>Object.&lt;string, \*&gt;</code> | The component context. |


* * *

<a name="AbstractComponent+_utils"></a>

### *abstractComponent._utils : <code>Object.&lt;string, \*&gt;</code>*
The view utilities, initialized lazily upon first use from either
the context, or the component's props.

**Kind**: instance property of [<code>AbstractComponent</code>](#AbstractComponent)  

* * *

<a name="AbstractComponent+utils"></a>

### *abstractComponent.utils ⇒ <code>Object.&lt;string, \*&gt;</code>*
Returns the utilities for the view components. The returned value is the
value bound to the <code>$Utils</code> object container constant.

**Kind**: instance property of [<code>AbstractComponent</code>](#AbstractComponent)  
**Returns**: <code>Object.&lt;string, \*&gt;</code> - The utilities for the view components.  

* * *

<a name="AbstractComponent+localize"></a>

### *abstractComponent.localize(key, [params]) ⇒ <code>string</code>*
Returns the localized phrase identified by the specified key. The
placeholders in the localization phrase will be replaced by the provided
values.

**Kind**: instance method of [<code>AbstractComponent</code>](#AbstractComponent)  
**Returns**: <code>string</code> - Localized phrase.  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | Localization key. |
| [params] | <code>Object.&lt;string, (number\|string)&gt;</code> | Values for replacing        the placeholders in the localization phrase. |


* * *

<a name="AbstractComponent+link"></a>

### *abstractComponent.link(name, [params]) ⇒ <code>string</code>*
Generates an absolute URL using the provided route name (see the
<code>app/config/routes.js</code> file). The provided parameters will
replace the placeholders in the route pattern, while the extraneous
parameters will be appended to the generated URL's query string.

**Kind**: instance method of [<code>AbstractComponent</code>](#AbstractComponent)  
**Returns**: <code>string</code> - The generated URL.  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The route name. |
| [params] | <code>Object.&lt;string, (number\|string)&gt;</code> | Router parameters and        extraneous parameters to add to the URL as a query string. |


* * *

<a name="AbstractComponent+cssClasses"></a>

### *abstractComponent.cssClasses(classRules, includeComponentClassName) ⇒ <code>string</code>*
Generate a string of CSS classes from the properties of the passed-in
object that resolve to true.

**Kind**: instance method of [<code>AbstractComponent</code>](#AbstractComponent)  
**Returns**: <code>string</code> - String of CSS classes that had their property resolved
        to <code>true</code>.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| classRules | <code>string</code> \| <code>Object.&lt;string, boolean&gt;</code> |  | CSS classes in a        string separated by whitespace, or a map of CSS class names to        boolean values. The CSS class name will be included in the result        only if the value is <code>true</code>. |
| includeComponentClassName | <code>boolean</code> | <code>false</code> |  |

**Example**  
```js
this.cssClasses('my-class my-class-modificator', true);
```
**Example**  
```js
this.cssClasses({
           'my-class': true,
           'my-class-modificator': this.props.modificator
       }, true);
```

* * *

<a name="AbstractComponent+fire"></a>

### *abstractComponent.fire(eventName, [data])*
Creates and sends a new IMA.js DOM custom event from this component.

**Kind**: instance method of [<code>AbstractComponent</code>](#AbstractComponent)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| eventName | <code>string</code> |  | The name of the event. |
| [data] | <code>\*</code> | <code></code> | Data to send within the event. |


* * *

<a name="AbstractComponent+listen"></a>

### *abstractComponent.listen(eventTarget, eventName, listener)*
Registers the provided event listener for execution whenever an IMA.js
DOM custom event of the specified name occurs at the specified event
target.

**Kind**: instance method of [<code>AbstractComponent</code>](#AbstractComponent)  

| Param | Type | Description |
| --- | --- | --- |
| eventTarget | <code>React.Element</code> \| <code>EventTarget</code> | The react component or        event target at which the listener should listen for the event. |
| eventName | <code>string</code> | The name of the event for which to listen. |
| listener | <code>function</code> | The listener for event to register. |


* * *

<a name="AbstractComponent+unlisten"></a>

### *abstractComponent.unlisten(eventTarget, eventName, listener)*
Deregisters the provided event listener for an IMA.js DOM custom event
of the specified name at the specified event target.

**Kind**: instance method of [<code>AbstractComponent</code>](#AbstractComponent)  

| Param | Type | Description |
| --- | --- | --- |
| eventTarget | <code>React.Element</code> \| <code>EventTarget</code> | The react component or        event target at which the listener should listen for the event. |
| eventName | <code>string</code> | The name of the event for which to listen. |
| listener | <code>function</code> | The listener for event to register. |


* * *

