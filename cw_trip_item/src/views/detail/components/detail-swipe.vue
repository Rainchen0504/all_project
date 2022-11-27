<template>
  <!-- 轮播图图片 -->
  <div class="swipe">
    <van-swipe
      class="swipe-list"
      :autoplay="3000"
      indicator-color="white"
    >
      <!-- 图片部分 -->
      <template v-for="(item, index) in swipeData">
        <van-swipe-item class="item">
          <img :src="item.url" alt="" />
        </van-swipe-item>
      </template>

      <!-- 图片上的文字部分 -->
      <template #indicator="{ active, total }">
        <div class="indicator">
          <template
            v-for="(value, key, index) in swipeGroup"
            :key="key"
          >
            <span
              class="item"
              :class="{ active: swipeData[active]?.title == key }"
            >
              <span class="text">{{ getName(value[0].title) }}</span>
              <span
                class="count"
                v-if="swipeData[active]?.title == key"
                >{{ getCategoryIndex(swipeData[active]) }} /
                {{ value.length }}</span
              >
            </span>
          </template>
        </div>
      </template>
    </van-swipe>
  </div>
</template>

<script setup>
const props = defineProps({
  swipeData: {
    type: Array,
    default: () => [],
  },
})

//处理数据，分类
const swipeGroup = {}
props.swipeData.forEach((item) => {
  if (swipeGroup[item.title]) {
    swipeGroup[item.title].push(item)
  } else {
    //不存在就创建并添加
    swipeGroup[item.title] = []
    swipeGroup[item.title].push(item)
  }
})

//截取文字部分
const nameReg = /【(.*?)】/i
const getName = (name) => {
  const results = nameReg.exec(name)
  return results[1]
}

const getCategoryIndex = (param) => {
  const arr = swipeGroup[param.title]
  return arr.findIndex((item) => item === param) + 1
}
</script>

<style lang="less" scoped>
.swipe {
  .swipe-list {
    .item {
      img {
        width: 100%;
      }
    }

    .indicator {
      position: absolute;
      right: 5px;
      bottom: 5px;
      display: flex;
      padding: 2px 5px;
      font-size: 12px;
      color: #fff;
      background: rgba(0, 0, 0, 0.8);

      .item {
        margin: 0 3px;

        &.active {
          padding: 0 3px;
          border-radius: 5px;
          background-color: #fff;
          color: #333;
        }
      }
    }
  }
}
</style>
