<template>
  <div class="data-box">
    <h4>数据概览</h4>
    <el-row :gutter="30">
      <el-col :md="8" :xs="40">
        <el-card shadow="never" class="item-background">
          <div class="item">
            <div class="main">
              <h2>数据服务统计</h2>
              <h4>¥1.9K</h4>
              <p>
                <span class="down"><i class="el-icon-bottom"></i>-18.9%</span>
                比昨日
              </p>
            </div>
            <div class="icon">
              <i class="el-icon-data-analysis"></i>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :md="8" :xs="40">
        <el-card shadow="never">
          <div class="item">
            <div class="main">
              <h2>数据资产统计</h2>
              <h4>68</h4>
              <p>
                <span class="up"><i class="el-icon-top"></i>+1.9%</span>
                比昨日
              </p>
            </div>
            <div class="icon">
              <i class="el-icon-user"></i>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :md="8" :xs="40">
        <el-card shadow="never">
          <div class="item">
            <div class="main">
              <h2>计算作业统计</h2>
              <h4>108</h4>
              <p>
                <span class="up"><i class="el-icon-top"></i>+7.7%</span>
                比昨日
              </p>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :md="8" :xs="40">
        <el-card shadow="never">
          <div class="item">
            <div class="main">
              <h2>算法模型统计</h2>
              <h4>108</h4>
              <p>
                <span class="up"><i class="el-icon-top"></i>+7.7%</span>
                比昨日
              </p>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :md="8" :xs="40">
        <el-card shadow="never">
          <div class="item">
            <div class="main">
              <h2>服务调用统计</h2>
              <h4>108</h4>
              <p>
                <span class="up"><i class="el-icon-top"></i>+7.7%</span>
                比昨日
              </p>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import LineEcharts from '@/components/ECharts/lineEcharts.vue'
import Maintable from '@/components/table/maintable.vue'
import pieEcharts from '@/components/ECharts/pieEcharts.vue'
import Card from '@/components/card/Card.vue'
</script>

<style lang="scss">
  $top:top;
  $bottom:bottom;
  $left:left;
  $right:right;
  $leftright: ($left, $right);
  $pinkk: #eec2d3;
  $bluee: #409eff;
  $yelloww: #f4d884;
  $grennn: #89dda0;
  $purplee: #78a2ea;
  $lightBluee: #b8d6ff;

  $list: bluee pinkk yelloww grennn purplee lightBluee;
  $list1: $bluee $pinkk $yelloww $grennn $purplee $lightBluee;
  %shadow{
    background: #fff;
    -webkit-box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.2);
    box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.2);
    border-color: rgba(0, 0, 0, 0.2);
    .title{
      font-size: 14px;
      padding: 10px;
      i{
        margin-#{$right}: 5px;
      }
    }
  }

  @mixin flex($direction:row,$content:space-between){
    display: flex;
    flex-direction: $direction;
    justify-content: $content;
  }
  .card{
    color: #666;
    @extend %shadow;

    ul{
      @include flex;
      li{
        flex: 1;
        a{
          color: #666666;
          align-items:center;
          padding-#{$top}: 20px;
          padding-#{$bottom}: 20px;
          @include flex(column);
          span{
            height: 44px;
          }
          .num{
            line-height: 44px;
            font-size: 42px;
            color: $bluee;
            margin: 0px;
          }
        }
        .kjfs-bluee{
          color: $bluee;
        }
        .kjfs-pinkk{
          color: $pinkk;
        }
        .kjfs-yelloww{
          color: $yelloww;
        }
        .kjfs-grennn{
          color: $grennn;
        }
        .kjfs-purplee{
          color: $purplee;
        }
        .kjfs-lightBluee{
          color: $lightBluee;
        }
        &:hover{
          .kjfs-bluee{
            color: #ffffff;
            background: $bluee;
          }
          .kjfs-pinkk{
            color: #ffffff;
            background: $pinkk;
          }
          .kjfs-yelloww{
            color: #ffffff;
            background: $yelloww;
          }
          .kjfs-grennn{
            color: #ffffff;
            background: $grennn;
          }
          .kjfs-purplee{
            color: #ffffff;
            background: $purplee;
          }
          .kjfs-lightBluee{
            color: #ffffff;
            background: $lightBluee;
          }
        }
      }
    }
    .table{
      padding: 21px;
      p{
        height: 52px;
        line-height: 52px;
        border: 1px solid #cccccc;
        overflow: hidden;
        border-#{$top}: none;
        @include flex( null,start);
        &:first-child{
          border-#{$top}: 1px solid #cccccc;
        }
        span{
        }
        .tit{
          width: 90px;
          min-width: 90px;
          height: 100%;
          text-align: center;
          border-#{$right}: 1px solid #cccccc;
          margin-#{$right}: 18px;
        }
        span.gitbox{
          flex: 1;
          height: 100%;
          overflow: hidden;
          @include flex(row,start);
          a{
            &:first-child{
              margin-#{$right}: 30px;
            }
          }
        }
      }
    }
  }
  #lineEcharts{
    margin-#{$top}: 30px;
    padding-#{$top}: 30px;
    @extend %shadow;
  }
  #maintable{
    margin-#{$top}: 30px;
    padding-#{$top}: 10px;
    @extend %shadow;
  }
  .lightgreen-box {
    background-color: lightgreen;
    height: 24px;
  }
  .orange-box {
    background-color: orange;
    height: 24px;
  }
  .data-box .item p span.up {
    color: #f56c6c;
  }

  .data-box .item p span.down {
    color: #67c23a;
  }
</style>
