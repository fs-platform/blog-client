<template>
  <el-header>
    <el-menu
        class="el-menu"
        mode="horizontal"
        :default-active="activeIndex.toString()"
        :router=true
    >
      <el-menu-item index="0" route="/">Aron技术博客</el-menu-item>
      <template v-if="categoryList.length">
        <template v-for="item in categoryList" :key="item.id">
          <el-menu-item :index="item.id.toString()" :route="articleUrl(item)">
            {{ item.name }}
          </el-menu-item>
        </template>
      </template>
      <el-menu-item index="999" route="/support">support</el-menu-item>
    </el-menu>
    <div class="line"></div>
  </el-header>
</template>

<script>
import category from "../models/category";
import {getCurrentInstance, reactive, ref} from "vue";

export default {
  name: "defaultHeader",
  async setup() {
    const {proxy} = getCurrentInstance()
    let activeIndex = ref('0')
    let {data} = await category()
    let name = proxy.$route.name
    if (name === "support") {
      activeIndex = "999"
    } else if (name === "articles") {
      activeIndex = proxy.$route.params.id
    } else {
      activeIndex = 0
    }
    let categoryList = reactive(data.CategoryList)
    const handleOpen = (key, keyPath) => {
      console.log(key, keyPath)
    }
    return {categoryList, activeIndex, handleOpen}
  },
  computed: {
    articleUrl() {
      return (item) => {
        return "/articles/" + item.id
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