import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from './../stores';

import Home from './../pages/Home.vue'

const routes = [
    { path: '/', name: 'Home', component: Home },
];

const router = createRouter(
    {
        history: createWebHistory(),
        routes
    }
)

export default router 