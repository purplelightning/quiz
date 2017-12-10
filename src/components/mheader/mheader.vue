<template>
  <div id="mheader">
    <div class="tab">
      <router-link to="/home" class="tab-item">Home</router-link>
      <router-link to="/quiz" class="tab-item">Quiz</router-link>
      <router-link to="/fun" class="tab-item">Fun</router-link>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  #mheader
    width: 100%
    height: 80px
    .tab
      display: flex
      width: 100%
      height: 80px
      text-align: center
      box-sizing: border-box
      border: 1px solid red
      .tab-item
        flex: 1
        line-height: 80px
        &.active
          font-size: 22px
          font-weight: 600
          background: #ff2f3b

</style>
