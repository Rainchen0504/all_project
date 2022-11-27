<template>
  <div class="detail top-page" ref="detailRef">
    <Title :isTitle="'酒店详情'" :isShow="true"></Title>

    <TabControl
      v-if="showTabControl"
      class="tabs"
      :titles="names"
      @tabItemClick="tabClick"
    ></TabControl>

    <div class="main" v-if="mainPart">
      <!-- 轮播图 -->
      <DetailSwipe
        :swipe-data="mainPart.topModule.housePicture.housePics"
      ></DetailSwipe>

      <!-- 描述 -->
      <DetailInfos
        name="描述"
        :ref="getSectionRef"
        :top-infos="mainPart.topModule"
      ></DetailInfos>

      <!-- 设施 -->
      <DetailFacility
        name="设施"
        :house-facility="
          mainPart.dynamicModule.facilityModule.houseFacility
        "
        :ref="getSectionRef"
      ></DetailFacility>

      <DetailLandlord
        name="房东"
        :ref="getSectionRef"
        :landlord="mainPart.dynamicModule.landlordModule"
      ></DetailLandlord>

      <DetailComment
        name="评论"
        :ref="getSectionRef"
        :comment="mainPart.dynamicModule.commentModule"
      ></DetailComment>

      <DetailNotice
        name="须知"
        :ref="getSectionRef"
        :order-rules="mainPart.dynamicModule.rulesModule.orderRules"
      ></DetailNotice>

      <DetailMap
        name="周边"
        :ref="getSectionRef"
        :position="mainPart.dynamicModule.positionModule"
      ></DetailMap>

      <DetailIntro
        :price-intro="mainPart.introductionModule"
      ></DetailIntro>
    </div>

    <div class="footer">
      <img src="@/assets/img/detail/icon_ensure.png" alt="" />
      <div class="text">永无止境!</div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
//引入各种组件
import TabControl from '@/components/tab-control/tab-control.vue'
import Title from '@/components/Title/Title.vue'
import DetailSwipe from './components/detail-swipe.vue'
import DetailInfos from './components/detail-infos.vue'
import DetailFacility from './components/detail-facility.vue'
import DetailLandlord from './components/detail-landlord.vue'
import DetailComment from './components/detail-comment.vue'
import DetailNotice from './components/detail-notice.vue'
import DetailMap from './components/detail-map.vue'
import DetailIntro from './components/detail-intro.vue'
import useScroll from '@/hooks/useScroll'

//获取路由对象
import { useRouter, useRoute } from 'vue-router'
//请求获取数据
import useDetailStore from '@/stores/modules/detail'

const router = useRouter()
const route = useRoute()
const detailStore = useDetailStore()
//当前id请求返回的明细数据
detailStore.fetchDetailData(route.params.id)

//主要信息
const mainPart = computed(() => {
  return detailStore.detailInfos.mainPart
})

const detailRef = ref()
const { scrollTop } = useScroll(detailRef)
const showTabControl = computed(() => {
  return scrollTop.value >= 300
})
const sectionEls = ref({})
const names = computed(() => {
  return Object.keys(sectionEls.value)
})
const getSectionRef = (value) => {
  const name = value.$el.getAttribute('name')
  sectionEls.value[name] = value.$el
}
const tabClick = (index) => {
  const key = Object.keys(sectionEls.value)[index]
  const el = sectionEls.value[key]
  let instance = el.offsetTop
  if (index !== 0) {
    instance = instance - 44
  }

  detailRef.value.scrollTo({
    top: instance,
    behavior: 'smooth',
  })
}
</script>

<style lang="less" scoped>
.tabs {
  position: fixed;
  z-index: 9;
  left: 0;
  right: 0;
  top: 36px;
}

.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 120px;

  img {
    width: 123px;
  }

  .text {
    margin-top: 12px;
    font-size: 12px;
    color: #7688a7;
  }
}
</style>
