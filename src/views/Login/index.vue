<template>
  <div>
    <van-nav-bar title="账号登录">
      <template #left>
        <van-icon name="arrow-left" @click='$router.back()'/>
      </template>
    </van-nav-bar>
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="username"
        placeholder="请输入账号"
        :rules="[
          { required: true, message: '请填写用户名' },
          { pattern: /^[a-zA-Z0-9_-]{4,16}$/, message: '用户名格式错误' },
        ]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        placeholder="请输入密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px">
        <van-button block color="#21b97a" native-type="submit">登录</van-button>
      </div>
    </van-form>
    <a href="#" class="zc">
      <p class="zhuce">还没有账号，去注册~</p>
    </a>
  </div>
</template>

<script>
import { login } from '@/api/Login'
export default {
  created () { },
  data () {
    return {
      username: 'itheima',
      password: '123456'
    }
  },
  methods: {
    async onSubmit (values) {
      const res = await login(values)
      console.log(res)
      this.$store.commit('setUser', res.data.body)
      this.$router.push({ name: 'my' })
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.van-field {
  margin-top: 30px;
  ::placeholder {
    font-size: 17px;
  }
}
.zc {
  color: #666;
  font-size: 15px;
  text-align: center;
}
</style>
