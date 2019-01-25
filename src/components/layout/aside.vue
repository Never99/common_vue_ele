<template>
  <div class="aside">
    <el-menu :default-active="this.$route.path" router class="el-menu-vertical-demo" style="height: 100%;" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
      <el-submenu index="document">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">资源管理</span>
        </template>
        <el-menu-item index="/camera">
          <span slot="title">相机管理</span>
        </el-menu-item>
      </el-submenu>
      <el-menu-item index="/menu">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
    </el-menu>
    <!-- 缩放menu -->
    <div class="sub_scale_bot">
      <i class="el-icon-arrow-right" :class="{'i_right': isCollapse }" @click="changeMenu"></i>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    // 控制菜单栏显示隐藏
    changeMenu() {
      this.isCollapse = !this.isCollapse
    }
  }
}
</script>

<style scoped>
.aside{
  /* height: 100%; */
  overflow: hidden;
  position: relative;
}
.sub_scale_bot{
  width: 100%;
  height: 56px;
  line-height: 4;
  text-align: center;
  background: #fff;
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 2;
}
.sub_scale_bot i{
  display: inline-block;
  font-size: 30px;
  color: skyblue;
  cursor: pointer;
  transform: rotate(-180deg);
  transition: transform .3s linear;
}
.sub_scale_bot i.i_right{
  transform: rotate(0deg);
  transition: transform .3s linear;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
</style>
