import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import Exam1View from '../views/Exam1View.vue'
// import Exam2View from '../views/Exam2View.vue'
// import Exam3View from '../views/Exam3View.vue'
// import Exam4View from '../views/Exam4View.vue'
import ProductList1View from '../views/ProductList1View.vue'
import ProductView from '../views/ProductView.vue'
import ProductList2View from '../views/ProductList2View.vue'

const routes = [
{
path: '/',
name: 'home',
component: HomeView
},
{
path: '/exam1',
name: 'exam1',
component: ProductList1View
},
{
path: '/exam2',
name: 'exam2',
component: ProductList2View
},
{
path: '/product',
name: 'product',
component: ProductView
}
]
const router = createRouter({
history: createWebHistory(process.env.BASE_URL),
routes
})
export default router