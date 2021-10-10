
* [Buildpack/BuildBus](#module_Buildpack/BuildBus)
    * [~Target](#module_Buildpack/BuildBus..Target) ⇐ `Trackable`
        * [.call([...args])](#module_Buildpack/BuildBus..Target+call) ⇒ `\*`
        * [.callAsync(...args)](#module_Buildpack/BuildBus..Target+callAsync) ⇒ `undefined`
        * [.intercept(options)](#module_Buildpack/BuildBus..Target+intercept) ⇒ `void`
        * [.promise([...args])](#module_Buildpack/BuildBus..Target+promise) ⇒ `Promise`
        * [.tap([name], interceptor)](#module_Buildpack/BuildBus..Target+tap) ⇒ `undefined`
        * [.tapAsync(name, interceptor)](#module_Buildpack/BuildBus..Target+tapAsync) ⇒ `undefined`
        * [.tapPromise(name, interceptor)](#module_Buildpack/BuildBus..Target+tapPromise) ⇒ `undefined`
        * [.toJSON()](#module_Buildpack/BuildBus..Target+toJSON) ⇒ `object`


Represents an edge on the graph, or a "route" between stops, created between
two extensions when one of them references the target(s) of another. When
extension Foo requests targets of extension Bar, the BuildBus provides an
Target instead of the literal Tapable instance. This enables
better logging, error checking, and validation.

*inner* *class* of [`Buildpack/BuildBus`](#module_Buildpack/BuildBus)
**Extends**: `Trackable`  
**See**: [Tapable docs](https://github.com/webpack/tapable)  

* [~Target](#module_Buildpack/BuildBus..Target) ⇐ `Trackable`
    * [.call([...args])](#module_Buildpack/BuildBus..Target+call) ⇒ `\*`
    * [.callAsync(...args)](#module_Buildpack/BuildBus..Target+callAsync) ⇒ `undefined`
    * [.intercept(options)](#module_Buildpack/BuildBus..Target+intercept) ⇒ `void`
    * [.promise([...args])](#module_Buildpack/BuildBus..Target+promise) ⇒ `Promise`
    * [.tap([name], interceptor)](#module_Buildpack/BuildBus..Target+tap) ⇒ `undefined`
    * [.tapAsync(name, interceptor)](#module_Buildpack/BuildBus..Target+tapAsync) ⇒ `undefined`
    * [.tapPromise(name, interceptor)](#module_Buildpack/BuildBus..Target+tapPromise) ⇒ `undefined`
    * [.toJSON()](#module_Buildpack/BuildBus..Target+toJSON) ⇒ `object`


Run `.call(...args)` on the underlying Tapable Hook.
Calls interceptors synchronously and in subscription order with the
provided arguments. Returns the final value if it's a Waterfall target,
or the value returned by the first interceptor that returns a value if
it's a Bail target.

*instance* *method* of [`Target`](#module_Buildpack/BuildBus..Target)
`\*` — Returns whatever the underlying Tapable Hook returns.

Run `.callAsync(...args)` on the underlying Tapable Hook. Calls
interceptors asynchronously with the provided arguments. Depending on
the Target type, calls interceptors in parallel or in subscription
order. Last argument must be a callback. It will be invoked when all
interceptors have run, or when the first returning interceptor has run
if it's a Bail target.

*instance* *method* of [`Target`](#module_Buildpack/BuildBus..Target)
`undefined` — `callAsync` returns nothing, instead passing any output of the interceptors as the first argument of the callback.

Run `.intercept(options)` on the underlying Tapable Hook.
Can register meta-interceptors for other activity on this target.
Use only for logging and debugging.

*instance* *method* of [`Target`](#module_Buildpack/BuildBus..Target)

Run `.promise(...args)` on the underlying Tapable hook. Calls
interceptors asynchronously with the provided arguments. Depending on
the Target type, calls interceptors in parallel or in series. Returns a
promise. It will be fulfilled when all interceptors have run, or when
the first returning interceptor has run if it's a Bail target.

*instance* *method* of [`Target`](#module_Buildpack/BuildBus..Target)
`Promise` — A Promise for any output of the target's interceptors.

Adds a synchronous interceptor to the target.
 If you just supply a function, it will use your extension's package name as the name of the tap.

*instance* *method* of [`Target`](#module_Buildpack/BuildBus..Target)

Adds a callback-style asynchronous interceptor to the Target. The interceptor will receive a callback function as its last argument. Only supported on Async targets.

*instance* *method* of [`Target`](#module_Buildpack/BuildBus..Target)

Adds a Promise-returning async interceptor to the Target. The interceptor may return a Promise, which the Target will resolve. Only supported on Async targets.

*instance* *method* of [`Target`](#module_Buildpack/BuildBus..Target)

Provides the JSON object representation of this target

*instance* *method* of [`Target`](#module_Buildpack/BuildBus..Target)
`object` — JSON object


[pwa-studio/packages/pwa-buildpack/lib/BuildBus/Target.js](https://github.com/magento/pwa-studio/blob/develop/packages/pwa-buildpack/lib/BuildBus/Target.js)