import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import CategoryEdit from "@/views/CategoryEdit";
import CreateCategory from "@/views/CreateCategory";
import Categories from "@/views/Categories";
import Login from "@/views/Login";
import ArticleCreate from "@/views/ArticleCreate";
import Register from "@/views/Register";
import ArticleEdit from "@/views/ArticleEdit";
import auth from '@/middleware/auth'
import guest from '@/middleware/guest'

const routes = [
  {
    path: '/',
    name: 'home',
    beforeEnter: auth,
    meta:{layout:'main'},
    component: Home
  },
  {
    path: '/article/create',
    name: 'article.create',
    beforeEnter: auth,
    meta:{layout:'main'},
    component: ArticleCreate
  },
  {
    path: '/article/:id',
    name: 'article.edit',
    beforeEnter: auth,
    meta:{layout:'main'},
    component:ArticleEdit
  },
  {
    path: '/categories',
    name: 'category.list',
    beforeEnter: auth,
    meta:{layout:'main'},
    component: Categories
  },
  {
    path: '/category/create',
    name: 'category.create',
    beforeEnter: auth,
    meta:{layout:'main'},
    component: CreateCategory
  },
  {
    path: '/category/:id',
    name: 'category.edit',
    beforeEnter: auth,
    meta:{layout:'main'},
    component:CategoryEdit
  },
  {
    path: '/login',
    name: 'login',
    beforeEnter: guest,
    meta:{layout:'auth'},
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    beforeEnter: guest,
    //meta:{layout:'main'},
    component: Register
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
