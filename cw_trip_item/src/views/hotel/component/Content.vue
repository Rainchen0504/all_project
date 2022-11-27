<template>
  <div class="content">
    <h2 class="title">热门精选</h2>
    <div class="list">
      <template
        v-for="(item, index) in hotelList"
        :key="item.data.houseId"
      >
        <HotelItemV9
          v-if="item.discoveryContentType === 9"
          :item-data="item.data"
          @click="itemClick(item.data)"
        ></HotelItemV9>
        <HotelItem3
          v-else-if="item.discoveryContentType === 3"
          :item-data="item.data"
          @click="itemClick(item.data)"
        ></HotelItem3>
      </template>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import HotelItemV9 from '@/components/hotel-item-v9/hotel-item-v9.vue'
import HotelItem3 from '@/components/hotel-item-v3/hotel-item-v3.vue'
import { storeToRefs } from 'pinia'
import useHotelStore from '@/stores/modules/hotel'
const hotelStore = useHotelStore()
const { hotelList } = storeToRefs(hotelStore)

const router = useRouter()
const itemClick = (param) => {
  //跳转页面
  router.push('/detail/' + param.houseId)
}
</script>

<style lang="less" scoped>
.content {
  padding: 10px 8px;

  .title {
    font-size: 22px;
    padding: 10px;
  }

  .list {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
