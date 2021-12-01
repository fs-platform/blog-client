<template>
  <div class="common-layout">
    <el-container class="content">
      <suspense>
        <default-header></default-header>
      </suspense>
      <el-main>
        <blog-list v-if="isShowList"></blog-list>
        <router-view/>
      </el-main>
      <default-footer/>
    </el-container>
  </div>
</template>

<script>
import defaultHeader from './header'
import defaultFooter from "./footer"
import blogList from "../pages/blogList";

export default {
  name: "commonLayout",
  components: {
    defaultHeader,
    defaultFooter,
    blogList
  },
  computed: {
    isShowList() {
      return this.$route.name === 'home';
    }
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