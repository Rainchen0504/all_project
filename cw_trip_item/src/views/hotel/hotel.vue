<template>
  <div class="home top-page">
    <!-- 首页顶部标题 -->
    <Title isTitle="酒店" :isShow="true"></Title>

    <div class="center">
      <img src="@/assets/img/hotel/hotel.png" />
    </div>

    <!-- 中间搜索部分 -->
    <Search class="searchContent"></Search>

    <!-- 分类模块 -->
    <Categories></Categories>

    <!-- 不知道什么模块 -->
    <div class="search-bar" v-if="isShowSearchBar">
      <SearchBar></SearchBar>
    </div>

    <!-- 内容模块 -->

    <!-- 虚拟列表 -->
    <!-- <div>虚拟列表</div>
    <div class="list" @scroll.passive="getScroll($event)">
      <div :style="sumHeight">
        <div
          class="item"
          v-for="(item, index) in options.slice(min - 2, min + 10)"
          :key="index"
          :style="itemHeight(item)"
        >
          {{ item.value }}:{{ item.label }}
        </div>
      </div>
    </div> -->
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Title from '@/components/Title/Title.vue'
import Search from './component/Search.vue'
import Categories from './component/Categories.vue'
import Content from './component/Content.vue'
import Navbar from './component/Navbar.vue'
import SearchBar from '@/components/SearchBar/SearchBar.vue'

import useHotelStore from '@/stores/modules/hotel'
import { computed } from '@vue/reactivity'
const hotelStore = useHotelStore()

//发送请求获取热门建议
hotelStore.fetchHotSuggestData()
//发送请求获取分类
hotelStore.fetchCategoriesData()

//虚拟列表的逻辑,每一行高度为40
let min = ref(2)
const getScroll = (event) => {
  let scrollTop = event.target.scrollTop
  //当滚动的距离大于2条数据高度时动态计算
  if (scrollTop > 2 * 40) {
    min.value = Math.ceil(scrollTop / 40)
  } else {
    min.value = 2
  }
}

//搜索框显示控制
const isShowSearchBar = computed(() => {
  return sc
})

//模拟1万条数据
const options = ref(
  Array.from({ length: 1000 }).map((_, idx) => ({
    value: `Option ${idx + 1}`,
    label: `${idx}`,
  })),
)

const sumHeight = {
  height: 40 * options.value.length + 'px',
  width: '100%',
}

const itemHeight = (param) => {
  return { top: `${40 * param.label}px` }
}
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

.list {
  width: 100%;
  height: 280px;
  overflow: auto;
  position: relative;
  .item {
    width: 98%;
    height: 40px;
    line-height: 40px;
    position: absolute;
    text-align: center;
  }
}
</style>
