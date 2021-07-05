<template>
  <div class="register">
    <HeaderBox></HeaderBox>
    <Register></Register>
    <FooterBox></FooterBox>
  </div>
</template>

<script>
import HeaderBox from "@/components/commen/headerbox/HeaderBox";
import FooterBox from "@/components/commen/footerbox/FooterBox";
import Register from '@/components/user/Register';

export default {
  name: "register",
  components: {FooterBox, HeaderBox,Register},

}
</script>

<style lang="scss">

</style>