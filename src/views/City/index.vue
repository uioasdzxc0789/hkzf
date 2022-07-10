<template>
  <div>
    <!-- 标题 -->
    <van-nav-bar
      title="城市列表"
      left-arrow
      @click-left="$router.back()"
    />
    <van-index-bar :index-list="indexList" highlight-color="#21b97a">
      <div v-for="(item, index) in theList" :key="index">
        <van-index-anchor :index="index" style="font-size: 14px">{{
          index === "#" ? "当前城市" : index === "Hot" ? "热门城市" : index
        }}</van-index-anchor>
        <van-cell
          v-for="(item2, ind) in item"
          :key="ind"
          :title="item2.label"
          style="height: 50px; font-size: 16px"
          @click="checkOne(item2)"
        ></van-cell>
      </div>
    </van-index-bar>
  </div>
</template>

<script>
import Citys from '@/utils/City'
import { getCity, HotCity } from '@/api/Home'
export default {
  async created () {
    try {
      // 所有城市
      const res = await getCity()
      console.log(res)
      // 热门城市
      const res2 = await HotCity()
      console.log(res2)
      const obj = {
        '#': [this.$store.state.defaultCityInfo],
        Hot: res2.data.body
      }
      this.theList = { ...obj, ...Citys(res.data.body) }
      console.log(this.theList)
      this.indexList = Object.keys(this.theList)
      console.log(this.indexList)
    } catch (err) {
      console.log(err)
    }
  },
  data () {
    return {
      indexList: [],
      theList: []
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

</style>
