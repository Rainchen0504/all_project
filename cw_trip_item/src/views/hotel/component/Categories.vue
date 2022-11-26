<template>
  <div class="categories">
    <template v-for="(item, index) in categories" :key="index.id">
      <div class="item">
        <img :src="item.pictureUrl" alt="" />
        <div class="text">{{ item.title }}</div>
      </div>
    </template>
  </div>
</template>

<script setup>
import useHotelStore from '@/stores/modules/hotel'
import { storeToRefs } from 'pinia'

const hotelStore = useHotelStore()
const { categories } = storeToRefs(hotelStore)
</script>

<style lang="less" scoped>
.categories {
  display: flex;
  overflow-x: auto;
  height: 80px;
  padding: 0 10px;
  &::-webkit-scrollbar {
    display: none;
  }

  .item {
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    width: 70px;
    text-align: center;

    img {
      width: 32px;
      height: 32px;
    }

    .text {
      font-size: 12px;
      margin-top: 8px;
    }
  }
}
</style>
