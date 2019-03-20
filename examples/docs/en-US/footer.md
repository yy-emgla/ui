## Footer

### Basic usage

```html
<ui-footer fixed></ui-footer>
<ui-footer :links="link"></ui-footer>
<script>
data () {
  return {
    link: [{
      name: 'footer link',
      to: '/link',
    }]
  }
}
</script>
```
### Attribute

| Attribute      | Description    | Type      | Accepted Values       | Default   |
|---------- |-------- |---------- |------------ |-------- |
|fixed |Whether footer is fixed|Boolean |——|false |
|links |footer links|Array |——|—— |
|logo|Show jf's logo,if is's a boolean. When className is a String, display other icon.|Boolean, String |—— |—— |
