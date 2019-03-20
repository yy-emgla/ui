## Toast

### Basic usage

```html
<ui-toast :show.sync="false">Success</ui-toast>
<ui-toast :show.sync=false type="warn">Warning</ui-toast>
<ui-toast :show.sync=false type="cancel">Cancel</ui-toast>
<ui-toast :show.sync=false type="loading" mask :time="0">Loading...</ui-toast>
```
### Attribute

|Attribute      |Description    | Type      | Accepted Values      | Default   |
|---------- |-------- |---------- |------------ |-------- |
|loading | Show animation while loading |Boolean |——|—— |
|show | Whether toast is shown |Boolean |——|—— |
|mask | background of the mask|Boolean |——|—— |
|time | time of duration of showing |Number |Toast won't be automatically closed if time is 0.|2000ms |
|type | type of toast |String |success, text, loading, warn, cancel|—— |
|text | text content |String |——|—— |
|position | location of the toast |String |top,middle,bottom|—— |
|transition | animation's name |String |——|ui-fade, ui-slide-from-top(when the position is top), ui-slide-from-bottom(when the position is bottom)|

### Slot

| Name      | Description    |
|---------- |-------- |
|- | Custom Content |