import {createRouter, createWebHistory} from "vue-router";
import blogList from "../pages/blogList";
import NotFound from "../pages/notFound"
import defaultLayout from "../layouts/default.layout"
import blogDetail from "../pages/blogDetail";

const routes = [
    {
        path: '/:pathMatch(.*)*', name: 'NotFound', components: {
            default: NotFound
        }
    },
    {
        path: '/',
        component: defaultLayout,
        name:'home',
        children: [
            {path: 'articles/:id', component: blogList, name: "articles"},
            {path: 'articleDetail/:article', component: blogDetail, name: "article"}
        ]
    },
]

export default createRouter({
    history: createWebHistory(),
    routes
})

