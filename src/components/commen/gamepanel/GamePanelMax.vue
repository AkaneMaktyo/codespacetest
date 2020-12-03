<template>
<div class="gamePanelMax">
  <div class="gamePanelMax_title">精选和推荐</div>
  <div class="gamePanelMax_content">
    <img class="img0" src="/resources/game/糖豆人0.jpg" alt="糖豆人0">
    <div class="gamePanelMax_content_attachment">
      <div class="gamePanelMax_content_name">糖豆人：终极淘汰赛</div>
      <div class="gamePanelMax_content_screenshot">
        <div class="gamePanelMax_content_screenshot_item">
          <img src="/resources/game/糖豆人1.jpg" alt="糖豆人1">
        </div>
        <div class="gamePanelMax_content_screenshot_item">
          <img src="/resources/game/糖豆人2.jpg" alt="糖豆人2">
        </div>
        <div class="gamePanelMax_content_screenshot_item">
          <img src="/resources/game/糖豆人3.jpg" alt="糖豆人3">
        </div>
        <div class="gamePanelMax_content_screenshot_item">
          <img src="/resources/game/糖豆人4.jpg" alt="糖豆人4">
        </div>
      </div>
      <div class="gamePanelMax_content_state">
        <div class="">现已推出</div>
      </div>
    </div>

  </div>
  <div class="clear"></div>
</div>
</template>

<script>
export default {
  name: "GamePanelMax"
}
</script>

<style lang="scss">

  .gamePanelMax{
    width: 1040px;
    height: 430px;
    border: 1px solid white;
    margin: 0 auto;
    //position: relative;
    .gamePanelMax_title{
      color: white;
      font-size: 14px;
      margin: 4px 50px;
      letter-spacing: 2px;
    }
    .gamePanelMax_content{
      position: relative;
      .img0{
        z-index: 100;
        margin: 7px 0 0 50px ;
        box-shadow:0 0 12px #000000;
        display: inline-block;
      }
      .gamePanelMax_content_attachment{
        width: 325px;
        height: 353px;
        display: inline-block;
        background-color: #0a141d;
        position: absolute;
        top: 7px;
        right: 49px;
        box-shadow:0 0 3px #000000;
        .gamePanelMax_content_name{
          display: inline-block;
          width: 302px;
          height: 60px;
          line-height: 60px;
          font-size: 24px;
          color: white;
          font-weight: 300;
          position: absolute;
          top: 6px;
          right: 7px;
        }
        .gamePanelMax_content_screenshot{
          width: 344px;
          height: 160px;
          background-size: contain;
          background-repeat: no-repeat;
          display: inline-block;
          position: absolute;
          top: 70px;
          right: -2px;
          overflow: hidden;
          .gamePanelMax_content_screenshot_item{
            width: 162px;
            height: 69px;
            display: inline-block;
            padding: 0 10px 10px 0;
            z-index: 50;
            img{
              width: 162px;
              height: 69px;
              z-index: 50;
            }
          }
        }
      }

    }
  }
</style>