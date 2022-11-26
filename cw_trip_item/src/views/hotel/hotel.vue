<template>
  <div class="home">
    <!-- 首页顶部标题 -->
    <Title isTitle="酒店" :isShow="true"></Title>

    <div class="center">
      <img src="@/assets/img/hotel/hotel.png" />
    </div>

    <!-- 中间搜索部分 -->
    <Search class="searchContent"></Search>

    <!-- 分类模块 -->
    <Categories></Categories>

    <!-- 列表模块 -->
    <Content></Content>
  </div>
</template>

<script setup>
import { watch } from 'vue'
import Title from '@/components/Title/Title.vue'
import Search from './component/Search.vue'
import Categories from './component/Categories.vue'
import Content from './component/Content.vue'

//引入监听滚动的hooks
import useScroll from '@/hooks/useScroll'

//引入pinia模块
import useHotelStore from '@/stores/modules/hotel'
const hotelStore = useHotelStore()

//发送请求获取热门建议
hotelStore.fetchHotSuggestData()
//发送请求获取分类
hotelStore.fetchCategoriesData()
//发送请求获取列表
hotelStore.fetchHotellistData()

const { isReachBottom } = useScroll()
watch(isReachBottom, (newValue) => {
  if (newValue) {
    //如果到最底了
    hotelStore.fetchHotellistData().then(() => {
      isReachBottom.value = false
    })
  }
})
</script>

<style lang="less" scoped>
.home {
  height: 100vh;
}

.center {
  width: 100%;
  img {
    height: 250px;
    width: 100%;
  }
}

.searchContent {
  margin-top: -40px;
  width: 100%;
}
</style>
