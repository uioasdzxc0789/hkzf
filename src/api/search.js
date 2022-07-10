import request from '@/utils/index'

export const getHouse = ({ cityId }) => {
  return request({
    url: '/houses',
    params: {
      cityId
    }
  })
}

export const searchHouse = ({ name, id }) => {
  return request({
    url: '/area/community',
    params: {
      name, id
    }
  })
}

export const houseDetail = id => {
  return request({
    url: `/houses/${id}`
  })
}

export const getHouseData = (
  cityId = 'AREA|88cff55c-aaa4-e2e0',
  area = null,
  subway = null,
  rentType = true,
  price = null,
  more = null
) =>
  request({
    url: '/houses',
    method: 'GET',
    params: {
      cityId,
      area,
      subway,
      rentType,
      price,
      more
    }
  })

export const getAreaHouse = (id) => {
  return request({
    url: '/houses/condition',
    params: {
      id
    }
  })
}
