## Flex

### Basic usage

```html
<ui-flex></ui-flex>
```
### Attribute

| Attribute      | Description    | Type      | Accepted Values       | Default   |
|---------- |-------- |---------- |------------ |-------- |
|gutter |grid spacing |Number |—— |0 |
|orient |layout direction |String |vertical, horizontal |horizental |
|justify |horizontal alignment |String |flex-start, flex-end, center, space-between, space-around |flex-start |
|align |vertical alignment |String |flex-start, flex-end, center,  baseline, stretch |stretch (stretch to fill the container) |
|wrap |wrap mode |String |nowrap, wrap, wrap-reverse |nowrap |
|direction |Defining the direction flex items are placed in the flex container |String |row, row-reverse, column, column-reverse |row |

## ui-flex-item
### ui-flex-item basic usage (Only used in ui-flex)

```html
<ui-flex>
  <ui-flex-item>item1</ui-flex-item>
  <ui-flex-item>item2</ui-flex-item>
</ui-flex>
```

### Attribute

| Attribute      | Description    | Type      | Accepted Values       | Default   |
|---------- |-------- |---------- |------------ |-------- |
|span | Defines the default size of an element before the remaining space is distributed.|String, Number |——|—— |
|order |The order in which they appear in the flex container. |String, Number| ——|—— |
