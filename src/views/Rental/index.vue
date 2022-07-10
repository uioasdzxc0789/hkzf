<template>
  <div>
    <form action="/">
      <van-search
        v-model="searchText"
        show-action
        placeholder="请输入搜索关键词"
        @cancel="$router.back()"
      />
    </form>
    <SearchSuggest
      :searchText="searchText"
      v-if="searchText !== ''"
    ></SearchSuggest>
  </div>
</template>

<script>
import SearchSuggest from '@/views/Rental/components/SearchSuggest.vue'
export default {
  created () { },
  data () {
    return {
      searchText: ''
    }
  },
  methods: {

  },
  computed: {},
  watch: {},
  filters: {},
  components: {
    SearchSuggest
  }
}
</script>

<style scoped lang='less'>
</style>
