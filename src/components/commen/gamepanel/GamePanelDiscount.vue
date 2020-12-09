<template>
  <div class="gamePanelDiscount">
    <swiper v-bind:options="swiperOptions">
      <swiper-slide v-for="(item,index) in swiperSlideList" :key="index">
        <div class="content" @mouseleave="showButton('hiddenButton')" @mouseover="hiddenButton('hiddenButton')">
          <div class="gameOne gameLeft">
            <img src="">
          </div>

          <div class="gameTwo gameLeft"></div>

          <div class="gameRight">
            <div class="gameTwo gameLeft"></div>
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
      swiperSlideList: {
        one:[
          {

          }
        ],
        two:[

        ],
        three:[

        ],
        four:[

        ],
      },
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

  }
}
</script>

<style lang="scss">

.gamePanelDiscount{
  width: 1040px;
  height: 400px;
  margin: -8px auto 0 auto;
  position: relative;
  left: 0px;

  /*轮播图相关设置*/
  .swiper-container{
    height: 450px;
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
    //position: relative;
    //top: 50px;
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
    border: 1px solid skyblue;
    &:hover .content_popUp{
      //visibility: visible;
      opacity: 1;
      transition: opacity 0.25s;
      display: block;
    }
    .gameOne{
      width: 306px;
      height: 392px;
      border: 1px solid seashell;
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