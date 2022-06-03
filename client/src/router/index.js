import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// немного про мету - это название, по которому в App понимаем что подгружать 
const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {layout: 'main'},
    component: () => import( '../views/Home.vue')
  },
  {
    path: '/StructureCompany',
    name: 'StructureCompany',
    meta: {layout: 'main'},
    component: () => import( '../views/StructureCompany.vue')
  },
  {
    path: '/VectorCompany',
    name: 'VectorCompany',
    meta: {layout: 'main'},
    component: () => import( '../views/VectorCompany.vue')
  },
  {
    path: '/Vacancy',
    name: 'Vacancy',
    meta: {layout: 'main'},
    component: () => import( '../views/Vacancy.vue')
  },
  {
    path: '/SocialProgramm',
    name: 'SocialProgramm',
    meta: {layout: 'main'},
    component: () => import( '../views/SocialProgramm.vue')
  },
  {
    path: '/Login',
    name: 'Login',
    meta: {layout: 'empty'}, 
    component: () => import( '../views/Login.vue')
  },
  {
    path: '/News/:id',
    name: 'News',
    meta: {layout: 'main'}, 
    component: () => import( '../views/News.vue')
  },

  {
    path: '/HomePageHR',
    name: 'HomePageHR',
    meta: {layout: 'employee'}, 
    component: () => import( '../views/HomePageHR.vue')
  },

  {
    path: '/VacanciesHR',
    name: 'VacanciesHR',
    meta: {layout: 'employee'}, 
    component: () => import( '../views/VacanciesHR.vue')
  },

  {
    path: '/ResumeHR/:id',
    name: 'ResumeHR',
    meta: {layout: 'employee'}, 
    component: () => import( '../views/ResumeHR.vue')
  },

  {
    path: '/VacancyHR/:id',
    name: 'VacancyHR',
    meta: {layout: 'employee'}, 
    component: () => import( '../views/VacancyHR.vue')
  },

  {
    path: '/AddVacancyHR',
    name: 'AddVacancyHR',
    meta: {layout: 'employee'}, 
    component: () => import( '../views/AddVacancyHR.vue')
  },

  {
    path: '/EditVacancyHR/:id',
    name: 'EditVacancyHR',
    meta: {layout: 'employee'}, 
    component: () => import( '../views/EditVacancyHR.vue')
  },

  {
    path: '/HomePageM',
    name: 'HomePageM',
    meta: {layout: 'moderator'}, 
    component: () => import( '../views/HomePageM.vue')
  },

  {
    path: '/NewsM/:id',
    name: 'NewsM',
    meta: {layout: 'moderator'}, 
    component: () => import( '../views/NewsM.vue')
  },


  {
    path: '/AddNewsM',
    name: 'AddNewsM',
    meta: {layout: 'moderator'}, 
    component: () => import( '../views/AddNewsM.vue')
  },

  {
    path: '/EditNewsM/:id',
    name: 'EditNewsM',
    meta: {layout: 'moderator'}, 
    component: () => import( '../views/EditNewsM.vue')
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    // ожидаемый возврат, чтобы прокрутить до какой позиции
    return { x: 0, y: 0 }
  }

})

export default router