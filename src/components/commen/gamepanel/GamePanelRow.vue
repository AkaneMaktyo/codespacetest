<template>
  <div class="gamePanelRow">

    <div class="top">

      <div class="nav">

        <div class="nav_item"
             :class="{'nav_item_active' : active == index }"
             v-for="(item,index) in nav" :key="index"
             @click="changeGameList(index)">
          {{ item }}
        </div>

        <div class="content">

          <div class="content_left">

            <div class="more_button">
              <span>查看更多</span>
            </div>

            <div class="gameItem"
                 :class="{'gameItem_active' : activeItem == index}"
                 @mouseover="inActive(index,'right')"
                 @mouseleave="outActive(index)"
                 v-for="(item,index) in gameList">
              <div class="img0">
                <img :src="item.img5">
              </div>
              <div class="gameInfo">
                <div class="gameInfo_name">{{ item.name }}</div>

                <!-- 平台图标切换，支持win和苹果 -->
                <div class="gameInfo_platform" v-show="item.platform=='1'">
                  <i class="fa fa-windows" aria-hidden="true"></i>
                </div>
                <div class="gameInfo_platform" v-show="item.platform=='2'">
                  <i class="fa fa-apple" aria-hidden="true"></i>
                </div>
                <div class="gameInfo_platform" v-show="item.platform=='3'">
                  <i class="fa fa-windows" aria-hidden="true"></i> <i class="fa fa-apple" aria-hidden="true"></i>
                </div>

                <div class="gameInfo_label">
                  <span>日系角色扮演</span>
                  <span>， 角色扮演</span>
                  <span>， 团队角色扮演</span>
                  <span>， 龙</span>
                </div>

                <div class="gameInfo_price">
                  <span v-show="item.discount == 1" class="price">¥ {{ item.price }}</span>
                  <!-- 打折信息 -->
                  <div v-show="item.discount != 1" class="price_discount">
                    <div class="discount">-{{ (1-item.discount)*100|numFilter }}%</div>
                    <div class="original_price">¥{{ item.price }}</div>
                    <div class="discount_price">¥{{ item.price*item.discount|numFilter }}</div>
                  </div>
                </div>

              </div>

            </div>

          </div>

          <div class="content_right" ref="right">
            <div class="content_right_item">

              <div class="content_right_name">{{ gameList[0].name }}</div>

              <div class="content_right_evaluation">
                <div>总体用户评测：</div>
                <span class="content_right_evaluation_result">特别好评</span>
                <span> (96)</span>
              </div>

              <div class="content_right_label">
                <span>独立</span>
                <span>角色扮演</span>
                <span>冒险</span>
                <span>策略</span>
              </div>

              <div class="content_right_img">
                <img :src="gameList[activeRight].img1" alt="">
                <img :src="gameList[activeRight].img2" alt="">
                <img :src="gameList[activeRight].img3" alt="">
                <img :src="gameList[activeRight].img4" alt="">
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GamePanelRow",
  data(){
    return {
      nav:['热门商品','新品商品','热销商品','优惠',],
      active:0,         // 导航栏active切换
      activeItem:0,     // left的游戏active的样式切换
      activeRight:0,    // 右边图片的游戏缩影
      gameList:[
        {
          href:'',
          name:'勇者斗恶龙XI S 寻觅逝去的时光 - Definitive Edition',
          img5:'/resources/shrinkGame/勇者斗恶龙XI/勇者斗恶龙XI 5.jpg',
          img1:'/resources/shrinkGame/勇者斗恶龙XI/勇者斗恶龙XI 1.jpg',
          img2:'/resources/shrinkGame/勇者斗恶龙XI/勇者斗恶龙XI 2.jpg',
          img3:'/resources/shrinkGame/勇者斗恶龙XI/勇者斗恶龙XI 3.jpg',
          img4:'/resources/shrinkGame/勇者斗恶龙XI/勇者斗恶龙XI 4.jpg',
          price:54,
          discount:1,
          platform:1,
        },
        {
          href:'',
          name:'Cyber Crush 2069',
          img5:'/resources/shrinkGame/Cyber Crush 2069/Cyber Crush 2069 5.jpg',
          img1:'/resources/shrinkGame/Cyber Crush 2069/Cyber Crush 2069 1.jpg',
          img2:'/resources/shrinkGame/Cyber Crush 2069/Cyber Crush 2069 2.jpg',
          img3:'/resources/shrinkGame/Cyber Crush 2069/Cyber Crush 2069 3.jpg',
          img4:'/resources/shrinkGame/Cyber Crush 2069/Cyber Crush 2069 4.jpg',
          price:8,
          discount:0.75,
          platform:1,
        },
        {
          href:'',
          name:'赛博朋克2077',
          img5:'/resources/game/赛博朋克2077/赛博朋克2077 5.jpg',
          img1:'/resources/game/赛博朋克2077/赛博朋克2077 1.jpg',
          img2:'/resources/game/赛博朋克2077/赛博朋克2077 2.jpg',
          img3:'/resources/game/赛博朋克2077/赛博朋克2077 3.jpg',
          img4:'/resources/game/赛博朋克2077/赛博朋克2077 4.jpg',
          price:298,
          discount:1,
          platform:1,
        },
        {
          href:'',
          name:'Cyber Crush 2069',
          img5:'/resources/shrinkGame/Cyber Crush 2069/Cyber Crush 2069 5.jpg',
          img1:'/resources/shrinkGame/Cyber Crush 2069/Cyber Crush 2069 1.jpg',
          img2:'/resources/shrinkGame/Cyber Crush 2069/Cyber Crush 2069 2.jpg',
          img3:'/resources/shrinkGame/Cyber Crush 2069/Cyber Crush 2069 3.jpg',
          img4:'/resources/shrinkGame/Cyber Crush 2069/Cyber Crush 2069 4.jpg',
          price:11,
          discount:0.55,
          platform:2,
        },
        {
          href:'',
          name:'Monster Sanctuary',
          img5:'/resources/shrinkGame/Monster Sanctuary/Monster Sanctuary 5.jpg',
          img1:'/resources/shrinkGame/Monster Sanctuary/Monster Sanctuary 1.jpg',
          img2:'/resources/shrinkGame/Monster Sanctuary/Monster Sanctuary 2.jpg',
          img3:'/resources/shrinkGame/Monster Sanctuary/Monster Sanctuary 3.jpg',
          img4:'/resources/shrinkGame/Monster Sanctuary/Monster Sanctuary 4.jpg',
          price:78,
          discount:0.9,
          platform:3,
        },
        {
          href:'',
          name:'我的阴暗面',
          img5:'/resources/shrinkGame/我的阴暗面/我的阴暗面 5.jpg',
          img1:'/resources/shrinkGame/我的阴暗面/我的阴暗面 1.jpg',
          img2:'/resources/shrinkGame/我的阴暗面/我的阴暗面 2.jpg',
          img3:'/resources/shrinkGame/我的阴暗面/我的阴暗面 3.jpg',
          img4:'/resources/shrinkGame/我的阴暗面/我的阴暗面 4.jpg',
          price:58,
          discount:0.9,
          platform:1,
        },
        {
          href:'',
          name:'兵法：战国篇',
          img5:'/resources/shrinkGame/兵法：战国篇/兵法：战国篇 5.jpg',
          img1:'/resources/shrinkGame/兵法：战国篇/兵法：战国篇 1.jpg',
          img2:'/resources/shrinkGame/兵法：战国篇/兵法：战国篇 2.jpg',
          img3:'/resources/shrinkGame/兵法：战国篇/兵法：战国篇 3.jpg',
          img4:'/resources/shrinkGame/兵法：战国篇/兵法：战国篇 4.jpg',
          price:54,
          discount:1,
          platform:1,
        },
        {
          href:'',
          name:'狼与香辛料VR2',
          img5:'/resources/communityRecommendation/狼与香辛料VR2/狼与香辛料VR2 5.jpg',
          img1:'/resources/communityRecommendation/狼与香辛料VR2/狼与香辛料VR2 1.jpg',
          img2:'/resources/communityRecommendation/狼与香辛料VR2/狼与香辛料VR2 2.jpg',
          img3:'/resources/communityRecommendation/狼与香辛料VR2/狼与香辛料VR2 3.jpg',
          img4:'/resources/communityRecommendation/狼与香辛料VR2/狼与香辛料VR2 4.jpg',
          price:54,
          discount:1,
          platform:1,
        },
        {
          href:'',
          name:'The Witcher 3: Wild Hunt - Game of the Year Edition',
          img5:'/resources/shrinkGame/巫师3/巫师3 5.jpg',
          img1:'/resources/shrinkGame/巫师3/巫师3 1.jpg',
          img2:'/resources/shrinkGame/巫师3/巫师3 2.jpg',
          img3:'/resources/shrinkGame/巫师3/巫师3 3.jpg',
          img4:'/resources/shrinkGame/巫师3/巫师3 4.jpg',
          price:158,
          discount:0.3,
          platform:1,
        },
        {
          href:'',
          name:'Red Dead Redemption 2',
          img5:'/resources/shrinkGame/Red Dead Redemption 2/Red Dead Redemption 2 5.jpg',
          img1:'/resources/shrinkGame/Red Dead Redemption 2/Red Dead Redemption 2 1.jpg',
          img2:'/resources/shrinkGame/Red Dead Redemption 2/Red Dead Redemption 2 2.jpg',
          img3:'/resources/shrinkGame/Red Dead Redemption 2/Red Dead Redemption 2 3.jpg',
          img4:'/resources/shrinkGame/Red Dead Redemption 2/Red Dead Redemption 2 4.jpg',
          price:249,
          discount:0.67,
          platform:1,
        },
      ]
    }
  },
  methods:{
    changeGameList(index){
      this.active = index;
      console.log(this.active)
    },
    inActive(index,name){
      this.activeItem = index;
      this.activeRight = index;
    },
    outActive(){

    },
  },
  filters: {
    numFilter(value) {
      // 截取当前数据到小数点后两位
      let realVal = Number(value).toFixed(0)
      // num.toFixed(2)获取的是字符串
      return Number(realVal)
    }
  },
}
</script>

