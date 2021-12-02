<template>
  <el-card class="box-card">
    <ul v-infinite-scroll="load" class="infinite-list" style="overflow: auto">
      <li v-for="item in articles" :key="item.id" class="infinite-list-item">
        <div>{{ item.id }}</div>
        <div>{{ item.name }}</div>
        <div>{{ item.author }}</div>
        <div>{{ item.like }}</div>
        <div>{{ this.formatDate(item.updated_at) }}</div>
      </li>
    </ul>
  </el-card>
</template>


<script>
import {ref} from 'vue'
import article from '../models/article'

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
.infinite-list {
  height: 100%;
  padding: 0;
  margin: 0;
  list-style: none;
}
.box-card{
  margin-top: 20px;
}
.infinite-list-item {
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 50px;
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