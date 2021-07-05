<template>
  <div class="login">
    <HeaderBox></HeaderBox>
    <template>
      <div class="loginBox">
        <div class="loginBox_left">

          <div class="loginBox_background"></div>

          <div class="loginPanel">

            <div class="loginPanel_content">

              <div class="loginPanel_title">管理员登录</div>

              <el-form ref="loginFormRef" :model="user_login_form" :rules="rules" class="login_form">

                <el-form-item class="login_row" prop="account">
                  <div class="login_form_title">Steam 帐户名称</div>
                  <el-input class="text_field" v-model="user_login_form.account" type="text" name="account"></el-input>
                </el-form-item>

                <el-form-item class="login_row" prop="password">
                  <div class="login_form_title">密码</div>
                  <el-input class="text_field" v-model="user_login_form.password" type="text" name="password"></el-input>
                </el-form-item>

                <div class="login_row">
                  <input type="checkbox" name="remember_login">
                  <label>在这台电脑上记住我</label>
                </div>

                <el-form-item>
                  <el-button type="submit" class="loginButton" @click="login()">登录</el-button>
                </el-form-item>

                <div class="forgetPassword">忘记您的密码？</div>

              </el-form>

            </div>

          </div>

          <div class="loginPanel_right">

            <div class="loginPanel_right_content">
              <div class="joinUs">加入 Steam，探索数千款精彩游戏。</div>
              <div class="understand_more">了解更多</div>
              <img class="join_img" src="/resources/background/login_right.png" alt="join us">
              <div class="joinUs">免费加入且简单易用</div>
              <router-link to="/register">
                <div class="register">加入 Steam</div>
              </router-link>
            </div>

          </div>

        </div>


        <div class="footerSpace"></div>

      </div>
    </template>



    <FooterBox></FooterBox>
  </div>
</template>

<script>
import HeaderBox from "@/components/commen/headerbox/HeaderBox";
import FooterBox from "@/components/commen/footerbox/FooterBox";
import Login from '@/components/user/Login'
export default {
  name: "login",
  components: {FooterBox, HeaderBox,Login},
  data(){
    return {
      user_login_form:{
        account:'',
        password:'',
      },
      rules:{
        account:[
          {
            required:true,
            message:"请输入账户名称",
            trigger:'blur',
          }
        ],
        password:[
          {
            required:true,
            message:"请输入密码",
            trigger:'blur',
          }
        ],
      }
    }
  },
  methods:{
    // 注册表单提交
    login(){
      this.$refs.loginFormRef.validate((valid)=>{
        if(valid) {
          let account = this.user_login_form.account;
          let password = this.user_login_form.password;
          // 访问后台
          this.axios.post('/user/login', {
            'account': account,
            'password': password,
          }).then(res => {
            if (res.data.code == 200) {
              this.$message.success('登录成功~');
            }else{
              this.$message.error('用户名或密码错误！');
            }
          }).catch(function (response) {
            this.$message.error('提交失败~');
          })
        }
        else{
          this.$message.error('请正确输入账号或者密码~');
        }
      })
    }
  }
}

</script>

<style lang="scss">
.loginBox{
  height: 800px;
  width: 100%;

  .loginBox_left{
    background-color: #1f2428;
    width: 1105px;
    display: inline-block;
    .loginBox_background{
      width: 482px;
      height: 800px;
      display: inline-block;
      background: radial-gradient(30% 40% at 40% 30%, rgba(33, 36, 41, .5) 0%, rgba(33, 36, 41, 0) 100%) no-repeat ,url('/resources/background/loginBackground.jpg') 74% 87%  no-repeat, #212429;
    }

    .loginPanel{
      display: inline-block;
      width: 620px;
      height: 800px;
      position: absolute;
      padding: 40px 20px 20px 20px;
      box-sizing: border-box;
      font-size: 14px;
      color: #b8b6b4;
      background: linear-gradient( to right ,#1f2428 , #24282d);

      .loginPanel_content{
        width: 274px;
        height: 370px;
        margin: 0 auto;

        .loginPanel_title{
          text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          font-size: 34px;
          color: #ffffff;
          margin-bottom: 30px;
          font-weight: 200;
          letter-spacing: 2px;
          text-align: center;
        }

        .login_row{
          margin-bottom: 18px;
          .login_form_title{
            margin-bottom: 5px;
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
            transition: border ease-in-out .5s;
            border: 1px solid #26282D;
            outline: none;
            font-weight: normal;
          }

          label{
            margin-left: 5px;
          }
        }

        .loginButton{
          margin: 20px auto;
          width: 190px;
          height: 36px;
          line-height: 36px;
          font-size: 15px;
          color: #c3e1f8;
          background: linear-gradient( to right, #3ca3f1 , #2460d0);
          text-align: center;
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



        .forgetPassword{
          font-size: 12px;
          color: white;
          text-align: center;
          &:hover{
            color: #66c0f4;
            cursor: pointer;
          }
        }

      }



    }
  }

  .loginPanel_right{
    position: absolute;
    left: 1102px;
    width: 800px;
    height: 800px;
    background-color: #212429;
    display: inline-block;
    color: #b8b6b4;
    font-size: 14px;

    .loginPanel_right_content{
      width: 320px;
      height: 800px;
      padding: 100px 0 0 0;

      .joinUs{
        max-width: 60%;
        text-align: center;
        font-size: 14px;
        margin: 0 auto;
      }

      .understand_more{
        font-size: 14px;
        color: white;
        text-align: center;
        margin: 10px 0 0 0;
        &:hover{
          color: #66c0f4;
          cursor: pointer;
        }
      }

      .join_img{
        background-size: contain;
        width: 320px;
        margin-bottom: 20px;
      }

      .register{
        color: white;
        border: 1px solid rgba(255,255,255,0.4);
        border-radius: 2px;
        padding: 0 15px;
        box-sizing: border-box;
        margin: 20px auto;
        width: 110px;
        font-size: 15px;
        line-height: 30px;
        text-align: center;
        &:hover{
          cursor: pointer;
          border-color: white;
        }
      }

    }

  }

  .footerSpace{
    //position: relative;
    width: 100%;
    height: 100px;
    background-color: #1f2428;
  }

}
</style>