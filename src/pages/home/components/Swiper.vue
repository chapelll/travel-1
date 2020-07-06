<template>
    <div class="wrapper">
    <swiper ref="mySwiper" :options="swiperOptions" v-if="showSwiper">
        <swiper-slide v-for="item of list" :key="item.id"> 
            <img class="swiper-img" :src="item.imgUrl">
        </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
export default {
    name: 'HomeSwiper',
    props: {
        list: Array
    },
    data () {
        return {
            swiperOptions: {
                pagination: '.swiper-pagination', 
                //显示轮播页面小点
                loop: true ,
                //支持循环轮播
                // autoplay: 3000,
                //自动播放间隔时间
                // speed: 1000,
                //滑动耗费时间
               
            },
        }
    },
    computed: {
       showSwiper () {
           return this.list.length
       } 
    }
}
</script>

<style scoped lang='stylus'>
    .wrapper >>> .swiper-pagination-bullet-active
        background : #fff
    .wrapper
        width: 100%
        height: 0
        overflow : hidden
        padding-bottom : 31.25%
        background: #eeeeee
        .swiper-img
            width: 100%
</style>