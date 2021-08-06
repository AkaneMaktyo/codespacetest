<template>
  <div class="homeNav">
    <div class="homeNav_item">
      <div class="nav_item">
        您的商店 <i class="fa fa-caret-down" aria-hidden="true"></i>
        <!-- 下拉抽屉 -->
        <div class="nav_item_desktop">
          <div class="desktop">主页</div>
          <div class="hr"></div>
          <div class="desktop">社区推荐</div>
          <div class="desktop">最近已查看</div>
          <div class="desktop">Steam 鉴赏家</div>
        </div>

      </div>
      <div class="nav_item">
        浏览 <i class="fa fa-caret-down" aria-hidden="true"></i>
        <!-- 下拉抽屉 -->
        <div class="nav_item_desktop">
          <div class="classification">游戏类型</div>
          <div class="desktop" v-for="(item,index) in classify">{{item.classifyName}}</div>

          <div class="hr"></div>
          <div class="desktop">更多热门标签</div>
        </div>
      </div>
      <div class="nav_item">点数商店 </div>
      <div class="nav_item">新闻</div>
      <div class="nav_item">Steam实验室</div>
    </div>

    <div class="homeNav_search">
      <input type="text" placeholder="搜索商店"  onfocus="this.placeholder=''" onblur="this.placeholder='搜索商店'" >
      <img src="/resources/nav/search_icon.png"  alt="search">
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeNav",
  data(){
    return{
      classify:[{
        "classifyId": '',
        "classifyName": ''
      }],
    }
  },
  methods:{
    //获取全部分类
    getClassify(){
      this.axios.get('/getClassifyList').then((res)=>{
        this.classify = res.data;
      })
    },
  },
  mounted() {
    this.getClassify();
  }
}
</script>

<style lang="scss">
  /* 下划线 */
  .hr{
    border-top: 1px solid white;
    height: 1px;
    margin: 5px 10px;
  }
  .homeNav{
    width: 940px;
    height: 35px;
    margin: 0px auto;
    box-shadow: 0 0 3px rgba(0,0,0,0.4);
    background-color: #377096;

    .homeNav_item{
      display: inline-block;
      .nav_item{
        display: inline-block;
        color: #d8d9dc;
        height: 35px;
        line-height: 35px;
        text-align: center;
        font-size: 13px;
        border-right: 1px solid #24465e;
        padding: 0 15px 0 15px;
        box-sizing: border-box;
        position: relative;
        i{
          margin-left: 5px;
        }
        &:hover{
          background-color: #cbd8e2;
          color: black;
          cursor: pointer;
        }
        &:hover>.nav_item_desktop{
          opacity: 1;
          visibility: visible;
          transition: opacity 0.25s;
        }
        /* 下拉导航栏 */
        .nav_item_desktop{
          transition: opacity 0.25s;
          visibility: hidden;
          opacity: 0;
          position: absolute;
          left: 0px;
          text-align: left;
          color: black;
          font-size: 12px;
          width: 130px;
          //box-shadow: 0 0 3px rgba(0,0,0,0.4);
          box-shadow:0 0 12px #000000;
          background-color: #d6e0e8;
          padding: 5px;
          box-sizing: border-box;
          z-index: 999;
          .desktop{
            width: 110px;
            height: 30px;
            line-height: 30px;
            margin: 0 auto;
            text-indent: 6px;
            transition: all 0.25s;
            &:hover{
              cursor: pointer;
              background-color: #212d3d;
              color: white;
              transition: all 0.25s;
            }
          }
          .classification{
            color: #4f94bc;
            font-size: 11px;
            width: 100px;
            height: 30px;
            margin-left: 10px ;
          }
        }
      }

    }
    .homeNav_search{
      display: inline-block;
      width: 216px;
      height: 27px;
      line-height: 27px;
      background-color: #316282;
      border-radius: 3px;
      border: 1px solid rgba( 0, 0, 0, 0.3);
      box-shadow: 1px 1px 0px rgba( 255, 255, 255, 0.2);
      color: #fff;
      outline: none;
      padding: 0px 6px;
      cursor: text;
      float: right;
      margin:3px 4px 0 0;
      &:hover{
        background-image: none;
        border: 1px solid #4c9acc;
        box-shadow: 1px 1px 0px rgba( 255, 255, 255, 0.0);
      }
      input{
        border: 0;
        background-color: transparent;
        outline:none;
        font-style: italic;
        font-size: 15px;
        margin-left: 9px;
        color: white;
        &:focus{
          color: white;
          font-style: normal;
        }

      }
      img{
        width: 25px;
        height: 25px;
        line-height: 25px;
        float: right;
        margin: 1px -5px;
        &:hover{
          cursor: pointer;
        }
      }
    }
  }
</style>