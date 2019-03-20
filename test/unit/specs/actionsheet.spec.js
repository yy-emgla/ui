import Vue from 'vue'
import actionsheet from '@/components/actionsheet'

describe('actionsheet', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(actionsheet)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      .toEqual('Welcome to Your Vue.js App')
  })
})
