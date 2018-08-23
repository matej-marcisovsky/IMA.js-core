<a name="MetaManager"></a>

## MetaManager
**Kind**: global interface  

* [MetaManager](#MetaManager)
    * [.setTitle(title)](#MetaManager+setTitle)
    * [.getTitle()](#MetaManager+getTitle) ⇒ <code>string</code>
    * [.setMetaName(name, value)](#MetaManager+setMetaName)
    * [.getMetaName(name)](#MetaManager+getMetaName) ⇒ <code>string</code>
    * [.getMetaNames()](#MetaManager+getMetaNames) ⇒ <code>Array.&lt;string&gt;</code>
    * [.setMetaProperty(name, value)](#MetaManager+setMetaProperty)
    * [.getMetaProperty(name)](#MetaManager+getMetaProperty) ⇒ <code>string</code>
    * [.getMetaProperties()](#MetaManager+getMetaProperties) ⇒ <code>Array.&lt;string&gt;</code>
    * [.setLink(relation, reference)](#MetaManager+setLink)
    * [.getLink(relation)](#MetaManager+getLink) ⇒ <code>string</code>
    * [.getLinks()](#MetaManager+getLinks) ⇒ <code>Array.&lt;string&gt;</code>


* * *

<a name="MetaManager+setTitle"></a>

### metaManager.setTitle(title)
Sets the page title.

**Kind**: instance method of [<code>MetaManager</code>](#MetaManager)  

| Param | Type | Description |
| --- | --- | --- |
| title | <code>string</code> | The new page title. |


* * *

<a name="MetaManager+getTitle"></a>

### metaManager.getTitle() ⇒ <code>string</code>
Returns the page title. The method returns an empty string if no page
title has been set yet.

Note that the page title is cached internally by the meta manager and
may therefore differ from the current document title if it has been
modified by a 3rd party code.

**Kind**: instance method of [<code>MetaManager</code>](#MetaManager)  
**Returns**: <code>string</code> - The current page title.  

* * *

<a name="MetaManager+setMetaName"></a>

### metaManager.setMetaName(name, value)
Set the specified named meta information property.

**Kind**: instance method of [<code>MetaManager</code>](#MetaManager)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | Meta information property name, for example        <code>keywords</code>. |
| value | <code>string</code> | The meta information value. |


* * *

<a name="MetaManager+getMetaName"></a>

### metaManager.getMetaName(name) ⇒ <code>string</code>
Returns the value of the specified named meta information property. The
method returns an empty string for missing meta information (to make the
returned value React-friendly).

**Kind**: instance method of [<code>MetaManager</code>](#MetaManager)  
**Returns**: <code>string</code> - The value of the generic meta information, or an empty
        string.  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The name of the named meta information property. |


* * *

<a name="MetaManager+getMetaNames"></a>

### metaManager.getMetaNames() ⇒ <code>Array.&lt;string&gt;</code>
Returns the names of the currently specified named meta information
properties.

**Kind**: instance method of [<code>MetaManager</code>](#MetaManager)  
**Returns**: <code>Array.&lt;string&gt;</code> - The names of the currently specified named meta
        information properties.  

* * *

<a name="MetaManager+setMetaProperty"></a>

### metaManager.setMetaProperty(name, value)
Sets the specified specialized meta information property.

**Kind**: instance method of [<code>MetaManager</code>](#MetaManager)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | Name of the specialized meta information property. |
| value | <code>string</code> | The value of the meta information property. |


* * *

<a name="MetaManager+getMetaProperty"></a>

### metaManager.getMetaProperty(name) ⇒ <code>string</code>
Returns the value of the specified specialized meta information
property. The method returns an empty string for missing meta
information (to make the returned value React-friendly).

**Kind**: instance method of [<code>MetaManager</code>](#MetaManager)  
**Returns**: <code>string</code> - The value of the specified meta information, or an
        empty string.  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The name of the specialized meta information        property. |


* * *

<a name="MetaManager+getMetaProperties"></a>

### metaManager.getMetaProperties() ⇒ <code>Array.&lt;string&gt;</code>
Returns the names of the currently specified specialized meta
information properties.

**Kind**: instance method of [<code>MetaManager</code>](#MetaManager)  
**Returns**: <code>Array.&lt;string&gt;</code> - The names of the currently specified specialized meta
        information properties.  

* * *

<a name="MetaManager+setLink"></a>

### metaManager.setLink(relation, reference)
Sets the specified specialized link information.

**Kind**: instance method of [<code>MetaManager</code>](#MetaManager)  

| Param | Type | Description |
| --- | --- | --- |
| relation | <code>string</code> | The relation of the link target to the current        page. |
| reference | <code>string</code> | The reference to the location of the related        document, e.g. a URL. |


* * *

<a name="MetaManager+getLink"></a>

### metaManager.getLink(relation) ⇒ <code>string</code>
Return the reference to the specified related linked document. The
method returns an empty string for missing meta information (to make the
returned value React-friendly).

**Kind**: instance method of [<code>MetaManager</code>](#MetaManager)  
**Returns**: <code>string</code> - The reference to the location of the related document,
        e.g. a URL.  

| Param | Type | Description |
| --- | --- | --- |
| relation | <code>string</code> | The relation of the link target to the current        page. |


* * *

<a name="MetaManager+getLinks"></a>

### metaManager.getLinks() ⇒ <code>Array.&lt;string&gt;</code>
Returns the relations of the currently set related documents linked to
the current page.

**Kind**: instance method of [<code>MetaManager</code>](#MetaManager)  

* * *

