<template>
  <div>
    <!--无子集-->
    <el-menu-item :index="basePath" v-if="!item.child">
      <i class="el-icon-menu"></i>
      <span slot="title">{{ item.name }}</span>
    </el-menu-item>

    <!--有子集-->
    <el-submenu v-else :index="basePath">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>{{item.name}}</span>
      </template>
      <!--递归组件-->
      <nav-item v-for="sub in item.child" :key="sub.url" :item="sub" :basePath="sub.url"/>
    </el-submenu>
  </div>
</template>

<script>
export default {
  name: "navItem",
  data(){
    return{

    }
  },
  props:['item','basePath'],

}
</script>