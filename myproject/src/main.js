import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import router from "./router/router";
import VueResource from "vue-resource";


Vue.use(VueRouter);
Vue.use(VueResource);
Vue.config.productionTip = false
new Vue({
    router:router,
    render:h=>h(App)
}).$mount('#app');



