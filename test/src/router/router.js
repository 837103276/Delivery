import Vue from 'vue'
import VueRouter from "vue-router";

import goods from "@/components/goods/goods";
import comment from "@/components/comment/comment";
import store from "@/components/store/store";

Vue.use(VueRouter);//使用路由

export default new VueRouter({
    mode:'history',
    routes:[
        {
            path:'/goods',
            name:'goods',
            component:goods
        },
        {
            path: '/comment',
            name: 'comment',
            component: comment
        },
        {
            path:'store',
            name:'store',
            component:store
        }
    ]
})

