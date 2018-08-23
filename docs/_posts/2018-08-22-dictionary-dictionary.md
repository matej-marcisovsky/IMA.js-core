<a name="Dictionary"></a>

## Dictionary
**Kind**: global interface  

* [Dictionary](#Dictionary)
    * [.init(config)](#Dictionary+init)
    * [.getLanguage()](#Dictionary+getLanguage) ⇒ <code>string</code>
    * [.get(key, [parameters])](#Dictionary+get) ⇒ <code>string</code>
    * [.has(key)](#Dictionary+has) ⇒ <code>boolean</code>


* * *

<a name="Dictionary+init"></a>

### dictionary.init(config)
Initializes this dictionary with the provided language and localization
phrases.

**Kind**: instance method of [<code>Dictionary</code>](#Dictionary)  

| Param | Type | Description |
| --- | --- | --- |
| config | <code>Object.&lt;string, \*&gt;</code> | The dictionary configuration. |
| config.language | <code>string</code> | The language property is an ISO 639-1        language code specifying the language of the provided phrases. |
| config.dictionary | <code>\*</code> | The dictionary property contains the        localization phrases organized in an implementation-specific way. |


* * *

<a name="Dictionary+getLanguage"></a>

### dictionary.getLanguage() ⇒ <code>string</code>
Returns the ISO 639-1 language code of the language this dictionary was
initialized with.

**Kind**: instance method of [<code>Dictionary</code>](#Dictionary)  
**Returns**: <code>string</code> - The language code representing the language of the
        localization phrases in this dictionary.  

* * *

<a name="Dictionary+get"></a>

### dictionary.get(key, [parameters]) ⇒ <code>string</code>
Retrieves the localization phrase identified by the specified key,
evaluates the phrase's placeholder expressions using the provided
parameters and returns the result.

**Kind**: instance method of [<code>Dictionary</code>](#Dictionary)  
**Returns**: <code>string</code> - The specified localization phrase with its placeholders
        evaluated using the provided parameters.  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | The key identifying the localization phrase. |
| [parameters] | <code>Object.&lt;string, (boolean\|number\|string\|Date)&gt;</code> | The        map of parameter names to the parameter values to use.        Defaults to an empty plain object. |


* * *

<a name="Dictionary+has"></a>

### dictionary.has(key) ⇒ <code>boolean</code>
Tests whether the specified localization phrase exists in the
dictionary.

**Kind**: instance method of [<code>Dictionary</code>](#Dictionary)  
**Returns**: <code>boolean</code> - `true` if the key exists and denotes a single
                  localization phrase, otherwise `false`.  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | The key identifying the localization phrase. |


* * *

