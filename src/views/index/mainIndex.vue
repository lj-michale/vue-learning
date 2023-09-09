<template>
  <div class="data-box">
    <h4>数据概览</h4>
    <el-row :gutter="20">
      <el-col :md="4" :xs="15">
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
      <el-col :md="4" :xs="15">
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
      <el-col :md="4" :xs="15">
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
      <el-col :md="4" :xs="15">
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
      <el-col :md="4" :xs="15">
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

.data-box .item p span.up {
  color: #f56c6c;
}

.data-box .item p span.down {
  color: #67c23a;
}
</style>
