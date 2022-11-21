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
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import useCityStore from '@/stores/modules/city'
import { storeToRefs } from 'pinia'
import { computed } from '@vue/reactivity'

const router = useRouter()

//搜索框部分
const searchValue = ref('')
const cancelClick = () => {
  router.back()
}

//tab切换
const tabActive = ref()
console.log('43', tabActive)

//请求城市数据,在vuex中请求
const cityStore = useCityStore()
cityStore.fetchAllCitiesData()
const { allCities } = storeToRefs(cityStore)
console.log('48', allCities)

//获取选中tab后的数据
const currentGroup = computed(() => allCities.value[tabActive.value])
console.log('53', currentGroup)
</script>

<style lang="scss" scoped></style>
