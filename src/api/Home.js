import request from '@/utils/index'

export const getSwiper = () => {
  return request({
    url: '/home/swiper'
  })
}
export const getGroups = (area) => {
  return request({
    url: '/home/groups',
    params: {
      area
    }
  })
}

export const getCity = (level = 1) => {
  return request({
    url: '/area/city',
    params: {
      level
    }
  })
}

export const HotCity = () => {
  return request({
    url: '/area/hot'
  })
}
