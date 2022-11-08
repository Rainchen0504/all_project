import { createRouter, createWebHashHistory } from 'vue-router'
import tabbarData from '@/assets/data/tabber'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home', //首页
      component: () => import('@/views/home/home.vue'),
      beforeEnter: (to, from, next) => {
        //局部守卫
        const curTab = window.localStorage.getItem('currentTab')
        //刷新初始化后且当前tab不为0就找到并进入对应页面
        if (from.path === '/' && curTab != 0) {
          next(tabbarData[curTab].path)
        } else {
          //tab即使为0但是不是初始化进入就继续
          next()
        }
      },
    },
    {
      path: '/favor', //收藏
      component: () => import('@/views/favor/favor.vue'),
    },
    {
      path: '/order', //订单
      component: () => import('@/views/order/order.vue'),
    },
    {
      path: '/message', //我的
      component: () => import('@/views/message/message.vue'),
    },
    {
      path: '/hotel', //酒店
      component: () => import('@/views/hotel/hotel.vue'),
    },
    {
      path: '/airplane', //机票
      component: () => import('@/views/airplane/airplane.vue'),
    },
    {
      path: '/train', //火车票
      component: () => import('@/views/train/train.vue'),
    },
    {
      path: '/ticket', //门票
      component: () => import('@/views/ticket/ticket.vue'),
    },
    {
      path: '/city', //城市选择
      component: () => import('@/views/city/city.vue'),
    },
  ],
})

export default router
