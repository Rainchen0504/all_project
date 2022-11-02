<template>
  <div>
    <div class="star">
      <div
        class="star-item"
        v-for="(itemClass, index) in itemClasses"
        :key="index"
        :class="itemClass"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const LENGTH = 5
const CLS_ON = 'on'
const CLS_OFF = 'off'
const CLS_HALF = 'half'

const props = defineProps({
  score: {
    type: Number,
    default: 0,
  },
})

const itemClasses = computed(() => {
  let result = []
  let score = Math.floor(props.score * 2) / 2
  let hasDecimal = score % 1 !== 0
  let integer = Math.floor(score)

  for (let i = 0; i < integer; i++) {
    result.push(CLS_ON)
  }

  if (hasDecimal) {
    result.push(CLS_HALF)
  }

  while (result.length < LENGTH) {
    result.push(CLS_OFF)
  }
  return result
})
</script>

<style scoped>
.star {
  display: flex;
}
.star-item {
  height: 50px;
  width: 50px;
  background-size: contain;
}
.star-item.on {
  background-image: url(./star3.png);
}
.star-item.half {
  background-image: url(./star2.png);
}
.star-item.off {
  background-image: url(./star1.png);
}
</style>
