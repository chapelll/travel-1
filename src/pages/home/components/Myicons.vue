<template>
    <div class="icons">
        <swiper>
            <swiper-slide> 
            <div class="icon" v-for="item of list" :key="item.id"> 
            <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl">
            </div>
            <p class="icon-desc">{{item.desc}}</p>
            </div>
            </swiper-slide> 
        </swiper>
    </div>
</template>

<script>
export default {
    name: 'HomeIcons',
    props: {
        list: Array
    },
    data () {
        return {
            
        }
    },
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
@import '~@/assets/styles/mixins.styl'

.icons >>> .swiper-container
    height 0
    padding-bottom 50%
.icons
    margin-top .1rem
    .icon
        height 0 
        position relative
        overflow hidden
        width 25%
        float left 
        padding-bottom 25% 
        .icon-img
            position absolute
            top 0
            left 0
            right 0
            bottom .44rem
            box-sizing border-box
            padding .1rem
            .icon-img-content
                display block
                margin 0 auto
                height 100%
        .icon-desc
            position absolute
            left 0
            right 0
            bottom 0
            height .44rem
            line-height .44rem
            color $darkTextColor
            text-align center
            ellipsis()
</style>