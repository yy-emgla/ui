## List

### Basic usage
* The cell components are used together in the group component (list) to get the label style provided by the group component (list) and the style function such as cell spacing.
```html
    <ui-group>
      <ui-cell title="My Account" value="Protected" ></ui-cell>
      <ui-cell title="Money"></ui-cell>
      <ui-cell title="Withdraw" disabled is-link></ui-cell>
    </ui-group>
```
### Attribute

| Attribute      | Description    | Type      | Accepted Values       | Default   |
|---------- |-------- |---------- |------------ |-------- |
|title | the title of list group |String(html) |————|———— |
|titleColor | the color code of title |String |————|———— |
|labelWidth | the width of label |String |————|———— |
|labelMarginRight | the right distance of the label |String |————|———— |
|gutter | spacing between cell（marginTop） |String, Number |————|———— |

### Slot

| Name      | Description    |
|---------- |-------- |
|- | default display content |
|after-title | title rear content slot |

### cell basic usage

*See the corresponding [cell component](/#/zh-CN/cell "Title")
