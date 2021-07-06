<template>
  <div id="module">
    <el-container>

      <!--左侧导航栏-->
      <Nav />

      <el-container>
        <!--头部-->
        <el-header>

          <!-- 退出 -->
          <el-button type="primary" @click="goBack()">退出</el-button>

          <!--头像框-->
          <div class="username">Akane</div>
          <el-avatar :size="40" :src="user.circleUrl"></el-avatar>

        </el-header>

        <el-main><router-view/></el-main>


      </el-container>
    </el-container>
  </div>
</template>

<script>
import Nav from "@/components/admin/common/nav"; //左侧导航栏组件
import breadcrumb from "@/components/admin/common/breadcrumb";//面包屑组件

export default {
  name: "admin",
  components: {Nav,breadcrumb},
  data(){
    return {
      items:[],
      user:{
        circleUrl: "/resources/background/avatar.jpg",
        username:'Akane',
      }

    }
  },
  created() {
    //this.submitForm()
  },
  mounted() { //生命周期挂载完成
    //this.getNav()
  },
  methods:{


    // 返回到登录
    goBack(){
      this.$router.push('/')
      //清除用户数据
      //sessionStorage.removeItem('account')
    },

    // 获取到导航栏的信息
    getNav(){
      this.axios.get('/getNav').then(res => {
        console.log(res)
        let {code,result} = res.data;
        if (code == 200){
          this.items = res.data.result;
        }
      })
    }
  }
}

</script>

<style lang="scss" >
html,body{
  background-color: white;
  width: 100%;
}

.el-header {
  background-color: white;
  color: #333;
  text-align: center;

  .el-avatar{
    float: right;
    margin: 10px;
  }

  .username{
    display: inline-block;
    float: right;
    line-height: 60px;
    margin: 0px 10px;
  }

  .el-button{
    float: right;
    margin: 11px;
  }

}


.el-main {
  background-color: #E9EEF3;
}

.el-container {
  min-height: 844px;
}


</style>
