<template>
  <el-header>
    <el-menu
        class="el-menu-demo"
        mode="horizontal"
    >
      <el-menu-item index="0">Aron技术博客</el-menu-item>
      <el-menu-item :index="item.id" :key="item.id" v-for="item in categoryList">{{ item.name }}</el-menu-item>
    </el-menu>
    <div class="line"></div>
  </el-header>
</template>

<script>
import category from "../models/category";
import {reactive} from "vue";

export default {
  name: "defaultHeader",
  async setup() {
    let {data} = await category()
    let categoryList = reactive(data.CategoryList)
    return {categoryList}
  }
}
</script>

<style scoped>
.el-header {
  padding: 0
}
</style>