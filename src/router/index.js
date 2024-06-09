import { createRouter, createWebHistory } from "vue-router";
import Index from "../pages/Index.vue";
import Finish from "../pages/Finish.vue";
import Available from "../pages/Available.vue";


const router = createRouter({
   history: createWebHistory(import.meta.env.BASE_URL),
   routes: [
       {
           path: "/",
           name: "home",
           component: Index,
       },
       {
           path: "/finish",
          name: "finish",
           component: Finish,
       },
       {
           path: "/available",
           name: "available",
           component: Available,
       },
   ],
});


export default router;