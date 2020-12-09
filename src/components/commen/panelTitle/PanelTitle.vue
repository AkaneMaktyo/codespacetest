<template>
  <div class="panelTitle">
    {{ panelTitle}}
    <span>{{ panelButton }}</span>
  </div>
</template>

<script>
export default {
  name: "PanelTitle",
  props:{
    panelTitle:String,
    panelButton:String
  }
}
</script>

<style lang="scss">
  .panelTitle{
    color: white;
    font-size: 14px;
    margin: 0 auto;
    letter-spacing: 2px;
    width: 940px;
    padding: 38px 0 11px 0;
    span{
      letter-spacing: 0px;
      font-size: 12px;
      border: 1px solid #768591;
      padding: 3px 15px;
      float: right;
      border-radius: 2px;
      &:hover{
        color: white;
        border-color: white;
        cursor: pointer;
      }
    }
  }
</style>