<template>
  <div class="app">
    <router-view></router-view>
    <!-- 下面的跳转tab -->
    <TabBar></TabBar>
  </div>
</template>

<script setup>
import TabBar from '@/components/TabBar/TabBar.vue'
</script>

<style scoped></style>
