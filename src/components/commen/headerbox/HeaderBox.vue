<template>
<div class="header">
  <div class="content">
    <div class="logo"></div>
    <div class="nav">
      <div class="item item_hover">
        商店
        <div class="item_nav">
          <div class="nav_item">主页</div>
          <div class="nav_item">探索队列</div>
          <div class="nav_item">愿望单</div>
          <div class="nav_item">点数商店</div>
          <div class="nav_item">新闻</div>
          <div class="nav_item">统计数据</div>
        </div>
      </div>



      <div class="item item_hover">
        社区
        <div class="item_nav">
          <div class="nav_item">主页</div>
          <div class="nav_item">讨论</div>
          <div class="nav_item">创意工坊</div>
          <div class="nav_item">市场</div>
          <div class="nav_item">实况直播</div>
        </div>
      </div>



      <div class="item">关于</div>
      <div class="item">客服</div>
    </div>
    <div class="global_action_menu">
      <div class="install hover_item">
        <i class="fa fa-download" aria-hidden="true"></i> 安装Steam
      </div>
      <div class="login hover_item" >登录</div>
      <div class="language hover_item" >语言 <i class="fa fa-caret-down" aria-hidden="true"></i></div>
    </div>
  </div>

</div>
</template>

<script>
export default {
  name: "HeaderBox"
}
</script>

<style lang="scss">
  .header{
    width: 100%;
    height: 104px;
    background: #171a21;

    .content{
      width: 940px;
      height: 104px;
      margin: 0 auto;
      position: relative;
      z-index: 402;

      .logo{
        width: 176px;
        height: 44px;
        /* 控制缩放 */
        background-size: contain;
        /* 控制不重复显示 */
        background-repeat: no-repeat;
        background-image: url("/resources/header/logo.png");
        position: absolute;
        top: 30px;
        margin-right: 30px;
        display: inline-block;
        &:hover{
          cursor: pointer;
        }
      }
      .nav{
        width: 168px;
        position: absolute;
        left: 199px;
        top: 43px;
        display: inline-block;

        .item{
          width: 28px;
          height: 18px;
          padding: 0px 7px 7px;
          display: inline-block;
          font-size: 14px;
          color: #b8b6b4;
          transition: color 0.25s;
          vertical-align: top;
          position: relative;
          &:hover{
            cursor: pointer;
            color: #ffffff;
            transition: color 0.25s;
          }
          .item_nav{
            visibility: hidden;
            border: 1px solid #171a21;
            background-color: #171a21;
            width: 90px;
            padding-bottom: 10px;
            color: #b8b6b4;
            /* 设置阴影 */
            box-shadow:3px 3px 3px  rgba( 0,0,0,0.2);
            position: absolute;
            top: 25px;
            left: 1px;
            .nav_item{
              height: 30px;
              line-height: 30px;
              margin-left: 14px;
              transition: color 0.25s;
              &:hover{
                color: white;
                transition: color 0.25s;
              }
            }
          }

        }
        /* 控制下拉列表的显示隐藏 */
        .item_hover{
          &:hover>.item_nav{
            visibility: visible;
          }
        }

      }
      /* 右侧三个按钮 */
      .global_action_menu{
        width: 212px;
        height: 25px;
        font-size: 12px;
        position: absolute;
        right: 0;
        top: 0;

        .install{
          display: inline-block;
          width: 106px;
          height: 22px;
          line-height: 22px;
          text-align: center;
          border: 1px solid #5c7e10;
          background-color: #5c7e10;
          position: absolute;
          top: 5px;
          right: 107px;
          color: #e5e4dc;
          i{
            margin-right: 5px;
          }
        }
        .login{
          display: inline-block;
          color: #b8b6b4;
          height: 16px;
          position: absolute;
          right: 72px;
          top: 8px;
        }
        .language{
          display: inline-block;
          color: #b8b6b4;
          height: 13px;
          line-height: 13px;
          position: absolute;
          right: 4px;
          top: 11px;
          border-left: 1px solid #b8b6b4;
          padding: 0 10px;
        }
        .hover_item{
          transition: color 0.25s;
          &:hover{
            cursor: pointer;
            color: white;
            transition: color 0.25s;
          }
        }
      }

    }

  }
</style>