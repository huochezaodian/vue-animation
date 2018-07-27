import Vue from 'vue'
import Animation from '@/components/Animation'

describe('Animation.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Animation)
    const vm = new Constructor().$mount()
    expect(vm.$el.textContent)
      .toMatch(/animation/)
  })
})
