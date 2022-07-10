<template>
  <div>
    <van-cell
      icon="search"
      v-for="(item, index) in SuggestList"
      :key="index"
      v-model="item.communityName"
      @click="setName(item.communityName)"
    >
    </van-cell>
  </div>
</template>

<script>
import { searchHouse } from '@/api/search'
let timer = null
export default {
  props: {
    searchText: {
      type: String,
      require: true
    }
  },
  created () { },
  data () {
    return {
      SuggestList: []
    }
  },
  methods: {
    setName (name) {
      this.$store.commit('setName', name)
      this.$router.back()
    }
  },
  computed: {},
  watch: {
    searchText: {
      handler (newVal) {
        clearTimeout(timer)
        timer = setTimeout(async () => {
          try {
            const res = await searchHouse({ name: newVal, id: 'AREA|88cff55c-aaa4-e2e0' })
            console.log(res)
            this.SuggestList = res.data.body
          } catch (err) {
            console.log(err)
          }
        }, 500)
      },
      immediate: true
    }
  },
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
</style>
