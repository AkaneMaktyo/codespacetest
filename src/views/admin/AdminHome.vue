<template>
  <div id="module">
    <el-container>

      <!--左侧导航栏-->
      <Nav />

      <el-container>
        <!--头部-->
        <el-header>

          <!-- 面包屑-->
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
          </el-breadcrumb>

          <!-- 退出 -->
          <el-button type="primary" @click="goBack()">退出</el-button>
        </el-header>

        <el-main><router-view/></el-main>

      </el-container>
    </el-container>
  </div>
</template>

<script>
import axios from "axios";
import Nav from "@/components/admin/common/nav";

export default {
  name: "admin",
  components: {Nav},
  data(){
    return {
      items:[]
    }
  },
  created() {
    //this.submitForm()
  },
  mounted() { //生命周期挂载完成
    //this.getNav()
  },
  methods:{
    submitForm(){
      let test = 'sss'

      axios.get('/hello',{
        params:{
          test:'123'
        }
      }).then(res =>{
        console.log(res.data)
        let {code,message} = res.data
        console.log(code)
      })
    },

    // 返回到登录
    goBack(){
      this.$router.push('/admin/login')
      //清除用户数据
      sessionStorage.removeItem('username')
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

<style lang="scss">
html,body{
  background-color: white;
  width: 100%;
}

.el-header {
  background-color: white;
  color: #333;
  text-align: center;

  .el-button{
    float: right;
  }
}

//面包屑
.el-breadcrumb{
  line-height: 60px;
  width: 500px;
  float: left;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

.el-container {
  margin-bottom: 40px;
  min-height: 1080px;
}


</style>
