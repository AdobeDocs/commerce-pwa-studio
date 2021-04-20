## Functions

<dl>
<dt><a href="#upperCaseString">upperCaseString(string)</a> ⇒ <inlineCode>string</inlineCode></dt>
<dd><p>Upper case the first letter of a string</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#props">props</a></dt>
<dd><p>Props for <a href="#Tabs">Tabs</a></p>
</dd>
</dl>

<a name="Tabs"></a>

## Tabs ⇒ `React.Element`

Page Builder Tabs component.

This component is part of the Page Builder / PWA integration. It can be consumed without Page Builder.

**Kind**: global functional component  
**Returns**: `React.Element` - A React component that displays a set of Tabs.

| Param | Type              | Description           |
| ----- | ----------------- | --------------------- |
| props | [`props`](#props) | React component props |

<a name="upperCaseString"></a>

## upperCaseString(string) ⇒ `string`

Upper case the first letter of a string

**Kind**: global function

| Param  | Type     |
| ------ | -------- |
| string | `string` |

<a name="props"></a>

## props

Props for [Tabs](#Tabs)

**Kind**: global typedef  
**Properties**

| Name                            | Type     | Description                                                |
| ------------------------------- | -------- | ---------------------------------------------------------- |
| classes                         | `Object` | An object containing the class names for the Tabs          |
| classes.header                  | `String` | Class names for the tab header                             |
| classes.panelSelected           | `String` | Class names for the selected tab panel                     |
| classes.panel                   | `String` | Class names for the tab panel                              |
| classes.contentLeft             | `String` | Class names for the tab content                            |
| classes.contentCenter           | `String` | Class names for the tab content                            |
| classes.contentRight            | `String` | Class names for the tab content                            |
| classes.navigationLeft          | `String` | Class names for the tab navigation                         |
| classes.navigationCenter        | `String` | Class names for the tab navigation                         |
| classes.navigationRight         | `String` | Class names for the tab navigation                         |
| classes.navigationGradientLeft  | `String` | Class names for the tab navigation gradient when scrolling |
| classes.navigationGradientRight | `String` | Class names for the tab navigation gradient when scrolling |
| classes.navigationGradientBoth  | `String` | Class names for the tab navigation gradient when scrolling |
| classes.disabled                | `String` | Class names for the disabled tabs                          |
| classes.selected                | `String` | Class names for the selected tab                           |
| classes.item                    | `String` | Class names for the tab item                               |
| tabNavigationAlignment          | `String` | Navigation alignment for tabs                              |
| minHeight                       | `String` | Minimum height of the tabs                                 |
| defaultIndex                    | `Number` | Index of the tab to display by default                     |
| headers                         | `Array`  | Array of tab headers                                       |
| textAlign                       | `String` | Alignment of the Tabs within the parent container          |
| border                          | `String` | CSS border property                                        |
| borderColor                     | `String` | CSS border color property                                  |
| borderWidth                     | `String` | CSS border width property                                  |
| borderRadius                    | `String` | CSS border radius property                                 |
| marginTop                       | `String` | CSS margin top property                                    |
| marginRight                     | `String` | CSS margin right property                                  |
| marginBottom                    | `String` | CSS margin bottom property                                 |
| marginLeft                      | `String` | CSS margin left property                                   |
| paddingTop                      | `String` | CSS padding top property                                   |
| paddingRight                    | `String` | CSS padding right property                                 |
| paddingBottom                   | `String` | CSS padding bottom property                                |
| paddingLeft                     | `String` | CSS padding left property                                  |
| cssClasses                      | `Array`  | List of CSS classes to be applied to the component         |

For implementation details [**View Source**](https://github.com/magento/pwa-studio/blob/develop/packages/pagebuilder/lib/ContentTypes/Tabs/tabs.js).
