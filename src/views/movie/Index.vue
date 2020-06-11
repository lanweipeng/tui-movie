<template>
  <div>
    <head-top
      head-title="电影列表"
      go-back="true"
    ></head-top>
    <div>
      <choice :list="['a','h']"></choice>
    </div>
  </div>
</template>
<script>
import HeadTop from "@/components/header/Head";
import Choice from "@/components/Choice";
export default {
  data() {
    return {};
  },
  created() {},
  methods: {},
  components: {
    HeadTop,
    Choice
  }
};
</script>
<style lang='less' scoped>
</style>