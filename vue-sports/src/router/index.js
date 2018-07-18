import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/components/layout.vue'
import Animation from '@/components/animation.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'layout',
      component: layout,
      children: [
        {
          path: 'animation',
          name: 'animation',
          component: Animation
        }
      ]
    }
  ]
})
