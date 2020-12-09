<template>
  <!-- 右侧弹出层 -->
  <div  ref="switchPanel" class="content_popUp">
    <div class="game_info">
      <div class="game_info_name">{{ item.name }}</div>
      <div class="game_info_publicTime">发行于：{{ item.publicTime }}</div>
    </div>
    <div class="game_info_img">
      <img :src="item.img1" >
    </div>
    <div class="game_info_evaluation">
      <div>总体用户评测：</div>
      <div class="game_info_evaluation_result">特别好评 </div>
      (65 篇测评)
    </div>
    <div class="game_info_labels">
      <div>用户标签：</div>
      <div class="label">角色扮演</div>
      <div class="label">生存</div>
      <div class="label">射击</div>
    </div>
    <div class="triangle"></div>
  </div>
</template>

<script>
import {Swiper,SwiperSlide} from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

let vm = null
let temp = null
let active = false
export default {
  name: "PopUp",
  components:{
    Swiper,
    SwiperSlide
  },

  data(){
    return{
      swiperOptions:{
        autoplay:{
          delay:1000
        },
        loop:true,
        effect:'fade',

      },
      swiperSlideList:[
        {
          href:'',
          img0:'/resources/game/糖豆人/糖豆人 0.jpg',
          name:'糖豆人：终极淘汰赛',
          img1:'/resources/game/糖豆人/糖豆人 1.jpg',
          img2:'/resources/game/糖豆人/糖豆人 2.jpg',
          img3:'/resources/game/糖豆人/糖豆人 3.jpg',
          img4:'/resources/game/糖豆人/糖豆人 4.jpg',
          classification:'热销商品',
          price:'58',
          discount:0.1,
          platform:1,
          publicTime:'2020年8月4日'
        },
        {
          href:'',
          img0:'/resources/game/赛博朋克2077/赛博朋克2077 0.jpg',
          name:'赛博朋克2077',
          img1:'/resources/game/赛博朋克2077/赛博朋克2077 1.jpg',
          img2:'/resources/game/赛博朋克2077/赛博朋克2077 2.jpg',
          img3:'/resources/game/赛博朋克2077/赛博朋克2077 3.jpg',
          img4:'/resources/game/赛博朋克2077/赛博朋克2077 4.jpg',
          classification:'热销商品',
          price:'298',
          discount:1,
          platform:1,
        },
        {
          href:'',
          img0:'/resources/game/GTA5/GTA5 0.jpg',
          name:'GTA5',
          img1:'/resources/game/GTA5/GTA5 1.jpg',
          img2:'/resources/game/GTA5/GTA5 2.jpg',
          img3:'/resources/game/GTA5/GTA5 3.jpg',
          img4:'/resources/game/GTA5/GTA5 4.jpg',
          classification:'热销商品',
          price:'198',
          discount:1,
          platform:1,
        },
        {
          href:'',
          img0:'/resources/game/绝地求生/绝地求生 0.jpg',
          name:'绝地求生',
          img1:'/resources/game/绝地求生/绝地求生 1.jpg',
          img2:'/resources/game/绝地求生/绝地求生 2.jpg',
          img3:'/resources/game/绝地求生/绝地求生 3.jpg',
          img4:'/resources/game/绝地求生/绝地求生 4.jpg',
          classification:'热销商品',
          price:'98',
          discount:1,
          platform:1,
        },
        {
          href:'',
          img0:'/resources/game/莱莎的炼金工房2/莱莎的炼金工房2 0.jpg',
          name:'莱莎的炼金工房2',
          img1:'/resources/game/莱莎的炼金工房2/莱莎的炼金工房2 1.jpg',
          img2:'/resources/game/莱莎的炼金工房2/莱莎的炼金工房2 2.jpg',
          img3:'/resources/game/莱莎的炼金工房2/莱莎的炼金工房2 3.jpg',
          img4:'/resources/game/莱莎的炼金工房2/莱莎的炼金工房2 4.jpg',
          classification:'热销商品',
          price:'314',
          discount:1,
          platform:3,
        },
        {
          href:'',
          img0:'/resources/game/百战天虫大混战/百战天虫大混战 0.jpg',
          name:'百战天虫大混战',
          img1:'/resources/game/百战天虫大混战/百战天虫大混战 1.jpg',
          img2:'/resources/game/百战天虫大混战/百战天虫大混战 2.jpg',
          img3:'/resources/game/百战天虫大混战/百战天虫大混战 3.jpg',
          img4:'/resources/game/百战天虫大混战/百战天虫大混战 4.jpg',
          classification:'热销商品',
          price:'62',
          discount:1,
          platform:1,
        },
        {
          href:'',
          img0:'/resources/game/植物大战僵尸/植物大战僵尸 0.jpg',
          name:'植物大战僵尸™: 和睦小镇保卫战',
          img1:'/resources/game/植物大战僵尸/植物大战僵尸 1.jpg',
          img2:'/resources/game/植物大战僵尸/植物大战僵尸 2.jpg',
          img3:'/resources/game/植物大战僵尸/植物大战僵尸 3.jpg',
          img4:'/resources/game/植物大战僵尸/植物大战僵尸 4.jpg',
          classification:'热销商品',
          price:'268',
          discount:0.2,
          platform:1,
        },
      ],

    }
  },
}
</script>

<style lang="scss">

  .content_popUp{
    z-index: 300;
    //display: none;
    /* 过度动画用js写，display会和transition冲突 */
    opacity: 1;
    color: black;
    position: absolute;
    right: -320px;
    top: 8px;
    width: 308px;
    height: 322px;
    padding: 11px 16px;
    box-sizing: border-box;
    box-shadow:0 0 8px #000000;
    background-image: linear-gradient(#e3eaef,#c8d5e0);
    &:hover{
      cursor: pointer;
    }
    .game_info_name{
      font-size: 15px;
    }
    .game_info_publicTime{
      font-size: 12px;
      margin: 5px 0;
    }
    .game_info_img{
      img{
        width: 274px;
        height: 154px;
      }
    }
    .game_info_evaluation{
      font-size: 12px;
      width: 274px;
      height: 41px;
      background-color: #6a7884;
      border-radius: 2px;
      color: #c6d4df;
      padding: 4px;
      box-sizing: border-box;
      .game_info_evaluation_result{
        color: #66c0f4;
        display: inline-block;
      }
    }
    .game_info_labels{
      font-size: 12px;
      margin-top: 10px;
      .label{
        height: 20px;
        line-height: 20px;
        font-size: 12px;
        display: inline-block;
        background-color: #96a3ae;
        border-radius: 2px;
        text-align: center;
        margin: 3px 3px 3px 0;
        padding: 0 3px;
        box-sizing: border-box;
        color: #e3eaef;
      }
    }
    .triangle{
      border: 8px solid;
      position: absolute;
      top: 32px;
      left: -16px;
      border-color: transparent #dfe7ed transparent transparent;
    }
  }
</style>