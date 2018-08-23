## Classes

<dl>
<dt><a href="#Route">Route</a></dt>
<dd><p>Utility for representing and manipulating a single route in the router&#39;s
configuration.</p>
</dd>
</dl>

## Constants

<dl>
<dt><a href="#CONTROL_CHARACTERS_REGEXP">CONTROL_CHARACTERS_REGEXP</a> : <code>RegExp</code></dt>
<dd><p>Regular expression matching all control characters used in regular
expressions. The regular expression is used to match these characters in
path expressions and replace them appropriately so the path expression can
be compiled to a regular expression.</p>
</dd>
<dt><a href="#LOOSE_SLASHES_REGEXP">LOOSE_SLASHES_REGEXP</a> : <code>RegExp</code></dt>
<dd><p>Regular expression used to match and remove the starting and trailing
forward slashes from a path expression or a URL path.</p>
</dd>
<dt><a href="#PARAMS_REGEXP_UNIVERSAL">PARAMS_REGEXP_UNIVERSAL</a> : <code>RegExp</code></dt>
<dd><p>Regular expression used to match the parameter names from a path expression.</p>
</dd>
<dt><a href="#PARAMS_REGEXP_REQUIRED">PARAMS_REGEXP_REQUIRED</a> : <code>RegExp</code></dt>
<dd><p>Regular expression used to match the required parameter names from a path expression.</p>
</dd>
<dt><a href="#PARAMS_REGEXP_CORE_NAME">PARAMS_REGEXP_CORE_NAME</a> : <code>RegExp</code></dt>
<dd><p>Regular expression used to separate a camelCase parameter name</p>
</dd>
<dt><a href="#PARAMS_START_PATTERN">PARAMS_START_PATTERN</a> : <code>String</code></dt>
<dd><p>Regular expression used to match start of parameter names from a path expression.</p>
</dd>
<dt><a href="#PARAMS_END_PATTERN">PARAMS_END_PATTERN</a> : <code>String</code></dt>
<dd><p>Regular expression used to match end of parameter names from a path expression.</p>
</dd>
<dt><a href="#PARAMS_NEVER_MATCH_REGEXP">PARAMS_NEVER_MATCH_REGEXP</a> : <code>RegExp</code></dt>
<dd><p>Regular expression used to never match the parameter names from a path expression.
It&#39;s used for wrong parameters order (optional vs. required ones)</p>
</dd>
<dt><a href="#PARAMS_MAIN_REGEXP">PARAMS_MAIN_REGEXP</a> : <code>RegExp</code></dt>
<dd><p>Regular expression used to match all main parameter names from a path expression.</p>
</dd>
<dt><a href="#SUBPARAMS_REQUIRED_REGEXP">SUBPARAMS_REQUIRED_REGEXP</a> : <code>Object.&lt;String, RegExp&gt;</code></dt>
<dd><p>Regular expression used to match the required subparameter names from a path expression.
(e.g. for path &#39;/:paramA-:paramB/:nextParam&#39; are subparametres &#39;paramA&#39; and &#39;paramB&#39;)</p>
</dd>
<dt><a href="#SUBPARAMS_OPT_REGEXP">SUBPARAMS_OPT_REGEXP</a> : <code>Object.&lt;String, RegExp&gt;</code></dt>
<dd><p>Regular expression used to match the optional parameter names from a path expression.</p>
</dd>
<dt><a href="#PARAMS_REGEXP_OPT">PARAMS_REGEXP_OPT</a> : <code>RegExp</code></dt>
<dd><p>Regular expression used to match the parameter names from a path expression.</p>
</dd>
</dl>

<a name="Route"></a>

## Route
Utility for representing and manipulating a single route in the router's
configuration.

**Kind**: global class  

* [Route](#Route)
    * [new Route(name, pathExpression, controller, view, options)](#new_Route_new)
    * [._name](#Route+_name) : <code>string</code>
    * [._pathExpression](#Route+_pathExpression) : <code>string</code>
    * [._controller](#Route+_controller) : <code>string</code>
    * [._view](#Route+_view) : <code>React.Component</code>
    * [._options](#Route+_options) : <code>Object</code>
    * [._trimmedPathExpression](#Route+_trimmedPathExpression) : <code>string</code>
    * [._parameterNames](#Route+_parameterNames) : <code>Array.&lt;string&gt;</code>
    * [._hasParameters](#Route+_hasParameters) : <code>boolean</code>
    * [._matcher](#Route+_matcher) : <code>RegExp</code>
    * [.toPath([params])](#Route+toPath) ⇒ <code>string</code>
    * [.getName()](#Route+getName) ⇒ <code>string</code>
    * [.getController()](#Route+getController) ⇒ <code>string</code>
    * [.getView()](#Route+getView) ⇒ <code>string</code>
    * [.getOptions()](#Route+getOptions) ⇒ <code>Object</code>
    * [.getPathExpression()](#Route+getPathExpression) ⇒ <code>string</code>
    * [.matches(path)](#Route+matches) ⇒ <code>boolean</code>
    * [.extractParameters(path)](#Route+extractParameters) ⇒ <code>Object.&lt;string, ?string&gt;</code>
    * [._substituteRequiredParamInPath(path, paramName, paramValue)](#Route+_substituteRequiredParamInPath) ⇒ <code>string</code>
    * [._substituteOptionalParamInPath(path, paramName, paramValue)](#Route+_substituteOptionalParamInPath) ⇒ <code>string</code>
    * [._cleanUnusedOptionalParams(path)](#Route+_cleanUnusedOptionalParams) ⇒ <code>string</code>
    * [._isOptionalParamInPath(path, paramName)](#Route+_isOptionalParamInPath) ⇒ <code>boolean</code>
    * [._isRequiredParamInPath(path, paramName)](#Route+_isRequiredParamInPath) ⇒ <code>boolean</code>
    * [._getClearParamName(rawParam)](#Route+_getClearParamName) ⇒ <code>string</code>
    * [._getSubparamPattern(delimeter)](#Route+_getSubparamPattern) ⇒ <code>string</code>
    * [._checkOptionalParamsOrder(allMainParams)](#Route+_checkOptionalParamsOrder) ⇒ <code>boolean</code>
    * [._checkParametersOrder(clearedPathExpr)](#Route+_checkParametersOrder) ⇒ <code>Bool</code>
    * [._replaceOptionalParametersInPath(path, optionalParams)](#Route+_replaceOptionalParametersInPath) ⇒ <code>string</code>
    * [._replaceRequiredSubParametersInPath(path, clearedPathExpr)](#Route+_replaceRequiredSubParametersInPath) ⇒ <code>string</code>
    * [._replaceOptionalSubParametersInPath(path, optionalSubparamsOthers, optionalSubparamsLast)](#Route+_replaceOptionalSubParametersInPath) ⇒ <code>string</code>
    * [._compileToRegExp(pathExpression)](#Route+_compileToRegExp) ⇒ <code>RegExp</code>
    * [._getParameters(path)](#Route+_getParameters) ⇒ <code>Object.&lt;string, string&gt;</code>
    * [._extractParameters(parameterValues)](#Route+_extractParameters) ⇒ <code>Object.&lt;string, ?string&gt;</code>
    * [._decodeURIParameter(parameterValue)](#Route+_decodeURIParameter) ⇒ <code>string</code>
    * [._cleanOptParamName(paramName)](#Route+_cleanOptParamName) ⇒ <code>string</code>
    * [._isParamOptional(paramName)](#Route+_isParamOptional) ⇒ <code>boolean</code>
    * [._getQuery(path)](#Route+_getQuery) ⇒ <code>Object.&lt;string, ?string&gt;</code>
    * [._getTrimmedPath(path)](#Route+_getTrimmedPath) ⇒ <code>string</code>
    * [._getParameterNames(pathExpression)](#Route+_getParameterNames) ⇒ <code>Array.&lt;string&gt;</code>


* * *

<a name="new_Route_new"></a>

### new Route(name, pathExpression, controller, view, options)
Initializes the route.


| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The unique name of this route, identifying it among        the rest of the routes in the application. |
| pathExpression | <code>string</code> | A path expression specifying the URL path        part matching this route (must not contain a query string),        optionally containing named parameter placeholders specified as        <code>:parameterName</code>. |
| controller | <code>string</code> | The full name of Object Container alias        identifying the controller associated with this route. |
| view | <code>string</code> | The full name or Object Container alias identifying        the view class associated with this route. |
| options | <code>Object</code> | The route additional options. |


* * *

<a name="Route+_name"></a>

### route._name : <code>string</code>
The unique name of this route, identifying it among the rest of the
routes in the application.

**Kind**: instance property of [<code>Route</code>](#Route)  

* * *

<a name="Route+_pathExpression"></a>

### route._pathExpression : <code>string</code>
The original URL path expression from which this route was created.

**Kind**: instance property of [<code>Route</code>](#Route)  

* * *

<a name="Route+_controller"></a>

### route._controller : <code>string</code>
The full name of Object Container alias identifying the controller
associated with this route.

**Kind**: instance property of [<code>Route</code>](#Route)  

* * *

<a name="Route+_view"></a>

### route._view : <code>React.Component</code>
The full name or Object Container alias identifying the view class
associated with this route.

**Kind**: instance property of [<code>Route</code>](#Route)  

* * *

<a name="Route+_options"></a>

### route._options : <code>Object</code>
The route additional options.

**Kind**: instance property of [<code>Route</code>](#Route)  

* * *

<a name="Route+_trimmedPathExpression"></a>

### route._trimmedPathExpression : <code>string</code>
The path expression with the trailing slashes trimmed.

**Kind**: instance property of [<code>Route</code>](#Route)  

* * *

<a name="Route+_parameterNames"></a>

### route._parameterNames : <code>Array.&lt;string&gt;</code>
The names of the parameters in this route.

**Kind**: instance property of [<code>Route</code>](#Route)  

* * *

<a name="Route+_hasParameters"></a>

### route._hasParameters : <code>boolean</code>
Set to <code>true</code> if this route contains parameters in its path.

**Kind**: instance property of [<code>Route</code>](#Route)  

* * *

<a name="Route+_matcher"></a>

### route._matcher : <code>RegExp</code>
A regexp used to match URL path against this route and extract the
parameter values from the matched URL paths.

**Kind**: instance property of [<code>Route</code>](#Route)  

* * *

<a name="Route+toPath"></a>

### route.toPath([params]) ⇒ <code>string</code>
Creates the URL and query parts of a URL by substituting the route's
parameter placeholders by the provided parameter value.

The extraneous parameters that do not match any of the route's
placeholders will be appended as the query string.

**Kind**: instance method of [<code>Route</code>](#Route)  
**Returns**: <code>string</code> - Path and, if necessary, query parts of the URL
        representing this route with its parameters replaced by the
        provided parameter values.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [params] | <code>Object.&lt;string, (number\|string)&gt;</code> | <code>{}</code> | The route        parameter values. |


* * *

<a name="Route+getName"></a>

### route.getName() ⇒ <code>string</code>
Returns the unique identifying name of this route.

**Kind**: instance method of [<code>Route</code>](#Route)  
**Returns**: <code>string</code> - The name of the route, identifying it.  

* * *

<a name="Route+getController"></a>

### route.getController() ⇒ <code>string</code>
Returns the full name of the controller to use when this route is
matched by the current URL, or an Object Container-registered alias of
the controller.

**Kind**: instance method of [<code>Route</code>](#Route)  
**Returns**: <code>string</code> - The name of alias of the controller.  

* * *

<a name="Route+getView"></a>

### route.getView() ⇒ <code>string</code>
Returns the full name of the view class or an Object
Container-registered alias for the view class, representing the view to
use when this route is matched by the current URL.

**Kind**: instance method of [<code>Route</code>](#Route)  
**Returns**: <code>string</code> - The name or alias of the view class.  

* * *

<a name="Route+getOptions"></a>

### route.getOptions() ⇒ <code>Object</code>
Return route additional options.

**Kind**: instance method of [<code>Route</code>](#Route)  

* * *

<a name="Route+getPathExpression"></a>

### route.getPathExpression() ⇒ <code>string</code>
Returns the path expression, which is the parametrized pattern matching
the URL paths matched by this route.

**Kind**: instance method of [<code>Route</code>](#Route)  
**Returns**: <code>string</code> - The path expression.  

* * *

<a name="Route+matches"></a>

### route.matches(path) ⇒ <code>boolean</code>
Tests whether the provided URL path matches this route. The provided
path may contain the query.

**Kind**: instance method of [<code>Route</code>](#Route)  
**Returns**: <code>boolean</code> - <code>true</code> if the provided path matches this route.  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>string</code> | The URL path. |


* * *

<a name="Route+extractParameters"></a>

### route.extractParameters(path) ⇒ <code>Object.&lt;string, ?string&gt;</code>
Extracts the parameter values from the provided path. The method
extracts both the in-path parameters and parses the query, allowing the
query parameters to override the in-path parameters.

The method returns an empty hash object if the path does not match this
route.

**Kind**: instance method of [<code>Route</code>](#Route)  
**Returns**: <code>Object.&lt;string, ?string&gt;</code> - Map of parameter names to parameter
        values.  

| Param | Type |
| --- | --- |
| path | <code>string</code> | 


* * *

<a name="Route+_substituteRequiredParamInPath"></a>

### route._substituteRequiredParamInPath(path, paramName, paramValue) ⇒ <code>string</code>
Replace required parameter placeholder in path with parameter value.

**Kind**: instance method of [<code>Route</code>](#Route)  
**Returns**: <code>string</code> - New path.  

| Param | Type |
| --- | --- |
| path | <code>string</code> | 
| paramName | <code>string</code> | 
| paramValue | <code>string</code> | 


* * *

<a name="Route+_substituteOptionalParamInPath"></a>

### route._substituteOptionalParamInPath(path, paramName, paramValue) ⇒ <code>string</code>
Replace optional param placeholder in path with parameter value.

**Kind**: instance method of [<code>Route</code>](#Route)  
**Returns**: <code>string</code> - New path.  

| Param | Type |
| --- | --- |
| path | <code>string</code> | 
| paramName | <code>string</code> | 
| paramValue | <code>string</code> | 


* * *

<a name="Route+_cleanUnusedOptionalParams"></a>

### route._cleanUnusedOptionalParams(path) ⇒ <code>string</code>
Remove unused optional param placeholders in path.

**Kind**: instance method of [<code>Route</code>](#Route)  
**Returns**: <code>string</code> - New path.  

| Param | Type |
| --- | --- |
| path | <code>string</code> | 


* * *

<a name="Route+_isOptionalParamInPath"></a>

### route._isOptionalParamInPath(path, paramName) ⇒ <code>boolean</code>
Returns true, if paramName is placed in path.

**Kind**: instance method of [<code>Route</code>](#Route)  

| Param | Type |
| --- | --- |
| path | <code>string</code> | 
| paramName | <code>string</code> | 


* * *

<a name="Route+_isRequiredParamInPath"></a>

### route._isRequiredParamInPath(path, paramName) ⇒ <code>boolean</code>
Returns true, if paramName is placed in path and it's required.

**Kind**: instance method of [<code>Route</code>](#Route)  

| Param | Type |
| --- | --- |
| path | <code>string</code> | 
| paramName | <code>string</code> | 


* * *

<a name="Route+_getClearParamName"></a>

### route._getClearParamName(rawParam) ⇒ <code>string</code>
Extract clear parameter name, e.q. '?name' or 'name'

**Kind**: instance method of [<code>Route</code>](#Route)  

| Param | Type |
| --- | --- |
| rawParam | <code>string</code> | 


* * *

<a name="Route+_getSubparamPattern"></a>

### route._getSubparamPattern(delimeter) ⇒ <code>string</code>
Get pattern for subparameter.

**Kind**: instance method of [<code>Route</code>](#Route)  

| Param | Type | Description |
| --- | --- | --- |
| delimeter | <code>string</code> | Parameters delimeter |


* * *

<a name="Route+_checkOptionalParamsOrder"></a>

### route._checkOptionalParamsOrder(allMainParams) ⇒ <code>boolean</code>
Check if all optional params are below required ones

**Kind**: instance method of [<code>Route</code>](#Route)  

| Param | Type |
| --- | --- |
| allMainParams | <code>array.&lt;string&gt;</code> | 


* * *

<a name="Route+_checkParametersOrder"></a>

### route._checkParametersOrder(clearedPathExpr) ⇒ <code>Bool</code>
Check if main parametres have correct order.
It means that required param cannot follow optional one.

**Kind**: instance method of [<code>Route</code>](#Route)  
**Returns**: <code>Bool</code> - Returns TRUE if order is correct.  

| Param | Type | Description |
| --- | --- | --- |
| clearedPathExpr | <code>string</code> | The cleared URL path (removed first and last slash, ...). |


* * *

<a name="Route+_replaceOptionalParametersInPath"></a>

### route._replaceOptionalParametersInPath(path, optionalParams) ⇒ <code>string</code>
Convert main optional parameters to capture sequences

**Kind**: instance method of [<code>Route</code>](#Route)  
**Returns**: <code>string</code> - RegExp pattern.  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>string</code> | The URL path. |
| optionalParams | <code>array.&lt;string&gt;</code> | List of main optimal parameter expressions |


* * *

<a name="Route+_replaceRequiredSubParametersInPath"></a>

### route._replaceRequiredSubParametersInPath(path, clearedPathExpr) ⇒ <code>string</code>
Convert required subparameters to capture sequences

**Kind**: instance method of [<code>Route</code>](#Route)  
**Returns**: <code>string</code> - RegExp pattern.  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>string</code> | The URL path (route definition). |
| clearedPathExpr | <code>string</code> | The original cleared URL path. |


* * *

<a name="Route+_replaceOptionalSubParametersInPath"></a>

### route._replaceOptionalSubParametersInPath(path, optionalSubparamsOthers, optionalSubparamsLast) ⇒ <code>string</code>
Convert optional subparameters to capture sequences

**Kind**: instance method of [<code>Route</code>](#Route)  
**Returns**: <code>string</code> - RegExp pattern.  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>string</code> | The URL path (route definition). |
| optionalSubparamsOthers | <code>array.&lt;string&gt;</code> | List of all subparam. expressions but last ones |
| optionalSubparamsLast | <code>array.&lt;string&gt;</code> | List of last subparam. expressions |


* * *

<a name="Route+_compileToRegExp"></a>

### route._compileToRegExp(pathExpression) ⇒ <code>RegExp</code>
Compiles the path expression to a regular expression that can be used
for easier matching of URL paths against this route, and extracting the
path parameter values from the URL path.

**Kind**: instance method of [<code>Route</code>](#Route)  
**Returns**: <code>RegExp</code> - The compiled regular expression.  

| Param | Type | Description |
| --- | --- | --- |
| pathExpression | <code>string</code> | The path expression to compile. |


* * *

<a name="Route+_getParameters"></a>

### route._getParameters(path) ⇒ <code>Object.&lt;string, string&gt;</code>
Parses the provided path and extract the in-path parameters. The method
decodes the parameters and returns them in a hash object.

**Kind**: instance method of [<code>Route</code>](#Route)  
**Returns**: <code>Object.&lt;string, string&gt;</code> - The parsed path parameters.  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>string</code> | The URL path. |


* * *

<a name="Route+_extractParameters"></a>

### route._extractParameters(parameterValues) ⇒ <code>Object.&lt;string, ?string&gt;</code>
Extract parameters from given path.

**Kind**: instance method of [<code>Route</code>](#Route)  
**Returns**: <code>Object.&lt;string, ?string&gt;</code> - Params object.  

| Param | Type |
| --- | --- |
| parameterValues | <code>Array.&lt;string&gt;</code> | 


* * *

<a name="Route+_decodeURIParameter"></a>

### route._decodeURIParameter(parameterValue) ⇒ <code>string</code>
Decoding parameters.

**Kind**: instance method of [<code>Route</code>](#Route)  
**Returns**: <code>string</code> - decodedValue  

| Param | Type |
| --- | --- |
| parameterValue | <code>string</code> | 


* * *

<a name="Route+_cleanOptParamName"></a>

### route._cleanOptParamName(paramName) ⇒ <code>string</code>
Returns optional param name without "?"

**Kind**: instance method of [<code>Route</code>](#Route)  
**Returns**: <code>string</code> - Strict param name without "?"  

| Param | Type | Description |
| --- | --- | --- |
| paramName | <code>string</code> | Full param name with "?" |


* * *

<a name="Route+_isParamOptional"></a>

### route._isParamOptional(paramName) ⇒ <code>boolean</code>
Checks if parameter is optional or not.

**Kind**: instance method of [<code>Route</code>](#Route)  
**Returns**: <code>boolean</code> - return true if is optional, otherwise false  

| Param | Type |
| --- | --- |
| paramName | <code>string</code> | 


* * *

<a name="Route+_getQuery"></a>

### route._getQuery(path) ⇒ <code>Object.&lt;string, ?string&gt;</code>
Extracts and decodes the query parameters from the provided URL path and
query.

**Kind**: instance method of [<code>Route</code>](#Route)  
**Returns**: <code>Object.&lt;string, ?string&gt;</code> - Parsed query parameters.  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>string</code> | The URL path, including the optional query string        (if any). |


* * *

<a name="Route+_getTrimmedPath"></a>

### route._getTrimmedPath(path) ⇒ <code>string</code>
Trims the trailing forward slash from the provided URL path.

**Kind**: instance method of [<code>Route</code>](#Route)  
**Returns**: <code>string</code> - Trimmed path.  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>string</code> | The path to trim. |


* * *

<a name="Route+_getParameterNames"></a>

### route._getParameterNames(pathExpression) ⇒ <code>Array.&lt;string&gt;</code>
Extracts the parameter names from the provided path expression.

**Kind**: instance method of [<code>Route</code>](#Route)  
**Returns**: <code>Array.&lt;string&gt;</code> - The names of the parameters defined in the provided
        path expression.  

| Param | Type | Description |
| --- | --- | --- |
| pathExpression | <code>string</code> | The path expression. |


* * *

<a name="CONTROL_CHARACTERS_REGEXP"></a>

## CONTROL_CHARACTERS_REGEXP : <code>RegExp</code>
Regular expression matching all control characters used in regular
expressions. The regular expression is used to match these characters in
path expressions and replace them appropriately so the path expression can
be compiled to a regular expression.

**Kind**: global constant  

* * *

<a name="LOOSE_SLASHES_REGEXP"></a>

## LOOSE_SLASHES_REGEXP : <code>RegExp</code>
Regular expression used to match and remove the starting and trailing
forward slashes from a path expression or a URL path.

**Kind**: global constant  

* * *

<a name="PARAMS_REGEXP_UNIVERSAL"></a>

## PARAMS_REGEXP_UNIVERSAL : <code>RegExp</code>
Regular expression used to match the parameter names from a path expression.

**Kind**: global constant  

* * *

<a name="PARAMS_REGEXP_REQUIRED"></a>

## PARAMS_REGEXP_REQUIRED : <code>RegExp</code>
Regular expression used to match the required parameter names from a path expression.

**Kind**: global constant  

* * *

<a name="PARAMS_REGEXP_CORE_NAME"></a>

## PARAMS_REGEXP_CORE_NAME : <code>RegExp</code>
Regular expression used to separate a camelCase parameter name

**Kind**: global constant  

* * *

<a name="PARAMS_START_PATTERN"></a>

## PARAMS_START_PATTERN : <code>String</code>
Regular expression used to match start of parameter names from a path expression.

**Kind**: global constant  

* * *

<a name="PARAMS_END_PATTERN"></a>

## PARAMS_END_PATTERN : <code>String</code>
Regular expression used to match end of parameter names from a path expression.

**Kind**: global constant  

* * *

<a name="PARAMS_NEVER_MATCH_REGEXP"></a>

## PARAMS_NEVER_MATCH_REGEXP : <code>RegExp</code>
Regular expression used to never match the parameter names from a path expression.
It's used for wrong parameters order (optional vs. required ones)

**Kind**: global constant  

* * *

<a name="PARAMS_MAIN_REGEXP"></a>

## PARAMS_MAIN_REGEXP : <code>RegExp</code>
Regular expression used to match all main parameter names from a path expression.

**Kind**: global constant  

* * *

<a name="SUBPARAMS_REQUIRED_REGEXP"></a>

## SUBPARAMS_REQUIRED_REGEXP : <code>Object.&lt;String, RegExp&gt;</code>
Regular expression used to match the required subparameter names from a path expression.
(e.g. for path '/:paramA-:paramB/:nextParam' are subparametres 'paramA' and 'paramB')

**Kind**: global constant  

* * *

<a name="SUBPARAMS_OPT_REGEXP"></a>

## SUBPARAMS_OPT_REGEXP : <code>Object.&lt;String, RegExp&gt;</code>
Regular expression used to match the optional parameter names from a path expression.

**Kind**: global constant  

* * *

<a name="PARAMS_REGEXP_OPT"></a>

## PARAMS_REGEXP_OPT : <code>RegExp</code>
Regular expression used to match the parameter names from a path expression.

**Kind**: global constant  

* * *

