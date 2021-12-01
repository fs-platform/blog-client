<template>
  <el-header>
    <el-menu
        class="el-menu"
        mode="horizontal"
        :default-active="activeIndex.toString()"
        router="true"
    >
      <el-menu-item index="0" route="/">Aron技术博客</el-menu-item>
      <template v-if="categoryList.length">
        <template v-for="item in categoryList" :key="item.id">
          <el-menu-item :index="item.id.toString()" :route="articleUrl(item.name)">
            {{item.name}}
          </el-menu-item>
        </template>
      </template>
    </el-menu>
    <div class="line"></div>
  </el-header>
</template>

<script>
import category from "../models/category";
import {reactive, ref} from "vue";

export default {
  name: "defaultHeader",
  async setup() {
    let activeIndex = ref('0')
    let {data} = await category()
    activeIndex = 1
    let categoryList = reactive(data.CategoryList)

    return {categoryList, activeIndex}
  },
  computed: {
    articleUrl(){
      return (id)=>{
          return "/articles/"+id
      }
    }
  }
}
</script>

<style scoped>
.el-header {
  padding: 0
}
</style>