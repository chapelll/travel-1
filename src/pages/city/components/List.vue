<template>
    <div class="list" ref="wrapper">
    <div>
       <div class="area">
           <div class="title border-topbottom">当前城市</div>
           <div class="button-list">
               <div class="button-wrapper">
                   <div class="button">{{this.currentCity}}</div>
               </div>
           </div>
       </div>

       <div class="area">
           <div class="title border-topbottom">热门城市</div>
           <div class="button-list">
               <div class="button-wrapper" v-for="item of hot" :key="item.id"
               @click="handleCityClick(item.name)">
                   <div class="button">{{item.name}}</div>
               </div>
           </div>
       </div>
       <div class="area" v-for="(item,key) of cities" :key="key" :ref="key">
            <div class="title border-topbottom">{{key}}</div>
            <div class="item-list">
                <div class="item border-bottom"
                 v-for="innerItem of item" :key="innerItem.id"
                 @click="handleCityClick(innerItem.name)"
                 >
                    {{innerItem.name}}
                </div>
            </div>
       </div>
    </div>
    </div>
    
</template>

<script>
import Bscroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
export default {
    name: 'CityList',
    props: {
        hot: Array,
        cities: Object,
        letter: String
    },
    computed: {
        ...mapState({
            currentCity: 'city'
            //将vuex中的 city 属性映射到计算属性的 currentCity 上
        })
    },
    methods: {
        handleCityClick (city) {
            this.changeCity(city)
            this.$router.push('/')
        },
        ...mapMutations(['changeCity'])
        //将vuex中名字为'changeCity'的mutations映射到了methods里
    },
    mounted () {
        this.scroll = new Bscroll(this.$refs.wrapper)
    },
    watch: {
        letter () {
            // letter代表指尖所触动或点击的字母元素，当letter改变的时候就让左边滚动到那个字母的地方
            if (this.letter) {
                let element = this.$refs[this.letter][0]
                //element是letter代表字母所对应的左边那一块区域元素
                this.scroll.scrollToElement(element)
            // scroll插件提供的功能，能够滚动到目标元素这儿
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
.border-topbottom
    &:before
        border-color: #ccc
    &:after
        border-color: #ccc
.border-bottom
    &:before
        border-color: #ccc
.list
    overflow hidden
    position absolute
    top 1.58rem
    left 0
    right 0
    bottom 0
    .title
        line-height .54rem
        background #eee
        padding-left .2rem
        color #666
        font-size .26rem
    .button-list
        overflow hidden
        padding .1rem .6rem .1rem .1rem
        .button-wrapper
            width 33.33%
            float left
            .button
                padding .1rem 0
                text-align center
                margin .1rem 
                border .02rem solid #ccc
                border-radius .06rem
    .item-list
        .item
            line-height .76rem
            padding-left .2rem
        

</style>