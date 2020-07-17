<template>
    <ul class="list">
        <li class="item" v-for="item of letters" :key="item" 
        :ref="item"
        @touchstart = "handleTouchStart"
        @touchmove = "handleTouchMove"
        @touchend = "handleTouchEnd"
        @click="handleLetterClick">{{item}}</li>
    </ul>
</template>

<script>
export default {
    name: 'CityAlphabet',
    data () {
        return {
            touchStatus: false,
            startY: 0,
            timer: null
        }
    },
    updated () {
    //当Alphabet组件已经渲染完毕后执行的生命周期钩子
        this.startY = this.$refs['A'][0].offsetTop
        //字母A距离顶部的高度
    },
    computed: {
        letters () {
            let letters = []
            for (let i in this.cities) {
                letters.push(i)
            }
            return letters
        }
    },
    props: {
        cities: Object
    },
    methods: {
        handleLetterClick (e) {
            this.$emit('change', e.target.innerText)
        },
        handleTouchStart () {
            this.touchStatus = true
        },
        handleTouchMove (e) {
            if (this.touchStatus) {
                if (this.timer) {
                    clearTimeout(this.timer)
                } 
                this.timer = setTimeout(() => {
                    let touchY = e.touches[0].clientY - 79
                    //滑动时指尖所触元素距离顶部的高度
                    let index = Math.floor((touchY - this.startY) / 20)
                    //index是指尖所触元素在letters中的下标，20是每个元素的高度
                    if (index >= 0 && index < this.letters.length) {
                    this.$emit('change', this.letters[index])
                    //当滑动时就向外触发change事件，第二个参数是当前指尖所触的元素
                }
                },10)
            }
        },
        handleTouchEnd () {
            this.touchStatus = false
        },
    }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
.list 
    display flex
    flex-direction column  //主轴为垂直方向
    justify-content center //在主轴上以中间对齐
    position absolute
    right 0
    top 1.58rem
    bottom 0
    width .4rem
    .item
        line-height .4rem
        text-align center
        color $bgColor
</style>