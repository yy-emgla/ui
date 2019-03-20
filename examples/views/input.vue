<template>
  <div>
    <ui-group title="禁用内置验证及显示成功或者错误样式">
      <ui-input title="禁用验证"
        placeholder="I'm placeholder"
        novalidate
        :icon-type="iconType"
        :show-clear="false"
        @on-blur="onBlur"
                @on-click-error-icon="onClickErrorIcon"
        placeholder-align="right"></ui-input>
    </ui-group>
    <div style="padding:15px;">
      <ui-button mini @click.native="iconType = 'success'" type="primary"> set success</ui-button>
      <ui-button mini @click.native="iconType = 'error'" type="warn"> set error</ui-button>
      <ui-button mini @click.native="iconType = ''" type="default"> set empty</ui-button>
    </div>
    <ui-group title="is-type传入function">
      <ui-input title="必须输入2333" :is-type="be2333"
                @on-click-error-icon="onClickErrorIcon" placeholder="I'm placeholder"></ui-input>
    </ui-group>
    <ui-group title="使用icon代替title">
      <ui-input title="必须输入2333" :is-type="be2333" placeholder="I'm placeholder">
        <img slot="label" src="//dummyimage.com/110" width="24" height="24">
      </ui-input>
    </ui-group>
    <ui-group title="max is alias to maxlength">
      <ui-input title='max=5' :max="5" @on-change="change" v-model="maxValue"></ui-input>
    </ui-group>
    <ui-group title="disabled">
      <ui-input title='value' disabled v-model="disabledValue"></ui-input>
    </ui-group>
    <ui-group title="set type = tel">
      <ui-input title='value' type="tel"></ui-input>
    </ui-group>
    <ui-group title="html title">
      <ui-input label-width="4em"
        :title='`<span style="${style}">hello</span>`'
        placeholder="I'm placeholder"></ui-input>
    </ui-group>
    <div style="padding:15px;">
      <ui-button mini @click.native="style = 'color:red;'" type="warn">set red</ui-button>
      <ui-button mini @click.native="style = 'color:green'" type="primary">set green</ui-button>
      <ui-button mini @click.native="style = 'color:#000'" type="default">set default</ui-button>
    </div>
    <ui-group title="Default">
      <ui-input title="message"
        placeholder="I'm placeholder"></ui-input>
    </ui-group>
    <ui-group title="不显示清除按钮">
      <ui-input title="message"
        required
        placeholder="I'm placeholder"
        :show-clear="false"
        autocapitalize="characters"></ui-input>
    </ui-group>
    <ui-group title="focus事件">
      <ui-input title="focus-handler"
        placeholder="focus me!"
        :show-clear="true"
        @on-focus="onFocus"></ui-input>
    </ui-group>
    <ui-group title="set is-type=china-name">
      <ui-input title="姓名"
        name="username"
        placeholder="请输入姓名"
        is-type="china-name"></ui-input>
    </ui-group>
    <ui-group title="set keyboard=number and is-type=china-mobile">
      <ui-input title="手机号码"
        name="mobile"
        placeholder="请输入手机号码"
        keyboard="number"
        is-type="china-mobile"></ui-input>
    </ui-group>
    <ui-group title="set is-type=email">
      <ui-input title="邮箱" name="email" placeholder="请输入邮箱地址" is-type="email"></ui-input>
    </ui-group>
    <ui-group title="set min=2 and max=5">
      <ui-input title="2-5个字符"
        placeholder=""
        :min="2"
        :max="5"></ui-input>
    </ui-group>
    <ui-group title="确认输入">
      <ui-input title="请输入6位数字"
        type="text"
        placeholder=""
        v-model="password"
        :min="6"
        :max="6"
        @on-change="change"></ui-input>
      <ui-input title="请确认6位数字"
        v-model="password2"
        type="text"
        placeholder=""
        :equal-with="password"></ui-input>
    </ui-group>
    <ui-group title="enter事件">
      <ui-input title="输入完成后回车"
        type="text"
        placeholder=""
        v-model="enterText"
        @on-enter="onEnter"></ui-input>
    </ui-group>
    <ui-group title="验证码" class="weui-cells_form">
      <ui-input title="验证码" class="weui-cell_vcode">
        <img slot="right" class="weui-vcode-img" src="//dummyimage.com//110x45">
      </ui-input>
      <ui-input title="发送验证码" class="weui-vcode">
        <ui-button slot="right" type="primary" mini>发送验证码</ui-button>
      </ui-input>
    </ui-group>
    <ui-group title="check if value is valid when required===true">
      <ui-input title="message"
        placeholder="I'm placeholder"
        ref="input01"
        required></ui-input>
      <ui-cell title="click to get valid value"
        :value="'$valid value:' + valid1"
        @click.native="getValid1"></ui-cell>
    </ui-group>
    <ui-group title="check if value is valid when required===false">
      <ui-input title="message"
        placeholder="I'm placeholder"
        :required="false"
        ref="input02"
        @click.native="getValid2"></ui-input>
      <ui-cell title="click to get valid value"
        :value="'$valid value:' + valid2"
        @click.native="getValid2"></ui-cell>
    </ui-group>
  </div>
</template>
<script>
export default {
  data() {
    return {
      password: '123465',
      password2: '',
      enterText: '',
      valid1: false,
      valid2: false,
      iconType: '',
      be2333: value => ({
        valid: value === '2333',
        msg: 'Must be 2333',
      }),
      style: '',
      disabledValue: 'hello',
      debounceValue: '',
      maxValue: '',
      maskValue: '13545678910',
      maskValue2: '',
    };
  },
  methods: {
    getValid1() {
      this.valid1 = this.$refs.input01.valid;
    },
    getValid2() {
      this.valid2 = this.$refs.input02.valid;
    },
    change() {},
    onBlur() {},
    onFocus() {},
    onEnter() {},
    onClickErrorIcon(error) {
      console.info('error', error);
    },
  },
};

</script>
