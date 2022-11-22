<template>
  <div class="city top-page">
    <div class="top">
      <!-- 搜索部分 -->
      <van-search
        v-model="searchValue"
        placeholder="城市/区域/位置"
        shape="round"
        show-action
        @cancel="cancelClick"
      />

      <!-- tab部分 -->
      <van-tabs v-model:active="tabActive" color="#ff9854" line-height="3">
        <template v-for="(value, key, index) in allCities" :key="key">
          <van-tab :title="value.title" :name="key"></van-tab>
        </template>
      </van-tabs>
    </div>

    <div class="content">
      <!-- 城市列表 -->
      <template v-for="(value, key, index) in allCities">
        <cityGroup v-show="tabActive === key" :group-data="value"></cityGroup>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
import useCityStore from '@/stores/modules/city'
import cityGroup from './components/cityGroup.vue'

const router = useRouter()

//搜索框部分
const searchValue = ref('')
const cancelClick = () => {
  router.back()
}

//tab切换
const tabActive = ref()

//请求城市数据,在vuex中请求
const cityStore = useCityStore()
cityStore.fetchAllCitiesData()
const { allCities } = storeToRefs(cityStore)
</script>

<style lang="less" scoped>
.city {
  .top {
    position: relative;
    z-index: 9;
  }
  .content {
    height: calc(100vh - 100px);
    overflow-y: auto;
  }
}
</style>
