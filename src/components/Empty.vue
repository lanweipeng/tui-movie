<template>
<div>
  <div class="empty">
      <div>
      <i class="iconfont icon-empty"></i>

      </div>
      <div class="text">还没有内容哟～</div>
      
    </div>
</div>
</template>
<script>
export default {
data(){
return {
}
},created(){},methods:{},components:{}
}
</script>
<style lang='scss' scoped>
.empty{
  padding-top: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  i{
    font-size: 60px;
    color: #747474;
  }
  .text{
    color: #939393;
    line-height: 40px;
  }
}
</style>