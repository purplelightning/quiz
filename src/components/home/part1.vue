<template>
<div id="part1">
  <router-link to="/home" class="back">返回</router-link>
  <div>这是part1</div>
</div>
</template>

<script type="text/ecmascript-6">
export default {}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
#part1
  position: absolute
  top: 0
  left:0
  bottom:0
  width:100%
  background: #45c8ff
  .back
    display: block
    text-align: left
    padding: 8px
    font-size:16px
    color:white
</style>
