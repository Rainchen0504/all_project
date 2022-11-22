<template>
  <div class="city-group">
    <!-- 使用vant的索引栏组件 -->
    <van-index-bar :sticky="false" :index-list="indexList">
      <!-- 热门部分 -->
      <van-index-anchor index="热门" />
      <div class="list">
        <template v-for="(city, index) in groupData.hotCities" :key="index">
          <div class="city" @click="cityClick(city)">{{ city.cityName }}</div>
        </template>
      </div>

      <!-- 不同字母开头城市 -->
      <template v-for="(group, index) in groupData.cities" :key="index">
        <van-index-anchor :index="group.group" />
        <template v-for="(city, index) in group.cities" :key="index">
          <van-cell :title="city.cityName" @click="cityClick(city)" />
        </template>
      </template>
    </van-index-bar>
  </div>
</template>

<script setup>
import useCityStore from '@/stores/modules/city'
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps({
  groupData: {
    type: Object,
    default: () => ({}),
  },
})

console.log('37', props.groupData.cities)

//设置右侧索引值
const indexList = computed(() => {
  const list = props.groupData.cities.map((item) => item.group)
  list.unshift('#')
  return list
})

//点击事件
const router = useRouter()
const cityStore = useCityStore()
const cityClick = (city) => {
  console.log('37'.city)
}
</script>

<style lang="less" scoped></style>
