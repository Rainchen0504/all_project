<template>
  <div class="search-box">
    <!-- 位置信息 -->
    <div class="location bottom-gray-line">
      <div class="city" @click="cityClick">深圳</div>
      <div class="position" @click="positionClick">
        <span class="text">我的位置</span>
        <img src="@/assets/img/home/icon_location.png" alt="" />
      </div>
    </div>

    <!-- 时间范围 -->

    <!-- 价格人数 -->

    <!-- 关键字 -->

    <!-- 热门建议 -->
  </div>
</template>

<script setup>
import { getLocation } from '@/utils/load_location.js'
import { useRouter } from 'vue-router'
const router = useRouter()

const cityClick = () => {
  router.push('/city')
}

const positionClick = () => {
  //通过浏览器方法获取位置信息
  getLocation()
}
</script>

<style lang="less" scoped>
.search-box {
  --van-calendar-popup-height: 100%;
}
.location {
  display: flex;
  align-items: center;
  height: 44px;
  padding: 0 20px;

  .city {
    flex: 1;
    color: #333;
    font-size: 16px;
  }
  .position {
    display: flex;
    width: 80px;
    align-items: center;
    .text {
      color: #666;
      font-size: 14px;
    }
    img {
      width: 18px;
      height: 18px;
      margin-left: 4px;
    }
  }
}
</style>
