<template>
  <div class="game-panel-min">

  </div>
</template>

<script>
import {Swiper,SwiperSlide} from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: "GamePanelMin",
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiper_box: {
        swiperOptions: {
          // autoplay: {
          //   delay:5000,
          //   disableOnInteraction:true, //用户操作swiper后，是否禁止autoplay
          // },
          loop: true,
          effect: 'fade',
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',

          },
          //分页器设置
          pagination: {
            el: '.swiper-pagination',  //要和分页器类名一致
            clickable: true,   //点击
            bulletElement: 'div',  //将其生成的默认标签span变成div,方便设置样式
            bulletClass: 'my-bullet',  //自定义分页器样式
            bulletActiveClass: 'my-bullet-active',   //分页器生成的激活时的类
          },
        },
      },
      swiperSlideList: [
        {
          href: '',
          img0: '/resources/game/糖豆人/糖豆人 0.jpg',
          name: '糖豆人：终极淘汰赛',
          img1: '/resources/game/糖豆人/糖豆人 1.jpg',
          img2: '/resources/game/糖豆人/糖豆人 2.jpg',
          img3: '/resources/game/糖豆人/糖豆人 3.jpg',
          img4: '/resources/game/糖豆人/糖豆人 4.jpg',
          price: '58',
          publicTime: '2020年8月四日'
        },
        {
          href: '',
          img0: '/resources/game/糖豆人/糖豆人 0.jpg',
          name: '糖豆人：终极淘汰赛',
          img1: '/resources/game/糖豆人/糖豆人 1.jpg',
          img2: '/resources/game/糖豆人/糖豆人 2.jpg',
          img3: '/resources/game/糖豆人/糖豆人 3.jpg',
          img4: '/resources/game/糖豆人/糖豆人 4.jpg',
          price: '58',
          publicTime: '2020年8月四日'
        },
        {
          href: '',
          img0: '/resources/game/糖豆人/糖豆人 0.jpg',
          name: '糖豆人：终极淘汰赛',
          img1: '/resources/game/糖豆人/糖豆人 1.jpg',
          img2: '/resources/game/糖豆人/糖豆人 2.jpg',
          img3: '/resources/game/糖豆人/糖豆人 3.jpg',
          img4: '/resources/game/糖豆人/糖豆人 4.jpg',
          price: '58',
          publicTime: '2020年8月四日'
        },
        {
          href: '',
          img0: '/resources/game/糖豆人/糖豆人 0.jpg',
          name: '糖豆人：终极淘汰赛',
          img1: '/resources/game/糖豆人/糖豆人 1.jpg',
          img2: '/resources/game/糖豆人/糖豆人 2.jpg',
          img3: '/resources/game/糖豆人/糖豆人 3.jpg',
          img4: '/resources/game/糖豆人/糖豆人 4.jpg',
          price: '58',
          publicTime: '2020年8月四日'
        },
      ],
    }
  }
}
</script>

<style lang="scss">

</style>