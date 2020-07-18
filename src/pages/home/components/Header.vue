<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe8b9;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{this.city}}
        <span class="iconfont arrow-icon">&#xe611;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: "HomeHeader",
  computed: {
    ...mapState(['city'])
  }
};
</script>

<style scoped lang="stylus">
@import '~@/assets/styles/varibles.styl'
// @符号表示 src 目录 CSS文件用@时加上~
// 1rem = html font-size = 50px
.header {
  display: flex;
  line-height: $headerHeight
  background: $bgColor;
  color: #fff;

  .header-left {
    width: 0.64rem;
    float: left;

    .back-icon {
      text-align: center;
      font-size: 0.4rem;
    }
  }

  .header-input {
    flex: 1;
    background: #fff;
    height: 0.64rem;
    border-radius: 0.1rem;
    margin-top: 0.12rem;
    line-height: 0.64rem;
    margin-left: 0.2rem;
    padding-left: 0.2rem;
    color: #ccc;
  }

  .header-right {
    min-width: 1.04rem;
    padding 0 .1rem
    float: right;
    text-align: center;
    color: #ffffff
    .arrow-icon {
      margin-left: -0.04rem;
      font-size: 0.24rem;
    }
  }
}
</style>