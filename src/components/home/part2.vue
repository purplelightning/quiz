<template>
  <div id="part2">
    <router-link to="/home" class="back">返回</router-link>
    <div class="title">省份</div>
    <ul class="provinces">
      <li v-for="item in provinces" class="prov" @click="changeBg()">
        <span class="text">{{item.name}}</span>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        provinces: ''
      }
    },
    created() {
      var _this = this
      this.$http.get('/api/china').then((res) => {
//        console.log(res.data)
        _this.provinces = res.data
        console.log(_this.provinces)
      }).catch((error) => {
        console.log(error)
      })
    },
    methods:{
      changeBg(ev){
        alert('hello')
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  #part2
    position: absolute
    top: 0
    left: 0
    bottom: 0
    width: 100%
    background: #c9b8ff
    .back
      display: block
      text-align: left
      padding: 8px
      font-size: 16px
      color: white
    .title
      margin:20px auto
      color:blue
      font-size:24px
    .provinces
      .prov
        display: inline-block
        margin:5px 5px
        padding: 5px 10px
        border-radius:5px;
        border:1px solid black
        background: rgba(255,255,255,0)
        &:focus
          border:1px solid white

</style>
