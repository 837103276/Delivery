import Vue from 'vue'
import VueRouter from "vue-router";

import goods from "../components/goods/goods";
import pinglun from "../components/pinglun/pinglun";
import shangjia from "../components/shangjia/shangjia";

Vue.use(VueRouter);


export default new VueRouter({

    mode:'history',
    routes:[
        {
            path:'/goods',
            name:'goods',
            component:goods
        },
        {
            path: '/pinglun',
            name: 'pinglun',
            component: pinglun
        },
        {
            path: '/shangjia',
            name: 'shangjia',
            component: shangjia
        }
    ]
})
