import Vue from 'vue'
import Router from 'vue-router'
import Bienvenu from '@/components/Bienvenu'
import Template from '@/components/Template'
import ListeImage from '@/components/ListeImage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'bienvenu',
      component: Bienvenu
    },
    {
      path: '/list',
      name: 'list',
      component: Template,
      children: [
        {
          path: '',
          name: 'list-content',
          component: ListeImage
        }
      ]
    }
  ]
})
