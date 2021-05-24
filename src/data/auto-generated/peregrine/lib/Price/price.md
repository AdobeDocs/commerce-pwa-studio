@deprecated - replaced by to @magento/venia-ui/lib/components/Price

The **Price** component is used anywhere a price needs to be displayed.

Formatting of prices and currency symbol selection is handled entirely by the ECMAScript Internationalization API available in modern browsers.

A [polyfill][] is required for any JavaScript runtime that does not have [Intl.NumberFormat.prototype.formatToParts][].

[polyfill]: https://www.npmjs.com/package/intl
[Intl.NumberFormat.prototype.formatToParts]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat/formatToParts

[View Source](https://github.com/magento/pwa-studio/blob/develop/packages/peregrine/lib/Price/price.js)

## Props

 |Name|Required|Default|Description|
|---|:---:|:---:|---|
| `classes` | `-` | `{}` | Class names to use when styling this component|
| `value` | <i class="material-icons green">check_box</i> | `-` | The numeric price|
| `currencyCode` | <i class="material-icons green">check_box</i> | `-` | A string with any of the currency code supported by Intl.NumberFormat|
{:style="table-layout:auto"}

