<a name="useSearchParam"></a>

## useSearchParam(props)
A [React Hook](https://reactjs.org/docs/hooks-intro.html) that gets
a search parameter from a URL and calls a provided setter function with
the corresponding value.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>Object</code> | An object containing the parameter and setter function. |
| props.parameter | <code>String</code> | The parameter to search for |
| props.setValue | <code>function</code> | A setter function that is passed the parameter value found in the URL |



For implementation details [**View Source**](https://github.com/magento/pwa-studio/blob/develop/packages/peregrine/lib/hooks/useSearchParam.js).