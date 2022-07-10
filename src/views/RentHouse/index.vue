<template>
  <div>
    <van-nav-bar title="发布房源" left-arrow @click-left="$router.back()" />
    <div class="list-header">房源信息</div>
    <van-cell
      title="小区名称"
      is-link
      :value="$store.state.communityName"
      @click="$router.push('rental')"
    />
    <van-form>
      <van-field v-model="rent" label="租金" placeholder="请输入租金/月" />
      <van-field v-model="area" label="建筑面积" placeholder="0" />
      <div class="zujin">￥/月</div>
      <div class="zujin2">m²</div>
    </van-form>
    <Channels
      :label="item"
      v-for="(item, index) in choose"
      :key="index"
    ></Channels>
    <van-cell title="房屋标题" />
    <van-form>
      <van-field
        v-model="title"
        placeholder="请输入标题（例如：整租 小区名 2室 5000元)"
      />
    </van-form>
    <van-cell title="房屋图像" />
    <van-uploader :after-read="afterRead" upload-icon="plus" />
    <van-cell title="房屋配置" />
    <ul class="HousePackage_root">
      <li class="HousePackage_item">
        <i class="iconfont icon-yigui HousePackage_icon"></i>
        <p class="neirong">衣柜</p>
      </li>
      <li class="HousePackage_item">
        <i class="iconfont icon-xiyiji HousePackage_icon"></i>
        <p class="neirong">洗衣机</p>
      </li>
      <li class="HousePackage_item">
        <i class="iconfont icon-kongtiao HousePackage_icon"></i>
        <p class="neirong">空调</p>
      </li>
      <li class="HousePackage_item">
        <i class="iconfont icon-meiqitianranqi HousePackage_icon"></i>
        <p class="neirong">天然气</p>
      </li>
      <li class="HousePackage_item">
        <i class="iconfont icon-bingxiang HousePackage_icon"></i>
        <p class="neirong">冰箱</p>
      </li>
      <li class="HousePackage_item">
        <i class="iconfont icon-shuinuanqigongcheng HousePackage_icon"></i>
        <p class="neirong">暖气</p>
      </li>
      <li class="HousePackage_item">
        <i class="iconfont icon-dianshiji HousePackage_icon"></i>
        <p class="neirong">电视</p>
      </li>
      <li class="HousePackage_item">
        <i
          class="iconfont icon-haofangtuo400iconfont2reshuiqi HousePackage_icon"
        ></i>
        <p class="neirong">热水器</p>
      </li>
      <li class="HousePackage_item">
        <i class="iconfont icon-kuandai HousePackage_icon"></i>
        <p class="neirong">宽带</p>
      </li>
      <li class="HousePackage_item">
        <i class="iconfont icon-shafa HousePackage_icon"></i>
        <p class="neirong">沙发</p>
      </li>
    </ul>
    <van-cell title="房屋图像" />
    <div class="van-hairline--bottom"></div>
    <textarea
      rows="5"
      placeholder="请输入房屋描述信息"
      style="height: 128px"
    ></textarea>
    <div class="Add_bottom">
      <van-button type="primary" class="Add_cancel">取消</van-button>
      <van-button type="primary" class="Add_confirm">提交</van-button>
    </div>
  </div>
</template>

<script>
import Channels from '@/components/Channels.vue'
export default {
  created () { },
  data () {
    return {
      rent: '',
      area: '',
      title: '',
      choose: ['户型', '所在楼层', '朝向']
    }
  },
  methods: {
    afterRead (file) {
      // 此时可以自行将文件上传至服务器
      // console.log(file)
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {
    Channels
  }
}
</script>

<style scoped lang='less'>
.list-header {
  padding: 15px 15px 9px;
  font-size: 14px;
  color: #888;
  width: 100%;
  box-sizing: border-box;
  color: #21b97a;
  background-color: #fff;
  font-size: 15px;
  border-bottom: 1px solid rgb(237, 237, 237);
}
.zujin {
  position: absolute;
  right: 15px;
  top: 150px;
  min-width: 0;
  max-height: 21px;
  overflow: hidden;
  padding-right: 0;
  line-height: 1;
  color: #888;
  font-size: 15px;
  margin-left: 5px;
}
.zujin2 {
  position: absolute;
  right: 15px;
  top: 193px;
  min-width: 0;
  max-height: 21px;
  overflow: hidden;
  padding-right: 0;
  line-height: 1;
  color: #888;
  font-size: 15px;
  margin-left: 5px;
}
.HousePackage_root {
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  background: #fff;
  .HousePackage_item {
    margin: 10px 0;
    width: 20%;
    line-height: 23px;
    .HousePackage_icon {
      font-size: 36px;
    }
    .iconfont {
      font-family: "iconfont" !important;
      font-style: normal;
    }
    .neirong {
      font-size: 14px;
    }
  }
}

textarea {
  color: #000;
  font-size: 14px;
  width: 100%;
  margin-bottom: 45px;
  padding: 0;
  border: 0;
  display: block;
}
.Add_bottom {
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
  height: 45px;
  z-index: 1;
  color: #fff;
  font-size: 15px;
  background-color: #fff;
  .Add_cancel {
    width: 186px;
    color: #21b97a;
    background-color: #fff;
    height: 100%;
    line-height: 45px;
    box-sizing: border-box;
    flex: 1;
    min-width: 10px;
  }
  .Add_confirm {
    width: 186px;
    height: 45px;
    line-height: 45px;
    background-color: #21b97a;
    box-sizing: border-box;
    flex: 1 1;
    min-width: 10px;
  }
}
</style>
