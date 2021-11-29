<template>
  <el-header>
    <el-menu
        class="el-menu-demo"
        mode="horizontal"
    >
      <el-menu-item index="1">Aron技术博客</el-menu-item>
      <el-menu-item index="2">php</el-menu-item>
      <el-menu-item index="3">go</el-menu-item>
      <el-menu-item index="4">docker</el-menu-item>
      <el-menu-item index="5">mysql</el-menu-item>
      <el-menu-item index="6">redis</el-menu-item>
      <el-menu-item index="7">nginx</el-menu-item>
    </el-menu>
    <div class="line"></div>
  </el-header>
</template>

<script>
import axios from "../utils/axios";
export default {
  name: "header",
  setup() {
    axios.get("/11231")
  },
}
</script>

<style scoped>
.el-header {
  padding: 0
}
</style>