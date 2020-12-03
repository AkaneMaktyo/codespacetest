<template>
  <div class="index">
    <HeaderBox></HeaderBox>
    <div class="steam-content">
      <ClassificationBox></ClassificationBox>
      <HomeNav></HomeNav>
      <GamePanelMax></GamePanelMax>
    </div>
  </div>
</template>

<script>
import HeaderBox from "@/components/commen/headerbox/HeaderBox";
import HomeNav from "@/components/commen/homeNav/HomeNav";
import ClassificationBox from "@/components/home/classification/ClassificationBox";
import GamePanelMax from "@/components/commen/gamepanel/GamePanelMax";
export default {
  name: "index",
  components: {GamePanelMax, ClassificationBox, HomeNav, HeaderBox}
}
</script>

<style lang="scss">
  .index{
    position: relative;
    .steam-content{
      height: 800px;
      width: 100%;
      position: absolute;
      background: url("/resources/background/indexbackground.png") center top no-repeat #1b2838;
    }
  }
</style>