import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Exam1View from '../views/Exam1View.vue'
import Exam2View from '../views/Exam2View.vue'
import Exam3View from '../views/Exam3View.vue'
import Exam4View from '../views/Exam4View.vue'
import TodoListView from '../views/TodoListView.vue'
import TodoView from '../views/TodoView.vue'

const routes = [
{
path: '/',
name: 'home',
component: HomeView
},
{
path: '/exam1',
name: 'exam1',
component: Exam1View
},
{
path: '/exam2',
name: 'exam2',
component: Exam2View
},
{
path: '/exam3',
name: 'exam3',
component: Exam3View
},
{
path: '/exam4',
name: 'exam4',
component: Exam4View
},
{
path: '/todolist',
name: 'todolist',
component: TodoListView
},
{
path: '/todo',
name: 'todo',
component: TodoView
}
]
const router = createRouter({
history: createWebHistory(process.env.BASE_URL),
routes
})
export default router