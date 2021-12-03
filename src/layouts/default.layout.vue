<template>
  <div class="common-layout">
    <el-container class="content">
      <suspense>
        <default-header></default-header>
      </suspense>
      <el-row class="main_body" :gutter="20" justify="space-around">
        <el-col :xs="20" :lg="15" :sm="20" :md="20" :xl="15">
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
.common-layout, .content {
  flex-direction: column;
  justify-content:space-between;
  font-size: 13px;
  min-height:100%
}
.sidebar{
  background: #fff;
  padding: 20px;
  margin: 20px;
}
</style>