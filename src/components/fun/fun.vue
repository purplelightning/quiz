<template>
  <div id="laifu">
    <div>hello</div>
    <ul>
      <li v-for="item in images">
        <img :src="netdata[0].sourceurl">
      </li>
    </ul>

  </div>
</template>

<script type="text/ecmascript-6">
  import {apiUrl} from 'common/js/url'
  import axios from 'axios'
  import {getFun} from 'api/fun'

  let uu = "http://api.laifudao.com/open/tupian.json"
  let uu2 = "http://v.juhe.cn/toutiao/index?type=shehui&key=3771c3180f6dd01a974767a2ebc763f1"

  export default {
    data() {
      return {
        netdata: {
          type: Array,
          default: []
        },
        images: {
          type: Array,
          default: []
        }
      }
    },
    created() {
      var _this = this
      this.$http.get("/open/tupian.json"
//        this.$http.get("/toutiao/index?type=shehui&key=3771c3180f6dd01a974767a2ebc763f1"
        , {params: {}},
      ).then(function (response) {
        _this.netdata = response.data
//        console.log(_this.netdata)
      }).catch(function (error) {
        console.log(error)
      })

      this._initView()
    },
    methods: {
      _initView() {
        for (let k = 0; k < this.netdata.length; k++) {
          this.images.push(this.netdata[k].sourceurl)
        }
        console.log("images"+this.images)
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  #laifu
    position: absolute
    top: 80px
    left: 0
    bottom: 0
    width: 100%
    text-align: center
    background: #ae57d3

</style>
