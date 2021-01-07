<template>
  <div class="recommendation">
    <swiper :options="swiperOptions">
      <swiper-slide v-for="(item,index) in swiperSlideList" :key="index">
        <div class="recommendation_content"
             @mouseleave="showButton('hiddenButton')"
             @mouseover="hiddenButton('hiddenButton') ,switchImg(index,item.name)">
          <img class="img0" :src="item.img0">

          <video class="previewVideo" autoplay loop muted>
            <source :src="item.video" type="video/webm">
          </video>

          <div class="gameInfo">
            <div class="latestComment">"这网络问题我快要裂开了，哪次快吃鸡了就给我卡掉回大厅，游戏很好玩，但是有时候延迟升到一千几直接给我卡掉线我是真的难受啊"</div>
            <div class="readComplete">阅读整篇评测</div>
            <div class="author_block">
              <div class="userImage">
                <img src="/resources/background/userImage.jpg">
              </div>
              <div class="author_block_info">
                <div class="username">一脸滑稽</div>
                <div class="playTime">评测时已游玩 49.3 小时</div>
                <div class="voteNum">1 人觉得这篇评测有价值</div>
              </div>
              <div class="evaluationNum">共 5 篇评测</div>
            </div>
          </div>
n
          <!-- 右侧弹出层 -->
          <div ref="switchPanel" class="content_popUp">
            <div class="game_info">
              <div class="game_info_name">{{ item.name }}</div>
              <div class="game_info_publicTime">发行于：{{ item.publicTime }}</div>
            </div>
            <div class="game_info_img">
              <img ref="switchImage" :src="item.img1" >
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
let vm = null;
let imgSrc = null;
let gameName = null;
let i = 1;
let indexObj = 0;
let intervalObj;

export default {
  name: "CommunityRecommendation",
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
        loop:false,
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
        //change事件监听
        on:{
          //当轮播图改变的时候调用
          slideChange: function (){
            /* this.slides.length长度 加上前进后退按钮 */

            // if (this.activeIndex == this.slides.length-1){
            //   location.reload();
            // }

            // console.log("当前index" + this.activeIndex)
            // console.log("当前realindex" + this.realIndex)
          }
        }
      },
      swiperSlideList:[
        {
          href:'',
          name:'Project Wingman',
          img0:'/resources/communityRecommendation/Project Wingman/Project Wingman 0.jpg',
          img1:'/resources/communityRecommendation/Project Wingman/Project Wingman 1.jpg',
          img2:'/resources/communityRecommendation/Project Wingman/Project Wingman 2.jpg',
          img3:'/resources/communityRecommendation/Project Wingman/Project Wingman 3.jpg',
          img4:'/resources/communityRecommendation/Project Wingman/Project Wingman 4.jpg',
          video:'/resources/communityRecommendation/Project Wingman/Project Wingman.webm',
        },
        {
          href:'',
          name:'永恒轮回：黑色幸存者',
          img0:'/resources/communityRecommendation/永恒轮回：黑色幸存者/永恒轮回：黑色幸存者 0.jpg',
          img1:'/resources/communityRecommendation/永恒轮回：黑色幸存者/永恒轮回：黑色幸存者 1.jpg',
          img2:'/resources/communityRecommendation/永恒轮回：黑色幸存者/永恒轮回：黑色幸存者 2.jpg',
          img3:'/resources/communityRecommendation/永恒轮回：黑色幸存者/永恒轮回：黑色幸存者 3.jpg',
          img4:'/resources/communityRecommendation/永恒轮回：黑色幸存者/永恒轮回：黑色幸存者 4.jpg',
          video:'/resources/communityRecommendation/永恒轮回：黑色幸存者/永恒轮回：黑色幸存者.webm',
        },
        {
          href:'',
          name:'求生之路2',
          img0:'/resources/communityRecommendation/求生之路2/求生之路2 0.jpg',
          img1:'/resources/communityRecommendation/求生之路2/求生之路2 1.jpg',
          img2:'/resources/communityRecommendation/求生之路2/求生之路2 2.jpg',
          img3:'/resources/communityRecommendation/求生之路2/求生之路2 3.jpg',
          img4:'/resources/communityRecommendation/求生之路2/求生之路2 4.jpg',
          video:'/resources/communityRecommendation/求生之路2/求生之路2.webm',
        },
        {
          href:'',
          name:'星露谷物语',
          img0:'/resources/communityRecommendation/星露谷物语/星露谷物语 0.jpg',
          img1:'/resources/communityRecommendation/星露谷物语/星露谷物语 1.jpg',
          img2:'/resources/communityRecommendation/星露谷物语/星露谷物语 2.jpg',
          img3:'/resources/communityRecommendation/星露谷物语/星露谷物语 3.jpg',
          img4:'/resources/communityRecommendation/星露谷物语/星露谷物语 4.jpg',
          video:'/resources/communityRecommendation/星露谷物语/星露谷物语.webm',
        },
      ]
    }
  },
  created() {
    vm = this;
  },
  methods:{
    hiddenButton(name){
      this.$refs[name].style.visibility = 'hidden';
    },
    showButton(name){
      this.$refs[name].style.visibility = 'visible';
      window.clearInterval(intervalObj);

    },
    switchImg(index,name){
      gameName = name;
      indexObj = index;
      // console.log(indexObj,gameName)
      intervalObj = window.setInterval(this.switch,1000)
    },
    switch(){
      console.log(indexObj)
      imgSrc = '/resources/communityRecommendation/' +gameName+ '/' +gameName+ ' '+ i +'.jpg'
      vm.swiperSlideList[indexObj].img1 = imgSrc;
      // console.log(i)
      i++
      if (i === 5) {
        i = 1
      }
    }

  }

}
</script>

