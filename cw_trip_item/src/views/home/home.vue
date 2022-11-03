<template>
  <div class="home">
    <!-- 首页顶部标题 -->
    <Title></Title>

    <!-- 轮播图 -->
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="" />
    </div>

    <!-- 中间搜索部分 -->
    <Search></Search>

    <!-- 星星评价组件 -->
    <div class="score">
      <Star :score="pointInfo"></Star>
    </div>
  </div>
</template>

<script setup>
import Title from './component/Title.vue'
import Search from './component/Search.vue'
import Star from './Star.vue'
import { ref } from 'vue'

const pointInfo = ref(4.5)
</script>

<style lang="less" scoped>
.home {
  padding-bottom: 10px;
}
.banner {
  img {
    width: 100%;
  }
}
</style>
