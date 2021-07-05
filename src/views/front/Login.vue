<template>
  <div class="login">
    <HeaderBox></HeaderBox>
    <Login></Login>
    <FooterBox></FooterBox>
  </div>
</template>

<script>
import HeaderBox from "@/components/commen/headerbox/HeaderBox";
import FooterBox from "@/components/commen/footerbox/FooterBox";
import Login from '@/components/user/Login'
export default {
  name: "login",
  components: {FooterBox, HeaderBox,Login}
}
</script>

<style lang="scss">

</style>