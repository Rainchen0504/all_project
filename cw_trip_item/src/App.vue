<template>
  <div class="app">
    <router-view></router-view>
    <!-- 下面的跳转tab -->
    <TabBar v-show="!route.meta.hideTabBar"></TabBar>
    <loading />
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import TabBar from '@/components/TabBar/TabBar.vue'
import Loading from '@/components/loading/loading.vue'
const route = useRoute()
</script>

<style scoped></style>
