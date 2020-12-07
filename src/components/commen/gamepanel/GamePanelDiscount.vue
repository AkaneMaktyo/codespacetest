<template>
  <div class="gamePanelDiscount">
    <div class="gamePanelDiscount_title">特别优惠</div>
    <div class="swiper_box">
      <swiper v-bind:options="swiper_box.swiperOptions">
        <swiper-slide v-for="(item,index) in swiperSlideList" :key="index">
          <div class="gamePanelDiscount_content">
            <img class="img0" :src="item.img0" :alt="item.name">
            <div class="gamePanelDiscount_content_attachment" >
              <div class="gamePanelDiscount_content_name">{{ item.name }}</div>
              <div class="gamePanelDiscount_content_screenshot">
                <div class="gamePanelDiscount_content_screenshot_item" @mouseover="viewImage()">
                  <img :src="item.img1" >
                </div>
                <div class="gamePanelDiscount_content_screenshot_item">
                  <img :src="item.img2">
                </div>
                <div class="gamePanelDiscount_content_screenshot_item">
                  <img :src="item.img3">
                </div>
                <div class="gamePanelDiscount_content_screenshot_item">
                  <img :src="item.img4">
                </div>

              </div>
              <div class="gamePanelDiscount_content_state">
                <div class="game_state">现已推出</div>
                <div class="game_classification">{{ item.classification }}</div>
              </div>
              <div class="gamePanelDiscount_content_bottom">
                <div v-show="item.discount == 1" class="gamePanelDiscount_content_price">￥ {{ item.price }}</div>
                <!-- 打折信息 -->
                <div v-show="item.discount != 1" class="gamePanelDiscount_content_price_discount">
                  <div class="discount">-{{ 100-(item.discount*100) }}%</div>
                  <div class="original_price">￥{{ item.price }}</div>
                  ￥{{ item.price*item.discount|numFilter }}
                </div>
                <!-- 平台图标切换，支持win和苹果 -->
                <div class="gamePanelDiscount_content_platform" v-show="item.platform=='1'">
                  <i class="fa fa-windows" aria-hidden="true"></i>
                </div>
                <div class="gamePanelDiscount_content_platform" v-show="item.platform=='2'">
                  <i class="fa fa-apple" aria-hidden="true"></i>
                </div>
                <div class="gamePanelDiscount_content_platform" v-show="item.platform=='3'">
                  <i class="fa fa-windows" aria-hidden="true"></i> <i class="fa fa-apple" aria-hidden="true"></i>
                </div>

              </div>
              <!-- 右侧弹出层 -->
              <div class="gamePanelDiscount_content_popUp">
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
            </div>


          </div>
          <div class="swiper-button-prev swiper-navigation-button"></div><!--左箭头。如果放置在swiper-container外面，需要自定义样式。-->
          <div class="swiper-button-next swiper-navigation-button"></div><!--右箭头。如果放置在swiper-container外面，需要自定义样式。-->
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>

  </div>
</template>

<script>
import {Swiper,SwiperSlide} from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: "GamePanelDiscount",
  components:{
    Swiper,
    SwiperSlide
  },
  data(){
    return{
      swiper_box:{
        swiperOptions:{
          autoplay: {
            delay:5000,
            disableOnInteraction:true, //用户操作swiper后，是否禁止autoplay
          },
          loop:true,
          effect:'fade',
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',

          },
          //分页器设置
          pagination:{
            el:'.swiper-pagination',  //要和分页器类名一致
            clickable:true,   //点击
            bulletElement:'div',  //将其生成的默认标签span变成div,方便设置样式
            bulletClass:'my-bullet',  //自定义分页器样式
            bulletActiveClass:'my-bullet-active',   //分页器生成的激活时的类
          },
        },


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
          publicTime:'2020年8月四日'
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
          name:'莱莎的炼金工房2',
          img1:'/resources/game/百战天虫大混战/百战天虫大混战 1.jpg',
          img2:'/resources/game/百战天虫大混战/百战天虫大混战 2.jpg',
          img3:'/resources/game/百战天虫大混战/百战天虫大混战 3.jpg',
          img4:'/resources/game/百战天虫大混战/百战天虫大混战 4.jpg',
          classification:'热销商品',
          price:'62',
          discount:1,
          platform:1,
        },
      ],
    }
  },
  methods:{
    viewImage(){

    }
  },
  filters: {
    numFilter(value) {
      // 截取当前数据到小数点后两位
      let realVal = Number(value).toFixed(2)
      // num.toFixed(2)获取的是字符串
      return Number(realVal)
    }

  }
}
</script>

