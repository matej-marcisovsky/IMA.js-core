## Constants

<dl>
<dt><a href="#BEFORE_CHANGE_STATE">BEFORE_CHANGE_STATE</a> : <code>string</code></dt>
<dd><p>PateStateManager fire event <code>$IMA.$Dispatcher.beforeChangeState</code> before
state is patched. Event&#39;s data contain
<code>{ oldState: Object&lt;string, <em>&gt;, newState: Object&lt;string, </em>&gt;,
pathState:  Object&lt;string, *&gt; </code>}.</p>
</dd>
<dt><a href="#AFTER_CHANGE_STATE">AFTER_CHANGE_STATE</a> : <code>string</code></dt>
<dd><p>Router fire event <code>$IMA.$Dispatcher.afterChangeState</code> after state
is patched. Event&#39;s data contain <code>{newState: Object&lt;string, *&gt;</code>.</p>
</dd>
</dl>

<a name="Events"></a>

## Events : <code>enum</code>
Events constants, which is firing to app.

**Kind**: global enum  

* * *

<a name="BEFORE_CHANGE_STATE"></a>

## BEFORE_CHANGE_STATE : <code>string</code>
PateStateManager fire event <code>$IMA.$Dispatcher.beforeChangeState</code> before
state is patched. Event's data contain
<code>{ oldState: Object<string, *>, newState: Object<string, *>,
pathState:  Object<string, *> </code>}.

**Kind**: global constant  

* * *

<a name="AFTER_CHANGE_STATE"></a>

## AFTER_CHANGE_STATE : <code>string</code>
Router fire event <code>$IMA.$Dispatcher.afterChangeState</code> after state
is patched. Event's data contain <code>{newState: Object<string, *></code>.

**Kind**: global constant  

* * *

