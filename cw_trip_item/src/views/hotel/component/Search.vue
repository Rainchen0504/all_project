<template>
  <div class="search-box">
    <!-- 位置信息 -->
    <div class="location bottom-gray-line">
      <div class="city" @click="cityClick">
        {{ currentCity.cityName }}
      </div>
      <div class="position" @click="positionClick">
        <span class="text">我的位置</span>
        <img src="@/assets/img/hotel/icon_location.png" alt="" />
      </div>
    </div>

    <!-- 时间范围 -->
    <div
      class="section data-range bottom-gray-line"
      @click="showCalendar"
    >
      <div class="start">
        <span class="tip">入住</span>
        <span class="time">{{ startDate }}</span>
      </div>

      <div class="stay">共{{ stayCount }}晚</div>

      <div class="end">
        <span class="tip">离店</span>
        <span class="time">{{ endDate }}</span>
      </div>
    </div>
    <van-calendar
      v-model:show="openCalendar"
      type="range"
      @confirm="submitDate"
      color="#ff9854"
      :round="false"
      :show-confirm="false"
    />

    <!-- 价格人数 -->
    <div class="section price-counter bottom-gray-line">
      <div class="start">价格不限</div>
      <div class="end">人数不限</div>
    </div>

    <!-- 关键字 -->
    <div class="section keyword bottom-gray-line">
      关键字/位置/民宿名
    </div>

    <!-- 热门建议 -->
    <div class="section hot-suggests">
      <template v-for="(item, index) in hotSuggests" :key="index">
        <div
          class="item"
          :style="{
            color: item.tagText.color,
            background: item.tagText.background.color,
          }"
        >
          {{ item.tagText.text }}
        </div>
      </template>
    </div>

    <!-- 搜索按钮 -->
    <div class="section search-btn">
      <div class="btn" @click="searchBtnClick">开始搜索</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
//引入时间处理函数
import { formatMonthDay, getDiffDays } from '@/utils/format_date'
//引入提示函数
import { Notify } from 'vant'
import 'vant/es/notify/style'
//city的pinia
import useCityStore from '@/stores/modules/city'
import useHotelStore from '@/stores/modules/hotel'
import { storeToRefs } from 'pinia'
//定位函数
import { getLocation } from '@/utils/load_location.js'
//路由
import { useRouter } from 'vue-router'
const router = useRouter()
const cityStore = useCityStore()
const hotelStore = useHotelStore()
//pinia中的当前选中
const { currentCity } = storeToRefs(cityStore)
//pinia中的热门建议
const { hotSuggests } = storeToRefs(hotelStore)

//城市选择
const cityClick = () => {
  router.push('/city')
}

//通过浏览器方法获取位置信息
const positionClick = () => {
  getLocation()
    .then((res) => {
      Notify({
        type: 'success',
        message: res.message,
      })
    })
    .catch((err) => {
      Notify({
        type: 'warning',
        message: err.message,
      })
    })
}

const openCalendar = ref(false)
//打开日期选择器
const showCalendar = () => {
  openCalendar.value = true
}

//默认显示今天到明天的范围
const nowDate = new Date()
const newDate = new Date()
newDate.setDate(nowDate.getDate() + 1)

//日期选择的值
let startDate = ref(formatMonthDay(nowDate))
let endDate = ref(formatMonthDay(newDate))
let stayCount = ref(getDiffDays(nowDate, newDate))

//日期选择弹窗的方法
const submitDate = (value) => {
  const selectStartDate = value[0]
  const selectEndDate = value[1]
  startDate.value = formatMonthDay(selectStartDate)
  endDate.value = formatMonthDay(selectEndDate)
  stayCount.value = getDiffDays(selectStartDate, selectEndDate)
  openCalendar.value = false
}

//搜索事件
const searchBtnClick = () => {
  router.push({
    path: '/search',
    query: {
      startDate: startDate.value,
      endDate: endDate.value,
      currentCity: currentCity.value.cityName,
    },
  })
}
</script>

<style lang="less" scoped>
.search-box {
  --van-calendar-popup-height: 100%;
}
.location {
  display: flex;
  align-items: center;
  height: 44px;
  padding: 0 20px;

  .city {
    flex: 1;
    color: #333;
    font-size: 16px;
  }
  .position {
    display: flex;
    width: 80px;
    align-items: center;
    .text {
      color: #666;
      font-size: 14px;
    }
    img {
      width: 18px;
      height: 18px;
      margin-left: 4px;
    }
  }
}

.section {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  color: #999;
  height: 44px;

  .start {
    display: flex;
    flex-direction: column;
    .tip {
      font-size: 12px;
      color: #999;
    }
    .time {
      margin-top: 4px;
      color: #333;
      font-size: 16px;
      font-weight: 500;
    }
  }

  .end {
    display: flex;
    flex-direction: column;
    .tip {
      font-size: 12px;
      color: #999;
    }
    .time {
      margin-top: 4px;
      color: #333;
      font-size: 16px;
      font-weight: 500;
    }
  }

  .stay {
    text-align: center;
    font-size: 14px;
    color: #666;
  }
}

.price-counter {
  margin: 5px 0;
  .start {
    border-right: 1px solid var(--line-color);
  }
}

.hot-suggests {
  margin: 5px 0;
  height: auto;

  .item {
    padding: 4px 8px;
    margin: 4px;
    border-radius: 14px;
    font-size: 12px;
    line-height: 1;
  }
}

.search-btn {
  .btn {
    width: 342px;
    height: 38px;
    max-height: 50px;
    font-weight: 500;
    font-size: 18px;
    line-height: 38px;
    text-align: center;
    border-radius: 20px;
    color: #fff;
    background-image: var(--theme-linear-gradient);
  }
}
</style>
