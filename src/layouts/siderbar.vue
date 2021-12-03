  <template>
    <div class="section1">
      <p>
        <el-avatar size="large"
            src="https://cdn.learnku.com/uploads/avatars/34028_1545883788.jpeg!/both/100x100"
        ></el-avatar>
      </p>
      <p>Aron</p>
      <p>10.9k 声望</p>
      <p>维护者 Aron.Yao@ 251109226@qq.com</p>
      <p>个人签名：保持好奇，求知若饥，终身编程</p>
    </div>
    <div class="section1">
      <p>用户组:</p>
      <p>
        <el-tag type="success">架构师</el-tag>
        <el-tag type="info">技术大佬</el-tag>
        <el-tag type="danger">教程作者</el-tag>
        <el-tag type="warning">go爱好者</el-tag>
        <el-tag type="">php爱好者</el-tag>
      </p>
    </div>
  </template>

  <script>
  export default {
    name: "sidebar"
  }
  </script>

  <style scoped>
  .section1 {
    border: 1px solid rgba(34, 36, 38, .1);
    padding: 10px;
    margin: 10px;
    box-sizing: border-box;
    line-height: 15px;
    text-align: center;
  }
  .section1 p{
    line-height: 15px;
    font-size: 13px;
  }
  .el-tag{
    margin: 5px;
  }
  </style>