<template>
  <div>
    <!-- 标题部分 -->
    <div class="My_title">
      <img
        class="My_bg"
        src="http://liufusong.top:8080/img/avatar.png"
        alt="背景图"
        v-if="user.token"
      />
      <img
        class="My_bg"
        src="http://liufusong.top:8080/img/profile/bg.png"
        alt="背景图"
        v-else
      />
      <div class="My_info">
        <div class="My_Icon" v-if="user.token">
          <img
            class="My_avatar"
            width="100%"
            src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fgao7pic.gao7.com%2Fc949736276a342b9aeb582a8de4f94e4.png&refer=http%3A%2F%2Fgao7pic.gao7.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1658912648&t=bd8eb8c7f1910b51716fc82b528c1789"
            alt="icon"
          />
        </div>
        <div class="My_Icon" v-else>
          <img
            class="My_avatar"
            width="100%"
            src="http://liufusong.top:8080/img/profile/avatar.png"
            alt="icon"
          />
        </div>
        <div class="My_user">
          <div class="My_name" v-if="user.token">暗黑佟大为</div>
          <div class="My_name" v-else>游客</div>
          <div class="My_edit">
            <van-button
              type="primary"
              size="small"
              color="#21B97A"
              @click="logout"
              v-if="user.token"
              >退出</van-button
            >
            <van-button
              type="primary"
              size="small"
              color="#21B97A"
              @click="$router.push('/login')"
              v-else
              >去登录</van-button
            >
          </div>
        </div>
      </div>
    </div>
    <!-- 中间部分 -->
    <div style="padding-top: 0.775rem">
      <van-row type="flex" justify="center">
        <van-col span="8" v-for="(item, index) in options" :key="index">
          <van-icon :name="names[index]" size="22" />
          <p>{{ item }}</p>
        </van-col>
      </van-row>
    </div>
    <!-- 尾部 -->
    <div class="My_ad">
      <img src="http://liufusong.top:8080/img/profile/join.png" alt="" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  created () { },
  data () {
    return {
      names: ['star-o', 'wap-home-o', 'underway-o', 'credit-pay', 'manager-o', 'service-o'],
      options: ['我的收藏', '我的出租', '看房记录', '成为房主', '个人资料', '联系我们']
    }
  },
  methods: {
    async logout () {
      try {
        await this.$dialog.confirm({ message: '确定退出吗?' })
        this.$store.commit('setUser', {})
      } catch (err) {
        console.log(err)
      }
    }
  },
  computed: {
    ...mapState(['user'])
  },
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.My_title {
  min-height: 300px;
  position: relative;
}
.My_info {
  position: absolute;
  background: #fff;
  width: 75%;
  height: 55%;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 10px 3px #ddd;
  margin: 50px auto 0;
  padding: 0 20px;
  text-align: center;
  font-size: 13px;
}
.My_Icon {
  position: relative;
  transform: translateY(-50%);
  border-radius: 50%;
  width: 60px;
  height: 60px;
  border: 5px solid #f5f5f5;
  display: inline-block;
  box-shadow: 0 2px 2px #bdbdbd;
}
.My_avatar {
  width: 100%;
  border-radius: 50%;
}
.My_bg {
  width: 100%;
}
.My_name {
  margin-top: -15px;
  margin-bottom: 10px;
}
.van-button {
  margin-top: 10px;
  width: 70px;
  border-radius: 5px;
  font-size: 13px;
}
.van-col {
  margin-bottom: 25px;
  font-size: 13px;
  color: #333;
  text-align: center;
}
.My_ad {
  width: 355px;
  margin: 0 auto;
  img {
    width: 100%;
  }
}
</style>
