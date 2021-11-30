<template>
  <div class="common-layout">
    <el-container class="content">
      <suspense>
        <default-header></default-header>
      </suspense>
      <el-main>body</el-main>
      <default-footer/>
    </el-container>
  </div>
</template>

<script>
import defaultHeader from './header'
import defaultFooter from "./footer"

export default {
  name: "commonLayout",
  components: {
    defaultHeader,
    defaultFooter
  }
}
</script>

<style scoped>
.el-main {
  background-color: #e9eef3;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 160px;
}

.common-layout, .content {
  height: 100%;
  background: #f0f0f0;
  flex-direction: column;
}

</style>