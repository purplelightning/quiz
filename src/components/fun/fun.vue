<template>
  <div id="laifu" ref="laifu">
    <div class="laifu-content">
      <div class="title">来福岛</div>
      <div class="content">
        <ul>
          <li v-for="item in netdata" class="item-fun">
            <div class="name">{{item.title}}</div>
            <img class="pic" v-lazy="item.sourceurl">
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
  import {apiUrl} from 'common/js/url'
  import axios from 'axios'
  import BScroll from 'better-scroll'

  //  let uu = "http://api.laifudao.com/open/tupian.json"

  export default {
    data() {
      return {
        netdata: {
          type: Array,
          default: []
        },
        titles: {
          type: Array,
          default: []
        }
      }
    },
    created() {
      var _this = this
      this.$http.get("/open/tupian.json"
        , {params: {}},
      ).then(function (res) {
        _this.netdata = res.data
        _this.$nextTick(() => {
          //设置延迟，查看懒加载
//          setTimeout(() => {
          _this._initScroll()
//          }, 2000)

        })
      }).catch(function (error) {
        console.log(error)
      })

    },
    methods: {
      //初始化better-scroll
      _initScroll() {
        if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.laifu, {
            click: true
          })
        } else {
          this.scroll.refresh()
        }

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
    background: #744bff
    text-align: center
    overflow: hidden
    .title
      height: 40px
      line-height: 40px
      font-size: 26px
      color: #ff1f00
    .content
      .item-fun
        margin: 10px auto
        padding: 20px 0 10px 0
        background: linear-gradient(to bottom right, rgba(255, 50, 50, .8), rgba(50, 50, 255, .6))
        .name
          margin-bottom: 10px
          height: 24px
          font-size: 20px
          line-height: 24px
          color: #1e1ed3
        .pic
          width: 250px
</style>
