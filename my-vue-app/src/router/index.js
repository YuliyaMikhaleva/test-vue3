import { createRouter, createWebHistory } from 'vue-router';
import UiPage from "../pages/UiPage/UiPage.vue"
import MainPage from "../pages/MainPage/MainPage.vue"

const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPage,
  },
  {
    path: '/ui',
    name: 'UiPage',
    component: UiPage,
  },
];
// const router = new VueRouter({
//   routes
// })
const router = createRouter({
  history: createWebHistory(),
  routes,
});
//
// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     if (!store.getters.isUserAuth) {
//       next('/');
//       return;
//     }
//   }
//   if (to.matched.some(record => record.meta.requiresAuth === false)) {
//     if (store.getters.isUserAuth) {
//       next('/');
//       return;
//     }
//   }
//   next();
// });
//
export default router;
