<template>
  <div>这是首页</div>
  <son-com :name="name" :age="age"></son-com>
</template>

<script lang="ts">
import SonCom from './components/SonCom.vue'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'App',
  components: {
    SonCom,
  },
  mounted() {
    console.log('16', this.name)
  },
  setup() {
    const name = ref('哈哈哈')
    const age = ref(24)
    return {
      name,
      age,
    }
  },
})
</script>

<style></style>
