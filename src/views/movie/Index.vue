<template>
  <div id='movie_list'>
    <van-pull-refresh @refresh="onRefresh">

    <head-top
      head-title="电影列表"
      go-back="true"
    ></head-top>
    <div>
      <div class="content" >
        <a href="#movie_list">
        <to-top class="to-top"></to-top>

        </a>
        
  <div class="chioces">
        <choice
          :list="[{id:1,name:'推时间'},{id:2,name:'推评分'},{id:3,name:'喜欢数'},
 {id:4,name:'新上线'}]"
          @getId="getSortType"
          :id="sortType"
        ></choice>
        <choice
          :list="[{id:0,name:'全部地区'},
      {id:1,name:'华语'},
      {id:91,name:'港台'},
      {id:92,name:'日韩'},
      {id:93,name:'东南亚'},
      {id:8,name:'美国'},
      {id:9,name:'其他'}]"
          @getId="getRegionId"
          :id="regionId"
        ></choice>
        <choice
          :list="typeArr"
          @getId="getType"
          :id="type"
        ></choice>
        <choice
          :list="[
      {id:0,name:'全部年份'},
      {id:1,name:'2010-2020'},
      {id:2,name:'2010-2010'},
      {id:3,name:'1990-2000'}]"
          @getId="getMovieDate"
          :id="movieDate"
        ></choice>
        <choice
          :list="[
      {id:0,name:'全部方式'},
      {id:1,name:'可跳转'},
      {id:2,name:'下载链接'},{id:3,name:'仅推荐'}]"
          @getId="getWatchType"
          :id="watchType"
        ></choice>
       
      </div>
       <div class="movie-list">
        <movie :list="movieList"></movie>
        <loading
          class="loading"
          v-if="loading===true"
        ></loading>
        <div class="load-more" v-else>上拉加载更多{{count}}</div>
        <empty v-if="movieList.length===0&&loading===false"></empty>

      </div>
      </div>
    
    </div>
    </van-pull-refresh>
  </div>
</template>
<script>
import HeadTop from "@/components/header/Head";
import Choice from "@/components/Choice";
import Movie from "@/components/Movie";
import Loading from "@/components/Loading";
import ToTop from "@/components/ToTop";
import Empty from '@/components/Empty'
export default {
  data() {
    return {
      count: 0,
      regionId: 0,
      type: 0,
      movieDate: 0,
      sortType: 1,
      watchType: 0,
      page: 1,
      movieList: [],
      typeArr: [
        { id: 0, name: "全部类型" },
        { id: 11, name: "喜剧" },
        { id: 21, name: "爱情" },
        { id: 31, name: "动作" },
        { id: 41, name: "恐怖" },
        { id: 51, name: "动画" },
        { id: 6, name: "其他" }
      ]
    };
  },
  created() {
    // http://app1.naoffer.com/movie/list/ajax/load?sortType=1&regionId=1&type=1&movieDate=1&page=1&watchType=1
    this.getData();
  },
  methods: {
    getData() {
      this.loading = true;
      this.$http
        .get("/movie/list/ajax/load", {
          params: {
            regionId: this.regionId,
            type: this.type,
            movieDate: this.movieDate,
            sortType: this.sortType,
            watchType: this.watchType,
            page: this.page
          }
        })
        .then(res => {
          this.loading = false;

          let { data: movieList } = res.data;
          movieList = movieList.map(item => {
            item.actorNames = item.actorNames.split(" ").join("/");
            item.regions = item.regions.split(" ").join("/");
            item.showDateYear = new Date(item.showDate).getFullYear();
            item.typeName = this.getTypeNameById(item.type);
            return item;
          });
          this.movieList = movieList;
        });
    },
    onRefresh(){
      this.count++;
      console.log('hh')
    },
    getTypeNameById(id) {
      for (let i = 0; i < this.typeArr.length; i++) {
        const item = this.typeArr[i];
        if (item.id === id) {
          return item.name;
        }
      }
    },
    getRegionId(id) {
      this.regionId = id;
      this.getData();
    },
    getType(id) {
      this.type = id;
      this.getData();
    },
    getMovieDate(id) {
      this.movieDate = id;
      this.getData();
    },
    getWatchType(id) {
      this.watchType = id;
      this.getData();
    },
    getSortType(id) {
      this.sortType = id;
      this.getData();
    }
  },
  components: {
    HeadTop,
    Choice,
    Movie,
    Loading,
    ToTop,
    Empty
  }
};
</script>
<style lang='scss' scoped>
.content{
  position: relative;
  .to-top{
    z-index: 1;
position: fixed;
right: 20px;
bottom: 100px;
  }
  .chioces {
  margin: 5px 0;
}
.movie-list {
  background-color: #fff;
  position: relative;
  .loading {
    position: absolute;
  }
  .load-more{
    text-align: center;
  }
}
}
</style>