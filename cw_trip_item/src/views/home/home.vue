<template>
  <Title :isShow="showTitle" :isTitle="titleContent"></Title>

  <div class="root">
    <div class="wrap">
      <div class="mode">
        <div v-for="item in modeList">
          <div
            class="modeItem"
            :style="setColor(item)"
            @click="turnPage(item)"
          >
            <img :src="getAssetURL(item.image)" alt="" />
            <div class="text">{{ item.text }}</div>
          </div>
        </div>
      </div>

      <!-- 轮播图 -->
      <div class="banner">
        <van-swipe :autoplay="3000" lazy-render>
          <van-swipe-item v-for="image in images" :key="image">
            <img :src="image" />
          </van-swipe-item>
        </van-swipe>
      </div>

      <div class="demo">
        <div v-for="item in abilityList">
          <div class="demoItem" :style="setColor(item)">
            <img :src="getAssetURL(item.image)" />
            <div>{{ item.text }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
//轮播图图片
import img1 from '@/assets/img/home/apple_banner.jpeg'
import img2 from '@/assets/img/home/apple_banner1.jpeg'
import img3 from '@/assets/img/home/apple_banner2.jpeg'

//获取组件和方法
import Title from '@/components/Title/Title.vue'
import { modeList, abilityList } from '@/assets/data/modeList'
import { getAssetURL } from '@/utils/load_assets'

//获取路由
import { useRouter } from 'vue-router'
const router = useRouter()
const turnPage = (param) => {
  router.push(param.path)
}

const images = [img1, img2, img3]

//给title组件传递参数
const showTitle = ref(false)
const titleContent = ref('首页')

const setColor = (color) => {
  return `background-color: ${color.color}`
}
</script>

<style lang="less" scoped>
.root {
  padding-top: 36px;

  .wrap {
    height: 40%;
    .mode {
      border-radius: 12px;
      justify-content: space-between;
      display: flex;
      .modeItem {
        border-radius: 6px;
        margin: 1px;
        padding: 12px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .text {
          margin-top: 4px;
          font-size: 14px;
          color: #f6f6f6;
        }
        img {
          width: 100%;
        }
      }
    }
  }

  .demo {
    display: grid;
    grid-template-rows: repeat(2, 50%);
    grid-template-columns: 1fr 1fr 1fr;
    grid-row-gap: 6px;
    grid-column-gap: 4px;

    .demoItem {
      border-radius: 8px;
      text-align: center;
      padding: 8px;
      img {
        width: 48px;
        height: 48px;
      }
    }
  }

  .banner {
    margin-top: 6px;
    margin-bottom: 6px;
    img {
      width: 100%;
    }
  }
}
</style>
