<template>
    <div class="wrapper">
    <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide v-for="item of swiperList" :key="item.id"> 
            <img class="swiper-img" :src="item.imgUrl">
        </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
export default {
    name: 'HomeSwiper',
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
            swiperList: [{
                id: '0001',
                imgUrl:"//imgs.qunarzz.com/piao/fusion/1802/e3/62ce7362ca051d02.jpg_640x200_6db551b7.jpg" 
            },{
                id: '0002',
                imgUrl: "//imgs.qunarzz.com/vc/e3/a1/71/f498dfd3bed948d623c9093252.jpg_92.jpg"
            },{
                id: '0003',
                imgUrl: "//imgs.qunarzz.com/vc/44/e9/86/95bc36c9e1c06ebd68bdfe222e.jpg_92.jpg"
            }]
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