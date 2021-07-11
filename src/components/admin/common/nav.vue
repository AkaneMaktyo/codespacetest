<template>
  <div class="nav">
    <div class="logo"></div>
    <!--左侧导航栏-->
    <el-aside width="224px">
      <el-menu :default-active="$router.path" exact  router>

        <!--当使用 PascalCase (首字母大写命名) 定义一个组件时，你在引用这个自定义元素时两种命名法都可以使用。也就是说 和 都是可接受的。注意，尽管如此，直接在 DOM (即非字符串的模板) 中使用时只有 kebab-case 是有效的。-->
        <nav-item class="nav_item"  v-for="v in items" :key="v.url" :item="v" :basePath="v.url"/>

      </el-menu>

    </el-aside>
  </div>
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
            "url": "/admin"
          },
          {
            "name": "游戏管理",
            "url": "/admin/game",
            "child": [
              {
                "name": "游戏列表",
                "url": "/admin/game"
              },
              {
                "name": "修改游戏",
                "url": "/admin/editGame"
              },
              {
                "name": "新增游戏",
                "url": "/admin/AddGame"
              }
            ]
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

  .nav{
    background-color: #171A21;
  }

  .logo{
    width: 160px;
    height: 50px;
    margin: 20px 0 -0px 40px;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(/resources/header/logo.png);
    display: inline-block;
  }

  .el-aside {
    background-color: white;
    color: #b8b6b4;
    line-height: 200px;
    span{
      color: #b8b6b4;
    }
  }


  .el-menu{
    background-color: #171A21;
    border-right-width: 0;    // 边界不齐 有 1px 的偏差

    .nav_item{
      color: black;
    }

    .el-menu-item:hover ,.el-submenu__title:hover{
      outline: 0;
      background-color: #E9EEF3;
      span{
        color: black;
      }
    }
  }



</style>