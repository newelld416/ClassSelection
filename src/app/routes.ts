// src/app/routes.ts
import {Home} from './pages/home';
import {About} from './pages/about';

export default [
    {path: '/', component: Home, name: 'Home'},
    {path: '/about', component: About, name: 'About'}
];
