import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Detail from "./views/Detail.vue";

Vue.use(VueRouter); // Router 가져오기

// Router 정의
// App.vue의 router-view 태그 쪽으로 이동한다.
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
            path:"/detail",
            component: Detail
        }
    ]
});

export default router;

