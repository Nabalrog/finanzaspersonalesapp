import vueRouter from 'vue-router'
import User from './components/User'
import UserBalance from './components/UserBalance'
import App from './App'
import Gastos from './components/Gastos'

const router = new vueRouter({
        mode: 'history',
        base: __dirname,
        routes: [
            {
                path: '/',
                name: "root",
                component: App
            },
            {
                path: '/user/:user',
                name: "user",
                component: User
            },
            {
                path: '/DataOut/:nombreGasto',
                name: "nombreGasto",
                component: UserBalance
            },
            {
                path: '/DataIn/',
                name: "Gastos",
                component: Gastos
            },
        ]
    })

export default router
