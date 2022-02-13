import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import CategoryEdit from "../views/CategoryEdit";
import CreateCategory from "../views/CreateCategory";
import Categories from "../views/Categories";

const routes = [
  {
    path: '/',
    name: 'Home',
    meta:{layout:'main'},
    component: Home
  },
  {
    path: '/categories',
    name: 'category.list',
    meta:{layout:'main'},
    component: Categories
  },
  {
    path: '/category/create',
    name: 'category.create',
    meta:{layout:'main'},
    component: CreateCategory
  },
  {
    path: '/category/:id',
    name: 'category.edit',
    meta:{layout:'main'},
    component:CategoryEdit
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
