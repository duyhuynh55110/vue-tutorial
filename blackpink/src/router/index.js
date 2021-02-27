import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/modules/Home/containers'

// Posts
import PostsArchive from "@posts/containers/Archive.vue"
import PostSingle from "@posts/containers/Single"
import Posts from '@posts/containers'

// Videos
import VideosArchive from "@videos/containers/Archive.vue"
import Videos from '@videos/containers'

// Discussions
import DiscussionsArchive from "@discussions/containers/Archive.vue"
import Discussions from "@discussions/containers"

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
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
                    name: "PostsArchive",
                    component: PostsArchive,
                },
            ]
        },
        {
            path: "/videos",
            name: 'Videos',
            component: Videos,
            children: [
                // {
                //   path: ":id",
                //   name: "PostSingle",
                //   component: PostSingle,
                // },
                {
                    path: "/",
                    name: "VideosArchive",
                    component: VideosArchive,
                },
            ]
        },
        {
            path: "/discussions",
            name: 'Discussions',
            component: Discussions,
            children: [
                // {
                //   path: ":id",
                //   name: "PostSingle",
                //   component: PostSingle,
                // },
                {
                    path: "/",
                    name: "DiscussionsArchive",
                    component: DiscussionsArchive,
                },
            ]
        },
    ]
})
