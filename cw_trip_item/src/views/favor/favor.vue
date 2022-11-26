<template>
  <!-- 虚拟列表 -->
  <div>虚拟列表</div>
  <div class="list" @scroll.passive="getScroll($event)">
    <div :style="sumHeight">
      <div
        class="item"
        v-for="(item, index) in options.slice(min - 2, min + 10)"
        :key="index"
        :style="itemHeight(item)"
      >
        {{ item.value }}:{{ item.label }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
//虚拟列表的逻辑,每一行高度为40
let min = ref(2)
const getScroll = (event) => {
  let scrollTop = event.target.scrollTop
  //当滚动的距离大于2条数据高度时动态计算
  if (scrollTop > 2 * 40) {
    min.value = Math.ceil(scrollTop / 40)
  } else {
    min.value = 2
  }
}

// 模拟1万条数据
const options = ref(
  Array.from({ length: 1000 }).map((_, idx) => ({
    value: `Option ${idx + 1}`,
    label: `${idx}`,
  })),
)

const sumHeight = {
  height: 40 * options.value.length + 'px',
  width: '100%',
}

const itemHeight = (param) => {
  return { top: `${40 * param.label}px` }
}
</script>

<style lang="less" scoped>
.list {
  width: 100%;
  height: 280px;
  overflow: auto;
  position: relative;
  .item {
    width: 98%;
    height: 40px;
    line-height: 40px;
    position: absolute;
    text-align: center;
  }
}
</style>
