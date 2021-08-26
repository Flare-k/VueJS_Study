import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Detail from "./views/Detail.vue";

Vue.use(VueRouter); // Router �??��?���?

// Router ?��?��
// App.vue?�� router-view ?���? 쪽으�? ?��?��?��?��.
const router = new VueRouter({
    mode : "history",
    routes: [
        {
            path:"/", 
            component: Home
        },
        {
            path:"/about", 
            component: About
        },
        {
            path:"/user/me",
            component: Detail
        }
    ]
});

export default router;