<style lang="scss">
/* 首页推荐panel */
.gamePanelDiscount{
  width: 1040px;
  height: 430px;
  margin: 0 auto;
  position: relative;
  /* 轮播图相关设置 */
  .swiper_box{
    .swiper-container{
      overflow: visible;
    }
    /* 前进后退按钮 */
    .swiper-button-prev,.swiper-button-next{
      color: white;
      font-weight: 900;
      background-repeat: no-repeat;
      &:hover{
        cursor: default;
      }
    }

    /* 分页器 */
    .swiper-pagination{
      position: relative;
      width: 944px;
      height: 28px;
      line-height: 28px;
      margin: 10px auto;
      .my-bullet {
        width: 15px;
        height: 9px;
        background: #495360;
        border-radius: 2px;
        display: inline-block;
        margin: 0 3px;
        &:hover {
          cursor: pointer;
          background-color: #767e88;
        }
      }
      .my-bullet-active{
        background-color: #767e88;
      }
    }
  }

  /* 游戏标题 */
  .gamePanelDiscount_title{
    color: white;
    font-size: 14px;
    margin: 4px 50px;
    letter-spacing: 2px;
  }

  /* 轮播图里的内容 */
  .gamePanelDiscount_content{
    position: relative;
    z-index: 100;
    /* 让鼠标事件可以穿透 */
    pointer-events: none;
    &:hover{
      cursor: pointer;
    }
    .img0{
      z-index: 100;
      position: relative;
      margin: 7px 0 0 50px ;
      box-shadow:0 0 8px #000000;
      display: inline-block;
    }


    .gamePanelDiscount_content_attachment{
      width: 325px;
      height: 353px;
      z-index: -1;
      display: inline-block;
      background-color: #0a141d;
      position: absolute;
      top: 7px;
      right: 49px;
      box-shadow:0 0 3px #000000;
      pointer-events: none;

      /* ！！！！！！！！！！！！！！！！！！！！！！！！ */
      &:hover>.gamePanelDiscount_content_popUp{
        //opacity: 1;
        visibility: visible;
        //transition: opacity 0.25s;
      }
      .gamePanelDiscount_content_popUp{
        //transition: opacity 0.25s;
        visibility: visible;
        //opacity: 1;
        color: black;
        position: absolute;
        border: 1px solid white;
        width: 308px;
        height: 322px;
        padding: 11px 16px;
        box-sizing: border-box;
        left: 327px;
        top: 0px;
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
      .gamePanelDiscount_content_name{
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
      .gamePanelDiscount_content_screenshot{
        width: 344px;
        height: 160px;
        background-size: contain;
        background-repeat: no-repeat;
        display: inline-block;
        position: absolute;
        top: 79px;
        right: -2px;
        .gamePanelDiscount_content_screenshot_item{
          width: 162px;
          height: 69px;
          display: inline-block;
          opacity: 0.6;
          padding: 0 10px 10px 0;
          pointer-events: all;
          &:hover{
            opacity: 1;
            cursor: pointer;
          }
          img{
            width: 162px;
            height: 69px;
          }

        }
      }
      .gamePanelDiscount_content_state{
        position: relative;
        top: 243px;
        left: 16px;
        .game_state{
          color: white;
          font-size: 21px;

        }
        .game_classification{
          font-size: 12px;
          color: white;
          background-color: #394148;
          width: 62px;
          height: 19px;
          line-height: 19px;
          text-align: center;
          border-radius: 2px;
          margin-top: 3px;
        }


      }
      .gamePanelDiscount_content_bottom{
        position: relative;
        top: 276px;
        right: -14px;
        color: white;
        width: 300px;
        .gamePanelDiscount_content_price{
          display: inline-block;
          font-size: 12px;
          color: #acdbf5;
          text-space: 20;
        }
        .gamePanelDiscount_content_price_discount{
          display: inline-block;
          font-size: 12px;
          width: 150px;
          word-spacing: .1em;
          color: #acdbf5;
          .discount{
            display: inline-block;
            color: #a4d007;
            width: 35px;
            height: 15px;
            text-align: center;
            margin-right: 4px;
            background-color: #4c6b22;

          }
          .original_price{
            display: inline-block;
            text-decoration-line: line-through;
            color: #7193a6;
          }
        }
        .gamePanelDiscount_content_platform{
          display: inline-block;
          color: #b5b8bb;
          float: right;
        }
      }

    }
  }
}
</style>