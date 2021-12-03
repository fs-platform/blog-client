<template>
  <div class="markBody">
    <v-md-preview :text="value"></v-md-preview>
  </div>
</template>

<script>
import article from "../models/article";

export default {
  name: "blogDetail",
  data () {
    return {
      value:""// value的值是要解析的markdown数据
    }
  },
  async created(){
     let {data} =await article.articleDetail(this.$route.params.article);
     console.log(data)
     this.value = data.content;
  }
}
</script>

<style scoped>
.markBody{
  background: #fff;
  margin:20px;
  overflow: scroll;
  height: 700px
}
</style>