import { defineStore } from 'pinia'
import { getHotelHotSuggests } from '@/services'

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
  },
})

export default useHotelStore
