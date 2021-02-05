import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/modules/Home/containers/index'

// Posts
import PostArchive from "@posts/containers/Archive"
import PostSingle from "@posts/containers/Single"
import Posts from '@posts/containers/index'

Vue.use(VueRouter)

export default new VueRouter({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      exact: true,
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
        {
          path: "/",
          name: "PostArchive",
          component: PostArchive,
        },
      ]
    }
  ]
})
