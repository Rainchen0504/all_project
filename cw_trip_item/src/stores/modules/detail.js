import { defineStore } from 'pinia'
import { getDetailInfos } from '@/services/modules/detail'

const useDetailStore = defineStore('detail', {
  state: () => ({
    detailInfos: {},
  }),
  actions: {
    async fetchDetailData(param) {
      const res = await getDetailInfos(param)
      this.detailInfos = res.data
    },
  },
})

export default useDetailStore
