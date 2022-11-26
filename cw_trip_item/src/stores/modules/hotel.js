import { defineStore } from 'pinia'
import {
  getHotelHotSuggests,
  getHotelCategories,
  getHoteHouselList,
} from '@/services'

const useHotelStore = defineStore('hotel', {
  state: () => ({
    hotSuggests: [],
    categories: [],

    currentPage: 1,
    hotelList: [],
  }),
  actions: {
    //获取热门建议
    async fetchHotSuggestData() {
      const res = await getHotelHotSuggests()
      this.hotSuggests = res.data
    },

    //获取分类
    async fetchCategoriesData() {
      const res = await getHotelCategories()
      this.categories = res.data
    },

    //获取列表
    async fetchHotellistData() {
      const res = await getHoteHouselList(this.currentPage)
      this.hotelList.push(...res.data)
      this.currentPage++
    },
  },
})

export default useHotelStore