<style lang="scss">
  .recommendation{
    width: 1040px;
    height: 400px;
    margin: 0 auto 0 auto;
    position: relative;

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

    .recommendation_content{
      /*616*353*/
      width: 940px;
      height: 353px;
      margin: 0 auto;

      &:hover .content_popUp{
        opacity: 1;
        display: block;
        animation: mydisplay 0.5s;
      }

      &:hover .previewVideo{
        opacity: 1;
        transition: opacity 0.5s;
      }

      @keyframes mydisplay {
        0%{
          opacity: 0;
        }

        100%{
          opacity: 1;
        }
      }

      .img0{
        width: 616px;
        height: 353px;
        display: inline-block;
        box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
        &:hover{
          cursor: pointer;
        }
      }

      .previewVideo{
        position: absolute;
        z-index: 1;
        left: 50px;
        top: 0px;
        opacity: 0;
        width: 616px;
        transition: opacity 0.5s;
        border-top: 4px solid black;
        border-bottom: 4px solid black;
      }

      .gameInfo{
        position: absolute;
        z-index: 2;
        width: 324px;
        height: 353px;
        padding: 20px;
        box-sizing: border-box;
        font-size: 12px;
        color: #8091a2;
        /* 渐变色背景 */
        background: -webkit-linear-gradient( top, #506c86 5%, #10143100 96%);
        background: linear-gradient(#506c86 , #1b2838);
        display: inline-block;
        box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
        .latestComment{
          width: 279px;
          height: 210px;
          font-size: 18px;
          color: #ebebeb;
          overflow-wrap: break-word;
          overflow: hidden;
        }

        .readComplete{
          font-size: 12px;
          color: #c1dbf4;
          text-align: center;
          &:hover{
            color: white;
            cursor: pointer;
          }
        }

        .author_block{
          margin-top: 16px;

          .userImage{
          }

          .author_block_info{
            position: relative;
            top: -38px;
            left: 40px;
            .username{
              color: #c1dbf4;
              font-size: 13px;
              padding-bottom: 3px;
            }
          }

          .evaluationNum{
            line-height: 24px;
            color: #66c0f4;
            text-align: center;
            margin-top: -25px;
          }
        }
      }

      .content_popUp{
        z-index: 300;
        display: none;
        /* 过度动画用js写，display会和transition冲突 */
        opacity: 0;
        color: black;
        position: relative;
        left: 943px;
        top: -356px;
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