<template>
  <div class="index">
    <HeaderBox></HeaderBox>
    <ClassificationBox></ClassificationBox>
    <div class="home_page_body">
      <div class="home_page_carousel">
        <HomeNav></HomeNav>
        <PanelTitle :panel-title="panelTitle.first.panelTitle" :panel-button="panelTitle.first.panelButton"></PanelTitle>
        <GamePanelMax></GamePanelMax>
      </div>
      <PanelTitle :panel-title="panelTitle.second.panelTitle" :panel-button="panelTitle.second.panelButton"></PanelTitle>
      <GamePanelDiscount></GamePanelDiscount>
      <PanelTitle :panel-title="panelTitle.third.panelTitle" :panel-button="panelTitle.third.panelButton"></PanelTitle>
      <CommunityRecommendation></CommunityRecommendation>
      <GamePanelRow></GamePanelRow>
    </div>

    <FooterBox></FooterBox>
  </div>
</template>

<script>
import HeaderBox from "@/components/commen/headerbox/HeaderBox";
import HomeNav from "@/components/commen/homeNav/HomeNav";
import ClassificationBox from "@/components/home/classification/ClassificationBox";
import GamePanelDiscount from "@/components/commen/gamepanel/GamePanelDiscount";
import FooterBox from "@/components/commen/footerbox/FooterBox";
import PanelTitle from "@/components/commen/panelTitle/PanelTitle";
import GamePanelMax from "@/components/commen/gamepanel/GamePanelMax";
import CommunityRecommendation from "@/components/commen/gamepanel/CommunityRecommendation";
import GamePanelRow from "@/components/commen/gamepanel/GamePanelRow";

export default {
  name: "index",
  components: {
    GamePanelRow,
    CommunityRecommendation, GamePanelMax, PanelTitle, FooterBox, GamePanelDiscount,  ClassificationBox, HomeNav, HeaderBox},
  data(){
    return{
      panelTitle:{
        first:{
          panelTitle:'精选和推荐',
          panelButton:'浏览更多',
        },
        second:{
          panelTitle:'特别优惠',
          panelButton:'浏览更多',
        },
        third:{
          panelTitle:'社区推荐',
          panelButton:'按标签和更多方式进行自定义和探索',
        }
      }
    }
  },
}
</script>

<style lang="scss">
  .index{
    .home_page_body{
      //height: 800px;
      width: 100%;
      min-height: 800px;
      z-index: 1;
      //position: relative;
      background: url("/resources/background/indexbackground.png") center top no-repeat #1b2838;
      .home_page_carousel{
        padding-top: 32px;
        width: 940px;
        height: 500px;
        margin: -1px 482px;

        //margin: 100px 100px 0 0;
      }
    }
  }
</style>