<template>
<div>
  <div class="to-top">
   
<div class="iconfont icon-to-top"></div>

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
.to-top{
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: #eaeaea;
 position: relative;
.icon-to-top{
      color: #8a8a8a;

  position: absolute;
  top:50%;
  left: 50%;
  transform: translate(-50%,-50%);
  font-size: 60px;
}
}

</style>