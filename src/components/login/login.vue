<template>
  <div class="login">
    <div class="title-img">
      <img src="../../common/images/logo_login.png" alt="">
    </div>
    <div class="login-box">
      <div class="login-box-container">
        <div class="login-box-title">
          <h3>用户登录</h3>
          <p>
            <span>
              LOGIN MANAGEMENT PLATFORM
            </span>
          </p>
        </div>
        <div class="login-box-form">
          <el-form :model="loginForm" status-icon :rules="rules2" ref="loginForm" label-width="100px" size="medium ">
            <el-form-item label="用户名" prop="account">
              <el-input v-model="loginForm.account" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="psw">
              <el-input type="password" v-model="loginForm.psw" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item>
              <button @click="submitForm('loginForm')" class="sum-btn">登录</button>
              <!--<el-button type="primary" @click="submitForm('loginForm')">提交</el-button>-->
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    data(){
      return {
        loginForm: {
          account: '',
          psw: ''
        },
        rules2: {
          account: [{
            message: '请输入用户名',
            trigger: 'blur'
          }, {
            min: 4,
            max: 15,
            message: '长度在 4 到 16 个字符'
          }, {
            pattern: /^[a-zA-z]\w{4,15}$/,
            message: '字母、数字、下划线组成，字母开头'
          }
          ],
          psw: [{
            message: '请输入密码',
            trigger: 'blur'
          }, {
            min: 6,
            max: 30,
            message: '长度在 6 到 30 个字符'
          }, {
            pattern: /^(\w){6,20}$/,
            message: '只能输入6-20个字母、数字、下划线'
          }]
        },
      };
    },
    methods:{
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log(this.loginForm.account);
            this.$post('url',
              {account:this.loginForm.account,
              psw:this.loginForm.psw
              }).then((res)=>{

            })
          } else {
            this.$message({
              message: '请输入符合规范的用户名密码',
              type: 'warning'
            });
            return false;
          }
        });
      },
    },
    components:{},
    watch:{},
    computed:{},
    created(){},
    mounted(){}
  }
</script>
<style scoped lang="less" rel="stylesheet/less">
  @import "../../common/less/index.less";
  @import "login.less";
</style>
