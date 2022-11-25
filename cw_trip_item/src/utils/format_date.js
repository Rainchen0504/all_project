//处理时间格式，从Mon Nov 28 2022 00:00:00 GMT+0800 (中国标准时间)转成年月日
import dayjs from 'dayjs'

const formatMonthDay = (date) => {
  return dayjs(date).format('MM月DD日')
}

const getDiffDays = (startDate, endDate) => {
  return dayjs(endDate).diff(startDate, 'day')
}

export { formatMonthDay, getDiffDays }
