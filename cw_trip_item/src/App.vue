<template>
  <div class="app">
    <router-view></router-view>
    <!-- 下面的跳转tab -->
    <TabBar v-if="!route.meta.hideTabBar"></TabBar>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import TabBar from '@/components/TabBar/TabBar.vue'
const route = useRoute()
</script>

<style scoped></style>
