## Cell

### Basic usage
* The cell components are used together in the group component (list) to get the label style provided by the group component (list) and the style function such as cell spacing.
```html
 <ui-group>
   <ui-cell title="Money"></ui-cell>
   <ui-cell title="flex-start"
     align-items="flex-start"
     value="A large portion of the content,A large portion of the content">
   </ui-cell>
   <ui-cell title="General" is-link>
     <img slot="icon" width="20" src="iconUrl">
   </ui-cell>
   <ui-cell :border-intent="false" title="testTitle" is-link class="testClass"></ui-cell>
 </ui-group>
```
### Attribute

| Attribute  | Description  | Type  | Accepted Values   | Default   |
|---------- |-------- |---------- |------------ |-------- |
|title | title（label） |String, Number |————|———— |
|value | content |String, Number, Array |————|———— |
|isLink | whether or not to link |Boolean |————|———— |
|isLoading | whether or not it is loading |Boolean |————|———— |
|inlineDesc | inline description |Boolean |————|———— |
|primary | the main content can be set up to title or later |String |title，content|title |
|link | link jump address,when object type, it is router object. |String, Object |————|———— |
|valueAlign | content display location, when set to left, primary set title no effect, set content will be effective. |String |left|———— |
|borderIntent | whether the location is the most left |Boolean |————|true |
|disabled | disable the button |Boolean |————|———— |
|arrowDirection | arrow pointing |String |up, down|true |
|alignItems | cell single line alignItems style |String |flex-start, flex-end, center, baseline, stretch|———— |


### Slot

| Name      | Description    |
|---------- |-------- |
|- | default display content, if no value property is displayed |
|icon | title（label）front icon） |
|title | title slot, if no title property is displayed |
|after-title | title rear slot, displayed after title or title slot. |
|inline-desc | inline-desc slot, if no inlineDesc attribute is displayed. |
|value | value slots, the same as the default slots |
|child | child slot, located at the bottom of a single line |
