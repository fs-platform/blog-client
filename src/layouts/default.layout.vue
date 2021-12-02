<template>
  <div class="common-layout">
    <el-container class="content">
      <suspense>
        <default-header></default-header>
      </suspense>
      <el-row :gutter="20" justify="space-around">
        <el-col :xs="20" :lg="15" :sm="20" md="20" :xl="15">
          <div class="leftContent">
            <blog-list v-if="isShowList"></blog-list>
            <router-view/>
          </div>
        </el-col>
        <el-col :span="5" class="hidden-sm-and-down">
            <div class="sidebar">
              <sidebar/>
            </div>
        </el-col>
      </el-row>
      <default-footer/>
    </el-container>
  </div>
</template>

<script>
import defaultHeader from './header'
import defaultFooter from "./footer"
import blogList from "../pages/blogList";
import sidebar from "./siderbar";
import 'element-plus/theme-chalk/display.css'
export default {
  name: "commonLayout",
  components: {
    defaultHeader,
    defaultFooter,
    blogList,
    sidebar
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
  font-size: 12px;
}

.common-layout, .content {
  height: 100%;
  background: #f0f0f0;
  flex-direction: column;
  justify-content:space-between;
  font-size: 12px;
}
.sidebar{
  background: #fff;
  padding: 20px;
  height: 100%;
}
</style>