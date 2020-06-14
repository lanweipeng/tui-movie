<template>
<div>
   <div class="loading">
      <i class="iconfont icon-loading"></i>
加载中
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
.loading{
    position: fixed;
    // left: 0;
    // top: 0;
    left: 50%;
    top:50%;
    transform: translate(-50%,-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    z-index: 999;

    .icon-loading{
      font-size: 60px;
      position: relative;
  animation: icon-loading 2.5s infinite;
}
}

@keyframes icon-loading {
    0% {

        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>