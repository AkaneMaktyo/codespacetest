<template>
  <div class="index">
    <HeaderBox></HeaderBox>
    <div class="steam-content">
      <ClassificationBox></ClassificationBox>
      <div class="middle_right">
        <HomeNav></HomeNav>
        <GamePanelMax></GamePanelMax>
      </div>
<!--      <GamePanelDiscount></GamePanelDiscount>-->
    </div>
    <FooterBox></FooterBox>
  </div>
</template>

<script>
import HeaderBox from "@/components/commen/headerbox/HeaderBox";
import HomeNav from "@/components/commen/homeNav/HomeNav";
import ClassificationBox from "@/components/home/classification/ClassificationBox";
import GamePanelMax from "@/components/commen/gamepanel/GamePanelMax";
import GamePanelDiscount from "@/components/commen/gamepanel/GamePanelDiscount";
import FooterBox from "@/components/commen/footerbox/FooterBox";

export default {
  name: "index",
  components: {FooterBox, GamePanelDiscount, GamePanelMax, ClassificationBox, HomeNav, HeaderBox}
}
</script>

<style lang="scss">
  .index{
    position: relative;
    .steam-content{
      //height: 800px;
      width: 100%;
      height: 820px;
      z-index: 1;
      position: relative;
      overflow: hidden;
      background: url("/resources/background/indexbackground.png") center top no-repeat #1b2838;
      .middle_right{
        margin-right: 0px;
        padding-top: 32px;
      }
    }
  }
</style>