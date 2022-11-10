<template>
  <div>
    <h3>这是子页面</h3>
    <div>{{ name }} - {{ age }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

const PropsType = {
  name: String,
  age: {
    type: Number,
    required: true,
  },
} as const

export default defineComponent({
  name: 'son_name',
  props: PropsType,
})
</script>

<style scoped></style>
