<template>
<div>
  <div v-for="item in list">{{item}}</div>
</div>
</template>
<script>
export default {
  props:['list'],

data(){
return {
}
},created(){
  console.log(this.list)
},methods:{},components:{}
}
</script>
<style lang='less' scoped>
</style>