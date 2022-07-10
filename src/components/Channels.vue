<template>

  <div>

    <van-field
      readonly
      clickable
      :label="label"
      :value="value"
      placeholder="请选择"
      @click="showPicker = true"
    />

    <van-popup v-model="showPicker" position="bottom">

      <van-picker
        show-toolbar
        :columns="columns"
        @cancel="showPicker = false"
        @confirm="onConfirm"
      />

    </van-popup>

  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    }
  },
  created () {
    if (this.label === '户型') {
      this.columns = ['一室', '二室', '三室', '四室', '四室+']
    } else if (this.label === '所在楼层') {
      this.columns = ['高楼层', '中楼层', '低楼层']
    } else {
      this.columns = ['东', '西', '南', '北', '东南', '东北', '西南', '西北']
    }
  },
  data () {
    return {
      value: '',
      showPicker: false,
      columns: []
    }
  },
  methods: {
    onConfirm (value) {
      this.value = value
      this.showPicker = false
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
</style>
