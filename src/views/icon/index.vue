<template>
  <div>

  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'Index'
})
</script>

<style lang="scss">
  .name{
    font-size: 26px;
    color: #666666;
    display: block;
    margin-bottom: 10px;
    margin-top: 24px;
  }
  .code{
    background-color: #e5e8ec;
    padding: 0 4px;
    border: 1px solid #ced1dc;
    border-radius: 4px;
  }
  .text{
    font-size: 14px;
    color: #5e6d82;
    line-height: 1.5em;
    margin: 5px 0px;
  }
  .ele-icoo{
    max-width: 100%;
    li{
      float: left;
      width: 12.5%;
      text-align: center;
      height: 120px;
      line-height: 120px;
      color: #666;
      font-size: 13px;
      transition: color .15s linear;
      border-right: 1px solid #eee;
      border-bottom: 1px solid #eee;
      margin-right: -1px;
      margin-bottom: -1px;
      span{
        display: inline-block;
        line-height: normal;
        vertical-align: middle;
        font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;
        color: #99a9bf;
        i{
          display: block;
          font-size: 32px;
          margin-bottom: 15px;
          color: #606266;
          code{
            display: inline-block;
            padding: 0 3px;
            height: 1em;
            color: #606266;
          }
        }
      }
    }
  }
</style>
