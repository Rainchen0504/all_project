<template>
  <div class="nav-bar">
    <div @click="goBack">返回</div>
    <div class="title">{{ props.title }}</div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const props = defineProps({
  title: {
    type: String,
    default: '',
  },
})

const router = useRouter()
//返回按钮，封装在首页里
const goBack = () => {
  router.go(-1)
}
</script>

<style lang="less" scoped>
.nav-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5vh;
  border-bottom: 1px solid #e2e2e2;

  .title {
    font-size: 16px;
    font-weight: 600;
    color: var(--primary-color);
  }
}
</style>
