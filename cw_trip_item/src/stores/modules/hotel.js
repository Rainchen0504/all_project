import { defineStore } from 'pinia'
import { getHotelHotSuggests, getHotelCategories } from '@/services'

const useHotelStore = defineStore('hotel', {
  state: () => ({
    hotSuggests: [],
    categories: [],
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
  },
})

export default useHotelStore
