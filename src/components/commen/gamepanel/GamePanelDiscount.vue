<template>
  <div class="gamePanelDiscount">
        <div class="content">
          <div class="gameLarge">
            <img :src="swiperSlideList.one[0].img0">
            <div class="gameInfo">
              <div class="gameName">{{ swiperSlideList.one[0].name }}</div>
              <div class="discountCountdown">优惠截止时间：{{ swiperSlideList.one[0].countDown }}</div>
              <!-- 打折信息 -->
              <div v-show="swiperSlideList.one[0].discount != 1" class="discount_price">
                <div class="discount">-{{ 100-(swiperSlideList.one[0].discount*100) }}%</div>
                <div class="original_price">
                  <span style="text-decoration-line: line-through;">￥{{ swiperSlideList.one[0].price }}</span>
                  <div>￥{{ swiperSlideList.one[0].price*swiperSlideList.one[0].discount|numFilter }}</div>
                </div>
              </div>
            </div>
            <!-- 右侧弹出层 -->
            <div ref="switchPanel" class="content_popUp">
              <div class="game_info">
                <div class="game_info_name">{{ swiperSlideList.one[0].name }}</div>
                <div class="game_info_publicTime">发行于：{{ swiperSlideList.one[0].publicTime }}</div>
              </div>
              <div class="game_info_img">
                <img :src="swiperSlideList.one[0].img1" >
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

          <div class="gameLarge">
            <img :src="swiperSlideList.one[1].img0">
            <div class="gameInfo">
              <div class="gameName">{{ swiperSlideList.one[1].name }}</div>
              <div class="discountCountdown">优惠截止时间：{{ swiperSlideList.one[1].countDown }}</div>
              <!-- 打折信息 -->
              <div v-show="swiperSlideList.one[1].discount != 1" class="discount_price">
                <div class="discount">-{{ 100-(swiperSlideList.one[1].discount*100) }}%</div>
                <div class="original_price">
                  <span style="text-decoration-line: line-through;">￥{{ swiperSlideList.one[1].price }}</span>
                  <div>￥{{ swiperSlideList.one[1].price*swiperSlideList.one[1].discount|numFilter }}</div>
                </div>
              </div>
            </div>
            <!-- 右侧弹出层 -->
            <div ref="switchPanel" class="content_popUp">
              <div class="game_info">
                <div class="game_info_name">{{ swiperSlideList.one[0].name }}</div>
                <div class="game_info_publicTime">发行于：{{ swiperSlideList.one[0].publicTime }}</div>
              </div>
              <div class="game_info_img">
                <img :src="swiperSlideList.one[0].img1" >
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
          <div class="gameLarge three">
            <img :src="swiperSlideList.one[2].img0">
            <div class="gameInfo">
              <div class="gameName">{{ swiperSlideList.one[2].name }}</div>
              <div class="discountCountdown">优惠截止时间：{{ swiperSlideList.one[2].countDown }}</div>
              <!-- 打折信息 -->
              <div v-show="swiperSlideList.one[2].discount != 1" class="discount_price">
                <div class="discount">-{{ 100-(swiperSlideList.one[2].discount*100) }}%</div>
                <div class="original_price">
                  <span style="text-decoration-line: line-through;">￥{{ swiperSlideList.one[2].price }}</span>
                  <div>￥{{ swiperSlideList.one[2].price*swiperSlideList.one[2].discount|numFilter }}</div>
                </div>
              </div>
            </div>
            <!-- 右侧弹出层 -->
            <div ref="switchPanel" class="content_popUp">
              <div class="game_info">
                <div class="game_info_name">{{ swiperSlideList.one[0].name }}</div>
                <div class="game_info_publicTime">发行于：{{ swiperSlideList.one[0].publicTime }}</div>
              </div>
              <div class="game_info_img">
                <img :src="swiperSlideList.one[0].img1" >
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
            href:'',
            name:'The Survivalists',
            img0:'/resources/discountGame/The Survivalists/The Survivalists 0.jpg',
            img1:'/resources/discountGame/The Survivalists/The Survivalists 1.jpg',
            img2:'/resources/discountGame/The Survivalists/The Survivalists 2.jpg',
            img3:'/resources/discountGame/The Survivalists/The Survivalists 3.jpg',
            img4:'/resources/discountGame/The Survivalists/The Survivalists 4.jpg',
            discount:0.26,
            price:98,
            countDown:'12月12日上午2:00',
          },
          {
            href:'',
            name:'The Long Dark',
            img0:'/resources/discountGame/The Long Dark/The Long Dark 0.jpg',
            img1:'/resources/discountGame/The Long Dark/The Long Dark 1.jpg',
            img2:'/resources/discountGame/The Long Dark/The Long Dark 2.jpg',
            img3:'/resources/discountGame/The Long Dark/The Long Dark 3.jpg',
            img4:'/resources/discountGame/The Long Dark/The Long Dark 4.jpg',
            discount:0.25,
            price:80,
            countDown:'12月12日上午2:00',
          },
          {
            href:'',
            name:'苏军游击队',
            img0:'/resources/discountGame/苏军游击队/苏军游击队 0.jpg',
            img1:'/resources/discountGame/苏军游击队/苏军游击队 1.jpg',
            img2:'/resources/discountGame/苏军游击队/苏军游击队 2.jpg',
            img3:'/resources/discountGame/苏军游击队/苏军游击队 3.jpg',
            img4:'/resources/discountGame/苏军游击队/苏军游击队 4.jpg',
            discount:0.80,
            price:99,
            countDown:'12月12日上午2:00',
          },

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
      let realVal = Number(value).toFixed(0)
      // num.toFixed(2)获取的是字符串
      return Number(realVal)
    }
  },
  methods:{


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
    left: 51px;
    top: 10px;
    width: 940px;
    height: 392px;
    box-sizing: border-box;

    .gameLarge{
      width: 306px;
      height: 392px;
      display: inline-block;
      margin-right: 11px;

      &:hover .content_popUp{
        opacity: 1;
        display: block;
        animation: mydisplay 0.25s;
      }

      @keyframes mydisplay {
        0%{
          opacity: 0;
        }
        100%{
          opacity: 1;
        }
      }

      img{
        width: 306px;
        height: 350px;
        position: absolute;
        top: 0px;
        z-index: 1;
        &:hover{
          cursor: pointer;
        }
        /* 不缩放，对图片进行剪切，保留原始比例：
        object-fit: cover;*/
      }

      .gameInfo{
        position: absolute;
        top: 279px;
        height: 113px;
        width: 306px;
        z-index: 2;
        background-image: url("/resources/background/discountBackground.jpg");
        background-position: bottom left ;

        .gameName{
          font-size: 14px;
          min-height: 23px;
          color: white;
          margin: 15px 0 0 15px;
        }

        .discountCountdown{
          font-size: 12px;
          font-weight: 300;
          color: #acdbf5;
          margin: 5px 0 0 15px;
        }

        .discount_price{
          font-size: 13px;
          color: #acdbf5;
          width: 116px;
          height: 34px;
          background-color: #4c6b22;
          margin: 10px 0 0 15px;
          .discount{
            font-size: 26px;
            color: #a4d007;
            display: inline-block;
            position: relative;
            top: -4px;
            left: 8px;
          }
          .original_price{
            width: 43px;
            text-indent: 6px;
            position: relative;
            right: -13px;
            background-color: #0d2f3f;
            display: inline-block;

            .convert{
              text-decoration-line: none;
            }
          }
        }
      }

      .content_popUp{
        z-index: 300;
        display: none;
        opacity: 0;
        color: black;
        position: relative;
        top: -95px;
        left: 310px;
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
            position: unset;
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
    .three{
      margin-right: 0px;
    }


  }


}
</style>