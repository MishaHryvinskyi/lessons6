import { createRouter, createWebHistory } from "vue-router";

import Main from '../views/MainComponent.vue';
import ProductList from '../views/ProductList.vue';
import Product from '../views/ProductComponent';
import Contact from '../views/ContactComponent.vue';

const routes = [
    {
        path: '/',
        name: Main,
        component: 'Main'
    },
    {
        path: '/products',
        name: ProductList,
        component: 'ProductList'
    },
    {
        path: '/products/:id',
        name: Product,
        component: 'Product',
        props: true
    },
    {
        path: '/contact',
        name: Contact,
        component: 'Contact'
    },
];

const router = createRouter({

    history: createWebHistory(),
    routes: routes
});



export default router;