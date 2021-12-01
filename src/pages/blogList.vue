<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>{{$route.params.id}}</span>
      </div>
    </template>
    <ul v-infinite-scroll="load" class="infinite-list" style="overflow: auto">
      <li v-for="i in count" :key="i" class="infinite-list-item">
        <div>文章标题</div>
        <div>文章更新日前</div>
        <div>作者</div>
        <div>点赞数量</div>
      </li>
    </ul>
  </el-card>
</template>


<script>
import { ref } from 'vue'
export default {
  name: "blogList",
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
}
</script>

<style scoped>
.infinite-list{
  height: 100%;
  padding: 0;
  margin: 0;
  list-style: none;
}
.infinite-list-item{
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
.el-card header{
  padding: 10px!important;
}
</style>