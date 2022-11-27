import { defineStore } from 'pinia'

const useMainStore = defineStore('main', {
  state: () => ({
    isLoading: false,
  }),
})

export default useMainStore
