<template>
  <div v-if="props.isShow" class="back" @click="goBack">返回</div>
  <div class="nav-bar">
    <div class="title">{{ props.isTitle }}</div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
//返回按钮，封装在首页里
const goBack = () => {
  router.go(-1)
}

const props = defineProps({
  isTitle: {
    type: String,
    default: '',
  },
  isShow: {
    type: Boolean,
    default: false,
  },
})
</script>

<style lang="less" scoped>
.back {
  position: fixed;
  left: 12px;
  top: 3px;
  line-height: 30px;
  font-size: 16px;
  color: #fefeff;
  background: #0f0f0f;
  border-radius: 6px;
  width: 60px;
  height: 30px;
  text-align: center;
}
.nav-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 36px;
  border-bottom: 1px solid #e2e2e2;

  .title {
    font-size: 16px;
    font-weight: 600;
    color: var(--primary-color);
  }
}
</style>
