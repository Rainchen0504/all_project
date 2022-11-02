<template>
  <div class="home">
    <h2>home</h2>
    <!-- 星星评价组件 -->
    <div class="score">
      <Star :score="pointInfo"></Star>
    </div>

    <div class="hitScore">
      <HitStar :score="pointInfo"></HitStar>
    </div>
  </div>
</template>

<script setup>
import Star from './Star.vue'
import HitStar from './HitStar.vue'
import { ref } from 'vue'

const pointInfo = ref(4.5)
</script>

<style lang="less" scoped></style>
