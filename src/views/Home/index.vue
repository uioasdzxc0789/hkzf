<template>
  <div>
    <!-- 搜索 -->
    <div class="search">
      <van-search
        v-model="value"
        show-action
        label="北京"
        placeholder="请输入小区或地址"
        @search="onSearch"
      >
        <template #left-icon>
          <van-icon name="arrow-down" @click="$router.push('/city')" />
        </template>
        <template #action>
          <div @click="onSearch">
            <van-icon name="location-o" size="20px" />
          </div>
        </template>
      </van-search>
    </div>
    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in mySwiper" :key="item.id"
        ><img v-lazy="baseUrl + item.imgSrc"
      /></van-swipe-item>
    </van-swipe>
    <!-- 整租合租选项 -->
    <van-row>
      <van-col span="6">
        <van-icon name="wap-home-o" />
        <p>整租</p>
      </van-col>
      <van-col span="6">
        <van-icon name="friends-o" />
        <p>合租</p>
      </van-col>
      <van-col span="6">
        <van-icon name="flag-o" />
        <p>地图找房</p>
      </van-col>
      <van-col span="6" @click="$router.push('/renthouse')">
        <van-icon name="description" />
        <p>去出租</p>
      </van-col>
    </van-row>
    <div class="group">
      <h3 class="group-title">
        租房小组
        <span class="more">更多</span>
      </h3>
      <van-row type="flex" justify="space-around" style="padding-bottom: 15px">
        <van-col span="11" v-for="item in MyGroups" :key="item.id">
          <van-image
            :src="baseUrl + item.imgSrc"
            width="50"
            height="50"
            style="float: left; padding-top: 19px"
          />
          <div class="tips">
            <p>{{ item.desc }}</p>
            <p>{{ item.title }}</p>
          </div>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
import { getSwiper, getGroups } from '@/api/Home'
import Vue from 'vue'
import { Lazyload } from 'vant'

Vue.use(Lazyload)
export default {
  async created () {
    try {
      const res = await getSwiper()
      this.mySwiper = res.data.body
      const res2 = await getGroups({ area: 'AREA|88cff55c-aaa4-e2e0' })
      this.MyGroups = res2.data.body
      console.log(res2)
    } catch (err) {
      console.log(err)
    }
  },
  data () {
    return {
      value: '',
      mySwiper: '',
      baseUrl: 'http://liufusong.top:8080',
      MyGroups: ''
    }
  },
  methods: {
    onSearch () {

    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.my-swipe .van-swipe-item {
  height: 212px;
  color: #fff;
  font-size: 20px;
  line-height: 212px;
  text-align: center;
  position: relative;
  img {
    width: 100%;
  }
}
.search {
  position: absolute;
  width: 360px;
  height: 34px;
  top: 2%;
  left: 2%;
  z-index: 1;
  .van-search {
    background-color: unset;
  }
}

.van-col {
  font-size: 18px;
  text-align: center;
  .van-icon {
    font-size: 50px;
    font-weight: normal;
    margin-top: 10px;
  }
  p {
    font-size: 14px;
    font-weight: 400;
  }
}

.group {
  background-color: #f6f5f6;
  overflow: hidden;
  padding: 0 10px;
  .group-title {
    position: relative;
    margin: 15px 0 15px 10px;
    font-size: 15px;
  }
}
.more {
  color: #787d82;
  position: absolute;
  right: 0;
  font-size: 14px;
  font-weight: 400;
}
.tips {
  font-size: 14px;
}
</style>
