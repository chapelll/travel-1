<template>
  <div id="app">
    <keep-alive>
      <router-view/>
      <!-- 显示的是当前路由地址对应的内容 -->
    </keep-alive>
    <!-- keep-alive包裹的标签会放在内存中，每次渲染的时候直接从内存中取出来，不会再重复发ajax请求 -->
  </div>
</template>

<style lang="stylus">

</style>
