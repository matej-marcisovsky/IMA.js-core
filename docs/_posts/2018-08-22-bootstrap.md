## Classes

<dl>
<dt><a href="#Bootstrap">Bootstrap</a></dt>
<dd><p>Application bootstrap used to initialize the environment and the application
itself.</p>
</dd>
</dl>

## Constants

<dl>
<dt><a href="#PRODUCTION_ENVIRONMENT">PRODUCTION_ENVIRONMENT</a> : <code>string</code></dt>
<dd><p>Environment name value in the production environment.</p>
</dd>
</dl>

<a name="Bootstrap"></a>

## Bootstrap
Application bootstrap used to initialize the environment and the application
itself.

**Kind**: global class  

* [Bootstrap](#Bootstrap)
    * [new Bootstrap(oc)](#new_Bootstrap_new)
    * [._oc](#Bootstrap+_oc) : <code>ObjectContainer</code>
    * [._config](#Bootstrap+_config) : <code>Object.&lt;string, \*&gt;</code>
    * [.run(config)](#Bootstrap+run)
    * [._initSettings()](#Bootstrap+_initSettings)
    * [._getEnvironmentSetting()](#Bootstrap+_getEnvironmentSetting) ⇒ <code>Object.&lt;string, \*&gt;</code>
    * [._bindDependencies()](#Bootstrap+_bindDependencies)
    * [._initRoutes()](#Bootstrap+_initRoutes)
    * [._initServices()](#Bootstrap+_initServices)


* * *

<a name="new_Bootstrap_new"></a>

### new Bootstrap(oc)
Initializes the bootstrap.


| Param | Type | Description |
| --- | --- | --- |
| oc | <code>ObjectContainer</code> | The application's object container to use        for managing dependencies. |


* * *

<a name="Bootstrap+_oc"></a>

### bootstrap._oc : <code>ObjectContainer</code>
The object container used to manage dependencies.

**Kind**: instance property of [<code>Bootstrap</code>](#Bootstrap)  

* * *

<a name="Bootstrap+_config"></a>

### bootstrap._config : <code>Object.&lt;string, \*&gt;</code>
Application configuration.

**Kind**: instance property of [<code>Bootstrap</code>](#Bootstrap)  

* * *

<a name="Bootstrap+run"></a>

### bootstrap.run(config)
Initializes the application by running the bootstrap sequence. The
sequence initializes the components of the application in the following
order:
- application settings
- constants, service providers and class dependencies configuration
- services
- UI components
- routing

**Kind**: instance method of [<code>Bootstrap</code>](#Bootstrap)  

| Param | Type | Description |
| --- | --- | --- |
| config | <code>Object.&lt;string, \*&gt;</code> | The application environment        configuration for the current environment. |


* * *

<a name="Bootstrap+_initSettings"></a>

### bootstrap._initSettings()
Initializes the application settings. The method loads the settings for
all environments and then pics the settings for the current environment.

The method also handles using the values in the production environment
as default values for configuration items in other environments.

**Kind**: instance method of [<code>Bootstrap</code>](#Bootstrap)  

* * *

<a name="Bootstrap+_getEnvironmentSetting"></a>

### bootstrap._getEnvironmentSetting() ⇒ <code>Object.&lt;string, \*&gt;</code>
Returns setting for current environment where base values are from production
environment and other environments override base values.

**Kind**: instance method of [<code>Bootstrap</code>](#Bootstrap)  

* * *

<a name="Bootstrap+_bindDependencies"></a>

### bootstrap._bindDependencies()
Binds the constants, service providers and class dependencies to the
object container.

**Kind**: instance method of [<code>Bootstrap</code>](#Bootstrap)  

* * *

<a name="Bootstrap+_initRoutes"></a>

### bootstrap._initRoutes()
Initializes the routes.

**Kind**: instance method of [<code>Bootstrap</code>](#Bootstrap)  

* * *

<a name="Bootstrap+_initServices"></a>

### bootstrap._initServices()
Initializes the basic application services.

**Kind**: instance method of [<code>Bootstrap</code>](#Bootstrap)  

* * *

<a name="PRODUCTION_ENVIRONMENT"></a>

## PRODUCTION_ENVIRONMENT : <code>string</code>
Environment name value in the production environment.

**Kind**: global constant  

* * *

