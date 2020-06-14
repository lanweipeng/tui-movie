<template>
  <div>
    <ul>
      <li
        v-for="item in myList"
        :key="item.id"
      >
        <!-- <div class="loading">
      <i class="iconfont icon-loading"></i>

      </div> -->
        <div class="image"><img
            :src="item.cover"
            alt=""
          ></div>
        <div class="detail">
          <div class="title">{{item.name}}<span>（{{item.showDateYear}}）</span></div>
          <div class="score-thumbs-up">
            <span><i class="iconfont icon-score"></i>{{item.tuiScore}}</span>
            <span class="thumbs-up"><i class="iconfont icon-thumbs-up"></i>{{item.collectTimes}}</span>
          </div>
          <div class="text">
            <div>导演：{{item.directorName}}</div>
            <div>主演：{{item.actorNames}}</div>
            <div>类型：{{item.typeName}}/{{item.regions}}</div>
          </div>

        </div>
      </li>
    </ul>

  </div>
</template>
<script>
export default {
  props: ["list"],
  watch: {
    list: function() {
      this.myList = this.list;
    }
  },
  data() {
    return {
      myList: this.list
    };
  },
  created() {},
  methods: {},
  components: {}
};
</script>
<style lang='scss' scoped>
.loading {
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;

  .icon-loading {
    font-size: 40px;
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
ul {
  background-color: #fff;
  li {
    padding: 0 15px 18px;
    display: flex;
    .image {
      width: 96px;
      height: 130px;
      background-color: #f1f1f1;
      img {
        width: 96px;
        height: 130px;
      }
    }
    .detail {
      margin-left: 10px;
      color: #7c7c7c;
      overflow: hidden;
      .title {
        font-size: 16px;
        font-weight: 700;
        color: #2d2d2d;
        text-overflow: -o-ellipsis-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        -webkit-box-orient: vertical;
        word-wrap: break-word;
        word-break: break-all;
        span {
          color: #7c7c7c;
        }
      }
      .score-thumbs-up {
        line-height: 32px;
        i {
          color: #7c7c7c;

          margin-right: 10px;
        }
        span {
          color: #7c7c7c;
        }
        .thumbs-up {
          margin-left: 20px;
        }
      }
      .text {
        line-height: 18px;
      }
    }
  }
}
</style>