<template>
  <div class="registerBox">
    <div class="registerBox_background"></div>

    <div class="registerPanel">
      <div class="registerPanel_content">
        <div class="registerPanel_title">创建您的账户</div>

        <el-form  :model="user_register_form" :rules="rules" ref="registerFormRef" class="registerPanel_form">

          <el-form-item class="register_row" prop="username">
            <div class="register_form_title">Steam 账户名称</div>
            <el-input v-model="user_register_form.username" class="text_field" type="text" name="username"></el-input>
          </el-form-item>

          <el-form-item class="register_row" prop="email">
            <div class="register_form_title">电子邮件地址</div>
            <el-input v-model="user_register_form.email" class="text_field" type="text" name="email"  ></el-input>
          </el-form-item>

          <el-form-item class="register_row" prop="phone">
            <div class="register_form_title">手机号码</div>
            <el-input v-model="user_register_form.phone" class="text_field" type="text" name="email"></el-input>
          </el-form-item>

          <el-form-item class="register_row">
            <div class="register_form_title">短信验证码</div>
            <el-input class="text_field text-field-message" type="text" name="email"></el-input>
            <div ref="showTime" class="getMessage" @click="sendSMS">获取验证码</div>
          </el-form-item>

          <el-form-item class="register_row" prop="password">
            <div class="register_form_title">密码</div>
            <el-input v-model="user_register_form.password" class="text_field" type="text" name="password"></el-input>
          </el-form-item>

            <!-- 人机验证 -->
          <el-form-item>
            <Vcode :show="isHidden" @success="success" @close="close" />
          </el-form-item>

          
          <el-form-item>
              <el-button class="registerButton" @click="registerSubmit">注册</el-button>
          </el-form-item>
          

        </el-form>
      </div>
    </div>

    <div class="footerSpace"></div>
  </div>
</template>

<script>
import Vcode from "vue-puzzle-vcode";
import router from "../../router/index"
/* 手机验证码 */
let intervalObj;
let time = 5;

export default {
  name: "register",
  components: {
    Vcode,
  },
  data(){
    return{
      isHidden:false,    // 验证码模态框是否出现
      user_register_form:{
        username:'123',
        email:'123',
        password:'123',
        phone:'123',
      },
      rules: {
        username:[
          {required: true, message: '请输入账户名称', trigger: 'blur'},
          {min:3,max:16,message: '长度在3~16个字符之间',trigger: 'blur'}
        ],
        email:[
          {required: true, message: '请输入邮箱', trigger: 'blur'},
        ],
        password:[
          {required: true, message: '请输入密码', trigger: 'blur'},
          {min:3,max:16,message: '长度在3~16个字符之间',trigger: 'blur'}
        ],
        phone: [
          {required: true, message: '请输入手机号', trigger: 'blur'},

        ]

      }
    }
  },
  methods: {
    registerSubmit() {

      // 注册表单提交
      this.$refs.registerFormRef.validate((valid)=>{
          if(valid){
              let username = this.username;
              let email = this.email;
              let password = this.password;
              let phone = this.phone;
              // 访问后台
              this.axios.get('http://localhost:9000/register',{
                  'username':username,
                  'email':email,
                  'password':password,
                  'phone':phone,
              }).then(function (response) {
                  if(response.data.status === 0){
                      // 注册成功 跳转登录页面
                      router.push("/login")
                  }
                  else{
                      // 注册失败
                      console.log(response.data.data.message);
                  }
              }).catch(function (response) {
                  // 请求失败后的处理
                  alert("数据传输失败");
              })

             this.$message({
                 message:"提交成功",
                 type:'success'
             })
          }
          else{
              this.$message({
                 message:"提交失败",
                 type:'error'
             })
          }
      })
    },
    // 用户通过了验证
    success(msg) {
      this.isHidden = false; // 通过验证后，隐藏模态框
      this.$message({
        message:'注册成功',
        duration:2000,
        type:'success'
      })
    },

    // 用户点击遮罩层，关闭模态框
    close() {
      this.isHidden = false;
    },

    sendSMS(){
      this.$message({
        message: '发送成功',
        type: "success",
      })
      intervalObj = window.setInterval(this.timer,1000)
    },
    timer(){

      if(time == 0){
        this.$refs.showTime.innerHTML = "获取验证码";
        time = 5
        window.clearInterval(intervalObj)
      } else {
        time--
        this.$refs.showTime.innerHTML = time + "秒";

      }


    }
  },
}
</script>

<style lang="scss">
  .registerBox{
    height: 800px;
    width: 100%;
    background-color: #1f2428;

    .registerBox_background{
      width: 590px;
      height: 800px;
      display: inline-block;
      background: radial-gradient(30% 40% at 40% 30%, rgba(33, 36, 41, .5) 0%, rgba(33, 36, 41, 0) 100%) no-repeat ,url('/resources/background/loginBackground.jpg') 74% 87%  no-repeat, #212429;
    }

    .registerPanel{
      width: 700px;
      height: 622px;
      padding: 50px;
      display: inline-block;
      position: absolute;
      left: 482px;

      .registerPanel_content{
        padding: 20px 16px;
        box-sizing: border-box;

        .registerPanel_title{
          text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          font-size: 34px;
          color: #ffffff;
          margin-bottom: 30px;
          font-weight: 200;
          letter-spacing: 2px;
        }

        .registerPanel_form{

          .register_row{
            margin-bottom: 18px;
            .register_form_title{
              margin-bottom: 5px;
              color: #b8b6b4;
              font-size: 14px;
            }

            .text_field{
              max-width: 300px;
              background: #32353C;
              border-radius: 3px;
              color: #E9E9E9;
              padding: 10px 6px;
              display: block;
              box-shadow: none;
              width: 100%;
              height: 15px;
              transition: border ease-in-out .5s;
              border: 1px solid #26282D;
              outline: none;
              font-weight: normal;
            }

            .text-field-message{
              width: 170px;
              display: inline-block;
            }

            .getMessage{
              width: 80px;
              height: 20px;
              line-height: 20px;
              color: #b8b6b4;
              padding: 8px 6px;
              border: 1px solid #8d8c8c;
              margin-left: 35px;
              border-radius: 3px;
              text-align: center;
              display: inline-block;
              &:hover{
                cursor: pointer;
                color: white;
                border-color: white;
              }
            }

            .el-form-item__content .el-input .el-input__inner{
              border-radius: 0px;
              background-color: #32353C;
              border: none;
              padding: 0;
              color: white;
              height: 15px;
              vertical-align: center;
              display: block;
            }

            label{
              margin-left: 5px;
            }
          }

          .verification{
            width: 300px;
            height: 75px;
            border: 1px solid #525252;
            border-radius: 4px;
            background: #222;
            font-size: 14px;
            color: #fff;
            line-height: 75px;
            text-indent: 2em;
          }

          .registerButton{
            margin: 20px 0px;
            width: 130px;
            height: 36px;
            line-height: 36px;
            font-size: 15px;
            color: #c3e1f8;
            background: linear-gradient( to right, #3ca3f1 , #2460d0);
            text-align: center;
            border-radius: 2px;
            border: none;
            span{
                position: relative;
                top: -10px;
            }
            &:hover{
              color: white;
              background: linear-gradient( to right, #47bfff , #3287e3);
              cursor: pointer;
            }
          }
        }
      }
    }

    .footerSpace{
      width: 100%;
      height: 100px;
      background-color: #1f2428;
      margin: -4px 0 0 0;
    }

  }
</style>