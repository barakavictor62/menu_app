import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Menu from '@/components/Menu'
import Header from '@/components/Header'
import Cakenav from '@/components/Cakenav'
import Items from '@/components/Items'
import Cart from '@/components/Cart'
import Pizza from '@/components/Pizza'
import Billing from '@/components/Billing'
import Blog from '@/components/Blog'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
       children: [{
          path:'/',
          component: Header
      }],
    },
    { 
      path: '/menu', 
      name:'menu',
      component:Menu,
      children: [{
          path:'/',
          component: Header
      }],
      props:true
  },
  { 
      path: '/got_to_checkout',
      name:'Billing', 
      component:Billing,
      children: [
        { path: '', component: Cart}
        ],
      props:true 
      },
  { 
      path: '/birthday', 
      name:'cakes',
      component:Items,
      children: [
          { path: '',name:'cakes',component: Cakenav },
        ],
      props:true
  },
  { 
      path: '/wedding_cakes', 
      name:'cakes_wedding',
      component:Items,
      children: [
          { path: '',name:'cakes_wedding', component: Cakenav}
         ],
      props:true
  },
  { 
      path: '/pastries', 
      name:'pastries',
      component:Items,
      children: [
           { path: '',name:'pastries', component: Cakenav}
        ],
      props:true
  },
  {
      path:'/pizza',
      name:'pizza',
      component: Pizza,
      props: true
  },
  {
    path:'/blog',
    name:'blog',
    component: Blog,
    children: [{
          path:'/',
          component: Header
      }],
    props: true
},
{
    path:'/contact',
    name:'contact',
    component: Contact,
    children: [{
          path:'/',
          component: Header
      }],
    props: true
}
  ],
  scrollBehavior(to, from,savedPosition){
    return {x: 0,y: 0 }
}
})
