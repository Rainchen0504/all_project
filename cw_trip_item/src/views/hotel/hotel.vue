<template>
  <div class="home">
    <!-- 首页顶部标题 -->
    <Title isTitle="酒店"></Title>

    <!-- 中间搜索部分 -->
    <Search></Search>

    <!-- 星星评价组件 -->
    <Star :score="pointInfo"></Star>
  </div>
</template>

<script setup>
import Title from '@/components/Title/Title.vue'
import Search from './component/Search.vue'
import Star from './component/Star.vue'
import { ref } from 'vue'

const pointInfo = ref(4.5)

//清除tabbar的高亮
</script>

<style lang="less" scoped>
.home {
  padding-bottom: 10px;
}
</style>
