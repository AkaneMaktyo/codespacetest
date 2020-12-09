<template>
  <div class="gamePanelContentMax">
    <swiper v-bind:options="swiperOptions">
      <swiper-slide v-for="(item,index) in swiperSlideList" :key="index">
        <div class="content" @mouseleave="showButton('hiddenButton')" @mouseover="hiddenButton('hiddenButton')">
          <img ref="previewImg" :src="item.img0" class="img0"></img>
          <div class="content_right">

            <div class="content_right_name">{{ item.name }}</div>

            <div class="content_screenshot">
              <div class="content_screenshot_item">
                <img @mouseover="previewImg(index,item.img1)"
                     @mouseleave="rollbackImg(index)"
                     :src="item.img1" >
              </div>

              <div class="content_screenshot_item">
                <img @mouseover="previewImg(index,item.img2)"
                     @mouseleave="rollbackImg(index)"
                     :src="item.img2" >
              </div>

              <div class="content_screenshot_item">
                <img @mouseover="previewImg(index,item.img3)"
                     @mouseleave="rollbackImg(index)"
                     :src="item.img3" >
              </div>

              <div class="content_screenshot_item">
                <img @mouseover="previewImg(index,item.img4)"
                     @mouseleave="rollbackImg(index)"
                     :src="item.img4" >
              </div>

            </div>

            <div class="content_state">
              <div class="game_state">现已推出</div>
              <div class="game_classification">{{ item.classification }}</div>
            </div>

            <div class="content_bottom">
              <div v-show="item.discount == 1" class="content_bottom_price">￥ {{ item.price }}</div>
              <!-- 打折信息 -->
              <div v-show="item.discount != 1" class="content_bottom_price_discount">
                <div class="discount">-{{ 100-(item.discount*100) }}%</div>
                <div class="original_price">￥{{ item.price }}</div>
                ￥{{ item.price*item.discount|numFilter }}
              </div>
              <!-- 平台图标切换，支持win和苹果 -->
              <div class="content_platform" v-show="item.platform=='1'">
                <i class="fa fa-windows" aria-hidden="true"></i>
              </div>
              <div class="content_platform" v-show="item.platform=='2'">
                <i class="fa fa-apple" aria-hidden="true"></i>
              </div>
              <div class="content_platform" v-show="item.platform=='3'">
                <i class="fa fa-windows" aria-hidden="true"></i> <i class="fa fa-apple" aria-hidden="true"></i>
              </div>

            </div>

          </div>

        <!-- 右侧弹出层 -->
        <div  ref="switchPanel" class="content_popUp">
          <div class="game_info">
            <div class="game_info_name">{{ item.name }}</div>
            <div class="game_info_publicTime">发行于：{{ item.publicTime }}</div>
          </div>
          <div class="game_info_img">
            <img :src="item.img0" >
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

      </swiper-slide>
      <div class="swiper-button-prev swiper-navigation-button"></div>
      <div ref="hiddenButton" class="swiper-button-next swiper-navigation-button"></div>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import {Swiper,SwiperSlide} from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

let vm = null
let temp = null

export default {
  name: "GamePanelMax",
  components:{
    Swiper,
    SwiperSlide
  },
  data(){
    return{
      swiperOptions:{
        autoplay:{
          delay:10000,
        },
        loop:true,
        effect:'fade',
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          hiddenClass: 'my-button-hidden'
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

      //change事件监听
      on:{
        //当轮播图改变的时候调用
        slideNextTransitionStart: function (){
          alert('this.activeIndex');
          if (this.activeIndex == 5){
            this.activeIndex = 1;
          }
        }
      }
    }
  },
  created() {
    //获得vue对象
    vm = this;
  },
  filters: {
    numFilter(value) {
      // 截取当前数据到小数点后两位
      let realVal = Number(value).toFixed(2)
      // num.toFixed(2)获取的是字符串
      return Number(realVal)
    }
  },
  methods:{
    hiddenButton(name){
      this.$refs[name].style.visibility = 'hidden';
      // console.log(this.$refs[name].style.visibility)
    },
    showButton(name){
      this.$refs[name].style.visibility = 'visible';
      // console.log(this.$refs[name].style.visibility)
    },
    previewImg(index,src){
      temp = vm.swiperSlideList[index].img0;
      vm.swiperSlideList[index].img0 = src;
    },
    rollbackImg(index){
      vm.swiperSlideList[index].img0 = temp;
    }
    // animationShow(name){
    //   this.$refs[name].style.display = 'block';
    //   this.$refs[name].style.display;
    //   this.$refs[name].style.opacity = '1';
    // },
    // animationHidden(name){
    //   this.$refs[name].style.transition = 'opacity 0.25s'
    //   this.$refs[name].style.opacity = '0'
    //   setTimeout(function (){
    //     this.$refs[name].style.display = 'none'
    //   },250)
    // }
  }
}
</script>

<style lang="scss">

  .gamePanelContentMax{
    width: 1040px;
    height: 400px;
    margin: -8px auto 0 auto;
    position: relative;
    left: -47px;

    /*轮播图相关设置*/
    .swiper-container{
      height: 400px;
      width: 1040px;
      overflow: visible;
    }

    /* 前进后退按钮 */
    .swiper-button-prev,.swiper-button-next{
      color: white;
      font-weight: 900;
      background-repeat: no-repeat;

    }

    /* 分页器 */
    .swiper-pagination{
      position: relative;
      width: 940px;
      height: 28px;
      line-height: 28px;
      margin: -27px auto 0 auto;
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

    .content {
      position: absolute;
      left: 42px;
      width: 940px;
      padding: 8px;
      box-sizing: border-box;
      &:hover .content_popUp{
        //visibility: visible;
         opacity: 1;
        transition: opacity 0.25s;
        display: block;

      }

      img{
        position: relative;
        z-index: 2;
        display: inline-block;
        box-shadow:0 0 8px #000000;
      }
      .img0{
        width: 616px;
        height: 353px;
      }
      .content_right {
        display: inline-block;
        height: 353px;
        width: 325px;
        position: absolute;
        background-color: #0a141d;
        box-shadow:0 0 3px #000000;

        .content_right_name {
          width: 314px;
          height: 80px;
          line-height: 80px;
          font-size: 24px;
          color: white;
          font-weight: 300;
          padding: 0 0 0 17px ;
          box-sizing: border-box;
          /* 文字溢出显示省略号 */
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          word-wrap: normal;
        }

        .content_screenshot {
          width: 344px;
          height: 160px;
          background-size: contain;
          background-repeat: no-repeat;
          margin-left: -19px;
          position: relative;
          z-index: 1;
          .content_screenshot_item{
            width: 162px;
            height: 69px;
            display: inline-block;
            opacity: 0.6;
            padding: 0 10px 10px 0;
            /* 这里多了 */
            //pointer-events: none;
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

        .content_state {
          padding: 3px 0 0 17px ;
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

        .content_bottom{
          right: -14px;
          color: white;
          height: 20px;
          margin: 33px 0 0 15px;

          .content_bottom_price{
            display: inline-block;
            font-size: 12px;
            color: #acdbf5;
            text-space: 20;
          }

          .content_bottom_price_discount{
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

          .content_platform{
            display: inline-block;
            float: right;
            color: #b5b8bb;
            margin-right: 10px;
          }
        }


      }

      .content_popUp{
        z-index: 300;
        display: none;
        /* 过度动画用js写，display会和transition冲突 */
        opacity: 0;
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
            box-shadow: none;
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
    }


  }
</style>