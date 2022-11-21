import { createRouter, createWebHashHistory } from 'vue-router';
import App from './App.vue';

const routes = [
    {
        path: '/',
        name: 'app',
        component: App,
        children: [
            {
                path: '',
                name: 'home',
                component: () => import('./pages/HomePage.vue')
            },
            {
                path: '/list',
                name: 'list',
                component: () => import('./pages/TournamentsList.vue'),
            },
            {
                path: '/detail',
                name: 'detail',
                component: () => import('./pages/TournamentDetail.vue'),
            },
            {
                path: '/player',
                name: 'player',
                component: () => import('./pages/PlayerPage.vue'),
            },
            {
                path: '/setting',
                name: 'setting',
                component: () => import('./pages/SettingPage.vue'),
            },
        ]
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
