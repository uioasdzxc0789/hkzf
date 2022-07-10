import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/Layout'
const Home = () => import('@/views/Home')
const Info = () => import('@/views/Info')
const Login = () => import('@/views/Login')
const Search = () => import('@/views/Search')
const My = () => import('@/views/My')
const RentHouse = () => import('@/views/RentHouse')
const Rental = () => import('@/views/Rental')
const City = () => import('@/views/City')
const Detail = () => import('@/views/Detail')
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      { path: 'home', component: Home },
      { path: 'search', component: Search },
      { path: 'info', component: Info },
      { path: 'my', component: My, name: 'my' }
    ]
  },
  { path: '/login', component: Login },
  { path: '/renthouse', component: RentHouse, name: 'renthouse' },
  { path: '/rental', component: Rental, name: 'rental' },
  { path: '/city', component: City, name: 'city' },
  { path: '/detail', component: Detail, name: 'detail' }
]

const router = new VueRouter({
  routes
})

export default router
