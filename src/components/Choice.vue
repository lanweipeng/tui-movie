<template>
  <div>
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

  ul {
  height: 30px;
  margin: 10px 8px;
  white-space: nowrap;
  overflow: hidden;
  overflow-x: auto;
  overflow-y: hidden;
  li {
  display: inline-block;
  border-radius: 20px;
    line-height: 28px;
    padding: 0 15px;

    color: #707070;
    &.active {
      color: #ed9e37;
      background-color: #f4f4f4;
    }
  }
}

</style>