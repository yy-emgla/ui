<template>
  <div class="selectI-inline-view">
    <ui-group title="default">
      <ui-cell>
        <span slot="title">{{value1}}</span>
      <ui-select-inline slot="value" :isText=true
                        v-model="value1" :options="radio001" :max=1></ui-select-inline>
      </ui-cell>
        <ui-checkbox title="Options Support"
                     required
                     :options="commonList"
                     v-model="radio001"
                     @on-change="change"></ui-checkbox>
    </ui-group>
      <ui-group title="自定义item">
        <ui-cell>
          <span slot="title">{{value2}}</span>
          <ui-select-inline slot="value" v-model="value2" :options="radio001" :max=2>
            <template slot-scope="scope">
              <p class="select-item"
                 v-bind:class="{'item-checked': scope.item.checked}">
                {{scope.item.val}}</p>
              {{scope.item.index}}
            </template>
          </ui-select-inline>
        </ui-cell>
    </ui-group>
  </div>
</template>
<script>
export default {
  data() {
    return {
      radio001: ['China', 'Japan'],
      bText: '搞不懂',
      value1: [],
      value2: [],
      commonList: ['China', 'Japan', 'America'],
      checkbox001: [],
    };
  },
  methods: {
    change(value, label) {
      console.log('change:', value, label);
    },
  },
};
</script>
<style lang="postcss">
.selectI-inline-view{
  .select-item{
    color: #ccc;
    border: 1px solid #ccc;
    border-radius: 50%;
    padding: 2px 4px;
  }
  .item-checked{
    border: 1px solid #0BB20C;
    background: #0BB20C;
    color: white;
  }
}
</style>
