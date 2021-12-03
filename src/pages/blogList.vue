<template>
  <el-card class="box-card">
    <el-scrollbar height="600px">
      <div  v-for="(item,index) in articles" :key="item.id" class="infinite-list-item">
        <div>{{ index+1 }}</div>
        <div><router-link :to="link(item.id)">{{ item.name }}</router-link></div>
        <div>{{ item.author }}</div>
        <div>
          <el-icon style="width: 1.2em">
            <star style="position: absolute; top: 2px;left:6px" />
          </el-icon>
          {{ item.like }}
        </div>
        <div>{{ this.formatDate(item.updated_at) }}</div>
      </div>
    </el-scrollbar>
  </el-card>
</template>


<script>
import {ref} from 'vue'
import {article} from '../models/article'

export default {
  name: "blogList",
  data() {
    return {
      articles: []
    }
  },
  watch: {
    $route: {
      handler(to) {
        let id = to.params.id ? to.params.id : 1
        this.fetchData(id)
      },
      immediate: true
    }
  },
  setup() {
    const count = ref(10)
    const load = () => {
      //count.value += 2
    }
    return {
      count,
      load,
    }
  },
  computed:{
    link(){
      return (id)=>{
        return "/articleDetail/"+id
      }
    }
  },
  methods: {
    async fetchData(id) {
      let {data} = await article(id)
      this.articles = data.ArticleList;
    },
    formatDate(inputTime) {
      var date = new Date(inputTime * 1000);  //时间戳为10位需*1000，时间戳为13位的话不需乘1000
      var y = date.getFullYear();
      var m = date.getMonth() + 1;
      m = m < 10 ? ('0' + m) : m;
      var d = date.getDate();
      d = d < 10 ? ('0' + d) : d;
      var h = date.getHours();
      h = h < 10 ? ('0' + h) : h;
      var minute = date.getMinutes();
      var second = date.getSeconds();
      minute = minute < 10 ? ('0' + minute) : minute;
      second = second < 10 ? ('0' + second) : second;
      return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second;
    }
  }
}
</script>

<style scoped>
.el-card{
  margin: 20px 0 20px 0;
}
.infinite-list {
  padding: 0;
  list-style: none;
}
.infinite-list-item {
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid #ccc;
  box-sizing: border-box;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
}

.el-card header {
  padding: 10px !important;
}
</style>