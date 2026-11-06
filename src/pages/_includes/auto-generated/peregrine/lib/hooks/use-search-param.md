
A [React Hook](https://legacy.reactjs.org/docs/hooks-intro.html) that gets
a search parameter from a URL and calls a provided setter function with
the corresponding value.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| props | `Object` | An object containing the parameter and setter function. |
| props.parameter | `String` | The parameter to search for |
| props.setValue | `function` | A setter function that is passed the parameter value found in the URL |

**Source Code**: [pwa-studio/packages/peregrine/lib/hooks/useSearchParam.js](https://github.com/magento/pwa-studio/blob/develop/packages/peregrine/lib/hooks/useSearchParam.js)
