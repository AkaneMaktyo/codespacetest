<template>
  <div class="classificationBox">
    <div class="classification_header">
      <div class="gift_card_logo"></div>
      <div class="classification_gift">礼物卡</div>
      <div class="classification_item">现已在 Steam 上推出</div>
    </div>
    <div class="classification_header">
      <div class="classification">推荐</div>
      <div class="classification_item"><i class="fa fa-users" aria-hidden="true"></i> 由好友推荐</div>
      <div class="classification_item"><i class="fa fa-podcast" aria-hidden="true"></i> 由鉴赏家推荐</div>
      <div class="classification_item"><i class="fa fa-tag" aria-hidden="true"></i> 标签</div>
    </div>
    <div class="classification_header">
      <div class="classification">探索队列</div>
      <div class="classification_item"><i class="fa fa-users" aria-hidden="true"></i> 推荐</div>
      <div class="classification_item"><i class="fa fa-plus" aria-hidden="true"></i> 新品</div>
    </div>
    <div class="classification_header">
      <div class="classification">浏览分类</div>
      <div class="classification_item"><i class="fa fa-line-chart" aria-hidden="true"></i> 热销商品</div>
      <div class="classification_item"><i class="fa fa-plus" aria-hidden="true"></i> 新品</div>
      <div class="classification_item"><i class="fa fa-clock-o" aria-hidden="true"></i> 即将推出</div>
      <div class="classification_item"><i class="fa fa-percent" aria-hidden="true"></i> 优惠</div>
      <div class="classification_item"><i class="fa fa-binoculars" aria-hidden="true"></i> 虚拟现实</div>
      <div class="classification_item"><i class="fa fa-gamepad" aria-hidden="true"></i> 支持控制器</div>
    </div>
    <div class="classification_header">
      <div class="classification">按类型浏览</div>
      <div class="classification_item">免费游玩</div>
      <div class="classification_item">抢先体验</div>
      <div class="classification_item">休闲</div>
      <div class="classification_item">体育</div>
      <div class="classification_item">大型多人在线</div>
      <div class="classification_item">角色扮演</div>
    </div>
    <div class="classification_header">
      <div class="classification">最近查看</div>
      <div class="classification_item">糖豆人：终级淘汰赛</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ClassificationBox"
}
</script>

<style lang="scss">
  /* 分类样式 */

  .classificationBox{
    width: 210px;
    height: 800px;
    position: absolute;
    left: 248px;
    top: 24px;
    .classification_header{

      .classification_gift{
        color:#c6d4df;
        font-size: 12px;
        padding: 3px 0 2px 0;
      }
      .classification{
        color:#c6d4df;
        font-size: 12px;
        padding: 8px 0 2px 0;

      }
      .gift_card_logo{
        width: 210px;
        height: 116px;
        background-image: url("/resources/classification/gift_card.png");
        background-size: contain;
        background-repeat: no-repeat;
        &:hover{
          cursor: pointer;
          color: white;
        }
      }
      .classification_item{
        color: #66c0f4;
        font-size: 13px;
        //padding: 3px 0;
        margin: 5px 0;
        &:hover{
          cursor: pointer;
          color: white;
        }
        i{
          width: 16px;
          height: 16px;
          line-height: 16px;
          text-align: center;
          background-color: #265673;
          border: 0;
          border-radius: 2px;
          margin-right: 4px;
        }
      }
    }

  }
</style>