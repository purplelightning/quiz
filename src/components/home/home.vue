<template>
  <div id="home">
    <h3>home</h3>
    <router-link to="part1" class="btn">第一部分</router-link>
    <router-link to="part2" class="btn">第二部分</router-link>
    <router-link to="part3" class="btn">第三部分</router-link>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  #home
    position: absolute
    top: 80px
    left: 0
    bottom: 0
    width: 100%
    text-align: center
    background: #43d3bd
    .btn
      display: block
      margin:40px auto
      padding:10px
      width:100px
      font-size: 20px
      color:red
      border-radius:8px
      background: #ff9c54
</style>
