<template>
  <div class="choice">
    <!-- white-space: nowrap;
  overflow: hidden; 
   v-bind:style="{width:ulWidth+'px'}"
  -->
    <ul ref='ul'>
      <li
        v-for="item in list"
        :key="item.id"
        :class="active===item.id?'active':''"
        @click="select(item.id)"
      >{{item.name}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  props: ["list","id"],

  data() {
    return {
      active: this.id,
      ulWidth:0
    };
  },
  mounted(){
this.computeUlWidth()
  },
  created() {
  },
  methods: {
    computeUlWidth(){
let lis=this.$refs['ul'].children
  for(let i=0;i<lis.length;i++){
  const element=lis[i]
  this.ulWidth+=element.clientWidth
  this.ulWidth+=30
}
this.ulWidth+=20
    },
    select(id) {
      this.active = id;
      this.$emit('getId',id)
    }
  },
  components: {}
};
</script>
<style lang='scss' scoped>
.choice {
  overflow-x: scroll;
  ul {
  height: 30px;
  margin: 5px 10px;
  overflow-x: auto;
  overflow-y: hidden;
  display: flex;
  white-space: nowrap;
  overflow: hidden; 
  li {
    display: flex;
    line-height: 30px;
    padding: 0 20px;
    float: left;
    border-radius: 20px;
    color: #707070;
    &.active {
      // height: ;
      color: #ed9e37;
      background-color: #f4f4f4;
    }
  }
}
}

</style>