<style lang="scss">
  .gamePanelRow{
    height: 800px;
    background: linear-gradient( to bottom, rgba(42,71,94,1.0) 5%, rgba(42,71,94,0.0) 70%);

    .top{
      width: 100%;
      background-color: #1b2838;
      margin-top: 50px;
      .nav{
        background-color: #1b2838;
        color: #4f94bc;
        font-size: 13px;
        width: 940px;
        height: 30px;
        line-height: 30px;
        position: relative;
        margin: 0 auto;

        .nav_item{
          display: inline-block;
          padding: 0 10px;
          &:hover{
            cursor: pointer;
          }
        }

        .nav_item_active{
          color: white;
          background-color: #2a475e;
          cursor: default;
          border-top-left-radius: 3px;
          border-top-right-radius: 3px;
        }
      }
    }

    .content{
      width: 940px;
      height: 776px;
      margin-top: 10px;
      .content_left{
        width: 618px;
        height: 100%;
        background: rgba( 0, 0, 0, 0.2 );
        display: inline-block;
        //padding-right: 14px;

        .more_button{
          width: 100%;
          padding-bottom: 10px;
          span{
            padding: 5px 15px;
            font-size: 12px;
            position: relative;
            left: 531px;
            top: 5px;
            color: white;
            background: transparent;
            border: 1px solid rgba(255,255,255,0.4);
            border-radius: 2px;
            &:hover{
              border-color: white;
              cursor: pointer;
            }
          }
        }

        .gameItem{
          width: 618px;
          height: 69px;
          font-size: 15px;
          background: rgba( 0, 0, 0, 0.2 );
          color: #384959;
          margin-bottom: 5px;

          .img0{
            display: inline-block;
          }

          .gameInfo{
            display: inline-block;
            position: relative;
            top: -9px;
            left: 16px;

            .gameInfo_name{
              font-size: 15px;
              color: #c7d5e0;
              line-height: 18px;
              width: 350px;
              text-overflow: ellipsis;
              white-space: nowrap;
              display: block;
              overflow: hidden;
              transition: color 0.25s;

            }

            .gameInfo_platform{
              height: 20px;
              line-height: 20px;
              //color: #384959;
              color: #606b76;
            }

            .gameInfo_label{
              height: 20px;
              font-size: 12px;
              line-height: 20px;
              color: #384959;
            }

            .gameInfo_price{
              width: 120px;
              height: 30px;
              margin: 17px 16px 0 0;
              position: absolute;
              left: 280px;
              top: -5px;
              .price{
                color: #acdbf5;
                font-size: 13px;
                float: right;
                margin-right: 5px;
              }

              .price_discount{

                .discount{
                  width: 40px;
                  height: 18px;
                  line-height: 18px;
                  font-size: 14px;
                  color: #acd007;
                  margin: 8px 0 0;
                  text-align: center;
                  background-color: #4c6b22;
                }

                .original_price{
                  text-decoration-line: line-through;
                  color: #7193a6;
                  font-size: 12px;
                  color: #7193a6;
                  width: 25px;
                  height: 14px;
                  line-height: 14px;
                  text-align: center;
                  position: relative;
                  top: -26px;
                  left: 96px;
                }

                .discount_price{
                  font-size: 13px;
                  color: #acdbf5;
                  position: relative;
                  height: 16px;
                  line-height: 16px;
                  text-align: center;
                  top: -25px;
                  left: 48px;
                }
              }

            }
          }


        }
        /* active时的样式 */
        .gameItem_active{
          width: 632px;
          background: linear-gradient( to right ,#b9daee , #95bcd3);
          .gameInfo>.gameInfo_name{
            color: #10161b;
          }
          .gameInfo>.gameInfo_price>.price{
            color: #263645;
          }
          .gameInfo>.gameInfo_price>.price_discount>.discount_price{
            color: #263645;
          }
        }


      }

      .content_right{
        width: 308px;
        height: 775px;
        display: inline-block;
        position: absolute;
        left: 618px;
        top: 40px;
        background-color: #95bcd3;
        margin-left: 14px;

        .content_right_item{
          position: relative;
          top: 13px;
          left: 15px;
          .content_right_name{
            text-transform: none;
            font-size: 21px;
            letter-spacing: 0px;
            color: #263645;
            height: 30px;
            padding-right: 8px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }

          .content_right_evaluation{
            background: linear-gradient( to right ,#526a7c,#4d5f6f);
            width: 272px;
            height: 42px;
            font-size: 12px;
            color: #C6D4DF;
            border-radius: 2px;
            padding: 0px 0 0px 7px;
            box-sizing: border-box;

            div{
              height: 16px;
            }
            .content_right_evaluation_result{
              color: #66c0f4;
            }
          }

          .content_right_label{
            color: white;
            font-size: 12px;
            margin: 5px 0;
            span{
              background: #51687b;
              margin-right: 5px;
              padding: 2px 10px;
              box-sizing: border-box;
              border-radius: 2px;
              &:hover{
                color: #66c0f4;
                cursor: pointer;
              }
            }
          }

          .content_right_img{
            img{
              width: 274px;
              height: 150px;
              margin: -3px 0;
            }
          }

        }
      }

    }

  }
</style>