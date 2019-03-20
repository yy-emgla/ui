## Button

### Basic usage

```html
<ui-button type="primary">type primary</ui-button>
<ui-button type="warn">type warn</ui-button>
```
### Attribute

| Attribute      | Description    | Type      | Accepted Values       | Default   |
|---------- |-------- |---------- |------------ |-------- |
|type | button component type |String |primary, default, warn|default |
|disabled | clickable |Boolean |————|———— |
|mini | determine whether it's a mini button |Boolean |————|———— |
|plain | determine whether it's a plain button |Boolean |————|———— |
|text | Button content text |String |————|———— |
|actionType | button type inside the component |String |————|button |
|loading | determine whether it's a plain button |Boolean |————|———— |
|gradients | gradient style array |Array（length of 2） |————|———— |

### Slot

| Name      | Description    |
|---------- |-------- |
|- | default display content (if no text is displayed) |
