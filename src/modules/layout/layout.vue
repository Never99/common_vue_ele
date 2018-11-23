<template>
  <div class="home">
    <!-- 使用element-ui默认layout布局 -->
    <el-container style="height: 100%">
      <el-header height="56px">
        <!-- 头部 -->
        <header-mes></header-mes>
      </el-header>
      <el-container>
        <!-- <el-aside width="200px"> -->
          <!-- 侧边栏 -->
          <aside-mes></aside-mes>
        <!-- </el-aside> -->
        <el-container>
          <el-main>
            <!-- 内容区域 -->
            <content-mes></content-mes>
          </el-main>
          <el-footer height="56px">
            <!-- 页脚 -->
            <footer-mes></footer-mes>
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import headerMes from "@/components/layout/header"
import asideMes from "@/components/layout/aside"
import contentMes from "@/components/layout/content"
import footerMes from "@/components/layout/footer"
export default {
  name: "home",
  components: {
    headerMes,
    asideMes,
    contentMes,
    footerMes
  }
};
</script>

<style scoped>
.home {
  width: 100%;
  height: 100%;
}
.el-header,
.el-footer {
  padding: 0;
  color: #333;
  text-align: center;
  line-height: 56px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  width: 100%;
  height: 100%;
  padding: 0;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
