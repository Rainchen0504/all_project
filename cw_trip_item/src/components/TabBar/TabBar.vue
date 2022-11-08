<template>
  <div class="tab-bar">
    <van-tabbar v-model="currentTab" active-color="#ff9854">
      <template v-for="(item, index) in tabbarData" :key="item.text">
        <van-tabbar-item :to="item.path">
          <span>{{ item.text }}</span>
          <template #icon>
            <img
              v-if="currentTab !== index"
              :src="getAssetURL(item.image)"
              alt=""
            />
            <img v-else :src="getAssetURL(item.imageActive)" alt="" />
          </template>
        </van-tabbar-item>
      </template>
    </van-tabbar>
  </div>
</template>

<script setup>
import tabbarData from '@/assets/data/tabber'
import { getAssetURL } from '@/utils/load_assets'
import { ref, getCurrentInstance, onMounted, onUpdated } from 'vue'
const currentTab = ref(0)

//获取全局变量方法
const { proxy } = getCurrentInstance()

onMounted(() => {
  //从本地存储中取值
  const cache = proxy.$localMemory.getItem('currentTab')
  if (cache) {
    currentTab.value = cache
  } else {
    proxy.$localMemory.setItem({
      name: 'currentTab',
      value: currentTab.value,
    })
  }
})

onUpdated(() => {
  //将tab存在本地存储中
  proxy.$localMemory.setItem({
    name: 'currentTab',
    value: currentTab.value,
  })
})
</script>

<style lang="less" scoped>
.tab-bar {
  :deep(.van-tabbar-item__icon) {
    font-size: 50px;
  }

  img {
    height: 26px;
  }
}
</style>
