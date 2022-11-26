<template>
  <div class="nav-bar">
    <div v-if="props.isShow" class="back" @click="goBack">返回</div>
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
.nav-bar {
  z-index: 100;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 36px;
  background-color: #fff;
  border-bottom: 1px solid #e2e2e2;
  line-height: 36px;
  display: flex;

  .title {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    color: var(--primary-color);
    font-weight: 600;
    font-size: 16px;
  }

  .back {
    position: absolute;
    left: 12px;
    font-size: 16px;
    background: #0f0f0f;
    color: #fefeff;
    border-radius: 6px;
    width: 60px;
    height: 30px;
    top: 3px;
    line-height: 30px;
    text-align: center;
  }
}
</style>
