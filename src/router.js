import vueRouter from 'vue-router'
import User from './components/User'
import nombreGasto from './components/UserBalance'
import App from './App'

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
                path: '/user/:username',
                name: "user",
                component: User
            },
            {
                path: '/DataOut/:nombreGasto',
                name: "nombreGasto",
                component: nombreGasto
            },
        ]
    })

export default router
