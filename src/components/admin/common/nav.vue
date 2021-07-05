<template>
  <!--左侧导航栏-->
  <el-aside width="200px" class="aside">
    <el-menu :default-active="$router.path" exact  router>

    <!--当使用 PascalCase (首字母大写命名) 定义一个组件时，你在引用这个自定义元素时两种命名法都可以使用。也就是说 和 都是可接受的。注意，尽管如此，直接在 DOM (即非字符串的模板) 中使用时只有 kebab-case 是有效的。-->
    <nav-item  v-for="v in items" :key="v.url" :item="v" :basePath="v.url"/>

    </el-menu>

  </el-aside>
</template>

<script>
import NavItem from "@/components/admin/common/navItem";
export default {
  name: "Nav",
  components: {NavItem},
  data(){
    return{
      items:[
          {
            "name": "首页",
            "url": "/admin/home"
          },
          {
            "name": "游戏管理",
            "url": "/admin/game"
          },
          {
            "name": "用户管理",
            "url": "/admin/user",
            "child": [
              {
                "name": "添加用户",
                "url": "/admin/user"
              },
              {
                "name": "删除用户",
                "url": "/admin/user2"
              }
            ]
          }
      ]
    }
  }
}
</script>

<style lang="scss">
  .el-menu{
    background-color: white;
  }

  .el-aside {
    background-color: white;
    //color: #ce2f2f;
    line-height: 200px;
  }

</style>