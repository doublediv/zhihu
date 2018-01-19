import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/page/Home'
import Story from '@/components/page/Story'
import Theme from '@/components/page/Theme'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: '首页',
      component: Home
    },
    {
      path: '/story/:id',
      name: '文章',
      component: Story
    },
    {
      path: '/theme/:id',
      name: '主题',
      component: Theme
    },
    {
      path: "/",
      redirect: "/home"
    }
  ]
})
