import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from './views/Home'
import About from './views/About';
import Admin from "./views/Admin";
import Contacts from "./views/Contacts";
import Delivery from "./views/Delivery";
import Payment from "./views/Payment";
import Catalog from "./views/Catalog";
import ProductPage from "./views/Product";
import Cart from "./views/Cart";
import PageNotFound from "./views/NotFound";
import Login from "./views/Login";
import Checkout from "./views/Checkout";
import Register from "./views/Register";
import Account from "./views/Account";
import AccountHistory from "./views/account/History";
import AccountProfile from "./views/account/Profile";
import AdminMain from "./views/admin/AdminMain";
import AdminProduct from "./views/admin/AdminProduct";
import AdminCategory from "./views/admin/AdminCategory";
import UserAgreement from "./views/UserAgreement";
import ReturnPolicy from "./views/ReturnPolicy";

export default new VueRouter( {
  mode: 'history',
  base: process.env.BASE_URL,

  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
        meta: {
            breadcrumb: {
                label: 'Главная'
            }
        }
    },
    {
        path: '/catalog',
        name: 'catalog',
        component: Catalog,
        meta: {
            breadcrumb: {
                label: 'Каталог',
                parent: 'home'
            }
        }
    },
    {
        path: '/catalog/:id',
        name: 'product',
        component: ProductPage,
        meta: {
            breadcrumb: routeParams => `route params id: ${routeParams.id}`
        }
    },
    {
      path: '/about',
      name: 'about',
      component: About,
        meta: {
            breadcrumb: {
                label: 'О компании',
                parent: 'home'
            }
        }
    },

    {
      path: '/contacts',
      name: 'contacts',
      component: Contacts,
        meta: {
            breadcrumb: {
                label: 'Контакты',
                parent: 'home'
            }
        }
    },
    {
      path: '/delivery',
      name: 'delivery',
      component: Delivery,
        meta: {
            breadcrumb: {
                label: 'Доставка',
                parent: 'home'
            }
        }
    },
    {
      path: '/payment',
      name: 'payment',
      component: Payment,
        meta: {
            breadcrumb: {
                label: 'Оплата',
                parent: 'home'
            }
        }
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart,
    },

    {
      path: '/checkout',
      name: 'checkout',
      component: Checkout,
    },
    {
      path: '/order',
      name: 'order',
        component: () => import('./views/Order'),
    },
    {
      path: '/user-agreement',
      name: 'user-agreement',
      component: UserAgreement,
        breadcrumb: {
            label: 'Пользовательское соглашение',
            parent: 'home'
        }
    },
    {
      path: '/return-policy',
      name: 'return-policy',
      component: ReturnPolicy,
        meta: {
            breadcrumb: {
                label: 'Политика возврата',
                parent: 'home'
            }
        }
    },
      {
          path: '/login',
          name: 'login',
          component: Login,
      },
      {
          path: '/register',
          name: 'register',
          component: Register,
      },
      {
          path: '/admin',
          name: 'admin',
          component: Admin,
          meta: {
              breadcrumb: {
                  label: 'Кабинет администратора',
                  parent: 'home'
              }
          }
      },
    {
      path: '/account',
      name: 'account',
      component: Account,
      children: [
        {
          path: 'history',
          component: AccountHistory
        },
        {
          path: 'profile',
          component: AccountProfile
        },
        {
          path: 'admin',
          component: AdminMain,
        },
        {
          path: 'admin/product',
          component: AdminProduct,
        },
        {
          path: 'admin/category',
          component: AdminCategory,
        },
      ],
    },
    {
      path: '/*',
      name: 'notFound',
      component: PageNotFound
    },
  ]
})
