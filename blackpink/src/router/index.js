import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/modules/Home/index'

// Posts
import PostSingle from "@posts/containers/Single"
import Posts from '@posts/containers/index'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/posts',
      name: 'Posts',
      component: Posts,
      children: [
        {
          path: ":id",
          name: "PostSingle",
          component: PostSingle,
        },
      ]
    }
  ]
})
