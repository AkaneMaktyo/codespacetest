<template>
  <div class="breadcrumb">

    <!-- 面包屑-->
    <el-breadcrumb separator="/">

      <el-breadcrumb-item v-for="(list,i) in lists" :key="i">
        <router-link :to="list.path">{{ list.meta.title }}</router-link>
      </el-breadcrumb-item>

    </el-breadcrumb>

  </div>
</template>

<script>
export default {
  name: "breadCrumb",
  data(){
    return{
      lists:[]
    }
  },
  created() {
    //获取路由中的信息
    this.list = this.$route.matched;
  },
  watch:{
    $route(to,from){
      this.lists = to.matched;
    }
  }
}
</script>

<style scoped>

</style>