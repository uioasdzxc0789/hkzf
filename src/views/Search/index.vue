<template>
  <div>
    <!-- 导航栏 -->
    <van-nav-bar left-arrow @click-left="$router.push('/home')" />
    <!-- 搜索栏 -->
    <div class="search">
      <van-search show-action label="地址" placeholder="请输入小区或地址">
        <template #action>
          <div>
            <van-icon name="location-o" size="20px" />
          </div>
        </template>
      </van-search>
    </div>
    <!-- 选择区域 -->
    <van-sticky>
      <van-dropdown-menu>
        <van-dropdown-item title="区域">
          <van-picker :columns="columns" value-key="label" />
          <van-row>
            <van-col span="8">
              <van-button block>取消</van-button>
            </van-col>
            <van-col span="16">
              <van-button type="primary" block>确定</van-button>
            </van-col>
          </van-row>
        </van-dropdown-item>
        <van-dropdown-item title="方式">
          <van-picker :columns="columns1" value-key="label" />
          <van-row>
            <van-col span="8">
              <van-button block>取消</van-button>
            </van-col>
            <van-col span="16">
              <van-button type="primary" block>确定</van-button>
            </van-col>
          </van-row>
        </van-dropdown-item>
        <van-dropdown-item title="租金">
          <van-picker :columns="columns2" value-key="label" />
          <van-row>
            <van-col span="8">
              <van-button block>取消</van-button>
            </van-col>
            <van-col span="16">
              <van-button type="primary" block>确定</van-button>
            </van-col>
          </van-row>
        </van-dropdown-item>
        <van-dropdown-item title="筛选" @open="flag = true"></van-dropdown-item>
      </van-dropdown-menu>
    </van-sticky>
    <van-popup
      v-model="flag"
      position="right"
      :style="{ height: '100%', width: '70%' }"
    />
    <!-- 列表 -->
    <div class="HouseList">
      <div
        class="HouseItem_house"
        v-for="(item, index) in GetHouse"
        :key="index"
        @click="$router.push({ name: 'detail', query: { id: item.houseCode } })"
      >
        <div>
          <van-image :src="baseUrl + item.houseImg" />
        </div>
        <div class="HouseItem_content">
          <h3 class="HouseItem_title">{{ item.title }}</h3>
          <div class="HouseItem_desc">{{ item.desc }}</div>
          <div>
            <span class="HouseItem_tag HouseItem_tag1">近地铁</span>
          </div>
          <div class="HouseItem_price">
            <span HouseItem_priceNum>{{ item.price }} 元/月</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getHouse, getAreaHouse } from '@/api/search'
export default {
  async created () {
    try {
      const res = await getHouse({ cityId: 'AREA|88cff55c-aaa4-e2e0' })
      const res2 = await getAreaHouse('AREA|88cff55c-aaa4-e2e0')
      console.log(res2)
      console.log(res)
      this.GetHouse = res.data.body.list
      res2.data.body.area.children[0].children = [{ label: '' }]
      res2.data.body.subway.children[0].children = [{ label: '' }]
      this.columns = [res2.data.body.area, res2.data.body.subway]
      this.columns1 = res2.data.body.rentType
      this.columns2 = res2.data.body.price
    } catch (err) {
      console.log(err)
    }
  },
  data () {
    return {
      flag: false,
      baseUrl: 'http://liufusong.top:8080',
      GetHouse: '',
      columns: [
      ],
      columns1: [
      ],
      columns2: [
      ]
    }
  },
  methods: {
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.search {
  position: absolute;
  width: 320px;
  height: 34px;
  top: -3px;
  left: 8%;
  z-index: 1;
  .van-search {
    background-color: unset;
  }
}
.HouseItem_house {
  padding: 0 13px;
  height: 120px;
  position: relative;
  box-sizing: border-box;
  justify-content: space-around;
  padding-top: 18px;
  border-bottom: 1px solid #e5e5e5;
  .van-image {
    float: left;
    width: 106px;
    height: 80px;
  }
  .HouseItem_content {
    overflow: hidden;
    line-height: 22px;
    padding-left: 12px;
    .HouseItem_title {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      vertical-align: middle;
      margin: 0;
      font-size: 15px;
      color: #394043;
    }
    .HouseItem_desc {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      vertical-align: middle;
      font-size: 12px;
      color: #afb2b3;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      vertical-align: middle;
    }
    .HouseItem_tag1 {
      color: #39becd;
      background: #e1f5f8;
    }
    .HouseItem_tag {
      display: inline-block;
      font-size: 12px;
      border-radius: 3px;
      padding: 4px 5px;
      margin-right: 5px;
      line-height: 12px;
    }
    .HouseItem_price {
      font-size: 12px;
      color: #fa5741;
      .HouseItem_priceNum {
        font-size: 16px;
        font-weight: bolder;
      }
    }
  }
}
.HouseList {
  padding-bottom: 55px;
}
</style>
