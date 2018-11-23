<template>
  <div class="login">
    <div class="login-content">
      <h3>系统登陆</h3>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-color="#fff" label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户名：" prop="username">
          <el-input v-model="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码：" style="color: #fff;" prop="password">
          <el-input type="password" v-model="ruleForm.password"></el-input>
        </el-form-item>
        <el-form-item>
        <el-button type="primary" style="width: 100%;" @click="submitForm('ruleForm')">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { LoginSrv } from "./login.service";
export default {
  name: "login",
  data() {
    return {
      ruleForm: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      var _this = this;
      this.$refs[formName].validate(valid => {
        if (valid) {
          var params = {
            username: _this.ruleForm.username,
            password: _this.ruleForm.password
          };
          
          LoginSrv.getLogin(params).then(result => {
            if (result.code) {
              localStorage.setItem("token", result.data.token);
              _this.$router.push({ //临时跳转到home页面
								name: 'layout'
              });
              
              //如果是其他页面跳转过来，需要重新定向
              // window.location = 

            } else {
              this.$message.error(result.message);
            }
          })
        } else {
          alert("error submit!!");
        }
      });
    }
  },
  created() {
    localStorage.removeItem("token");
  }
};
</script>

<style>
.login{
  width: 100%;
  height: 100%;
  position: relative;
  background: url("../../images/login_bg.png")no-repeat;
}
.login h3{
  text-align: center;
  line-height: 100px;
}
.login-content{
  color: #fff;
  width: 500px;
  height: 320px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -250px;
  margin-top: -160px;
  background: url("../../images/login_content.png")no-repeat;
  background-size: 100% 100%;
  /* border: 1px solid #ccc; */
}
.login-content .el-form-item__label{
  color: #fff!important;
}
.demo-ruleForm{
  width: 88%;
}
</style>
