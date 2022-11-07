import { createRouter, createWebHashHistory } from 'vue-router'

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
