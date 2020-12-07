<template>
  <div class="footer">
    <div class="footer_content">
      <div class="footer_content_top">
        <div class="logo_left logo">
          <img src="/resources/footer/footerLogo_valve.png">
        </div>
        <div class="footer_content_text">
          <div>©2020 Valve Corporation。保留所有权利。所有商标均为其在美国及其它国家/地区的各自持有者所有。</div>
          <div style="text-align: left">
            所有的价格均已包含增值税（如适用）。
            <span class="border_right">隐私政策</span><span class="border_right">法律信息</span><span class="border_right">Steam 订户协议</span><span>退款</span>
          </div>
        </div>
        <div class="logo_right logo">
          <img src="/resources/footer/logo_steam_footer.png">
        </div>
      </div>
      <div class="footer_content_bottom">
        <span class="border_right">关于Value</span>
        <span class="border_right">Steamworks</span>
        <span class="border_right">工作</span>
        <span class="border_right">Steam 分销</span>
        <span class="border_right">礼物卡</span>
        <span class="border_right"> <i class="fa fa-facebook-official" aria-hidden="true"></i> Steam</span>
        <span> <i class="fa fa-twitter-square" aria-hidden="true"></i> @Steam</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterBox"
}
</script>

<style lang="scss">
  .footer{
    width: 100%;
    height: 156px;
    background-color: #121a25;
    padding-top: 1px;
    box-sizing: border-box;
    .footer_content_top{
      color: #8f98a0;
      font-size: 12px;
      width: 940px;
      height: 56px;
      margin: 30px auto 0px auto;
      padding-top: 10px;
      box-sizing: border-box;
      border: 1px solid;
      border-color: #363c44 transparent;
      .logo_left{
        display: inline-block;
        img{
          width: 88px;
          height: 25px;
        }
      }
      .footer_content_text{
        display: inline-block;
        span{
          color: #C6D4DF;
          padding: 0 12px;
          &:hover{
            color: white;
            cursor: pointer;
          }
        }
        .border_right{
          border: 1px solid;
          border-color: transparent #8f98a0 transparent transparent;
        }
      }
      .logo_right{
        display: inline-block;
        float: right;
      }
    }
    .footer_content_bottom{
      width: 940px;
      height: 56px;
      margin: 20px auto 0 auto;
      font-size: 12px;
      color: #C6D4DF;
      span{
        color: #C6D4DF;
        padding: 0 12px;
        &:hover{
          color: white;
          cursor: pointer;
        }
      }
      .border_right{
        border: 1px solid;
        border-color: transparent #8f98a0 transparent transparent;
      }
    }
  }
</style>