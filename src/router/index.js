import { createRouter, createWebHistory } from "vue-router";
import About from '../components/About.vue'
import Home from '../views/Home.vue'
import QuizShow from '../components/Quiz-Show.vue'
import CreatedBy from '../components/Created-By.vue'
import NotFound from '../views/Not-Found.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/home',
            redirect: '/'
        },
        {
            path: '/about',
            name: 'About',
            component: About
        },
        {
            path: '/quiz/:id',
            name: 'Quiz',
            component: QuizShow,
            children: [
                {
                    path: 'creator',
                    component: CreatedBy
                }
            ]
        },
        {
            path: '/:catchall(.*)*',
            name: "Not Found",
            component: NotFound
        }
        
    ]
})

export default router