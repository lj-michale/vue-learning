<template>
  <div class="data-box">
    <h3>数据概览</h3>
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

  <div class="use">
    <div class="server-use">
      <h4>使用追踪</h4>
      <el-tabs v-model="activeName">
        <el-tab-pane label="用户分布" name="first" :key="'first'">
          <div style="background: gray; display: inline">
            ################ tab1内容 ################
          </div>
        </el-tab-pane>
        <el-tab-pane label="访问分析" name="second" :key="'second'">
          <div style="background: gray; display: inline">
            ################ tab2内容 ################
          </div>
        </el-tab-pane>
        <el-tab-pane label="模块统计" name="third" :key="'second'">
          <div style="background: gray; display: inline">
            ################ tab3内容 ################
          </div>
        </el-tab-pane>
        <el-tab-pane label="使用时长" name="four" :key="'second'">
          <div style="background: gray; display: inline">
            ################ tab4内容 ################
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="server-op">
      <h4>运维追踪</h4>
      <el-tabs v-model="activeName">
        <el-tab-pane label="集群运维" name="first" :key="'first'">
          <div style="background: gray; display: inline">
            ################ tab1内容 ################
          </div>
        </el-tab-pane>
        <el-tab-pane label="作业运维" name="second" :key="'second'">
          <div style="background: gray; display: inline">
            ################ tab2内容 ################
          </div>
        </el-tab-pane>
        <el-tab-pane label="监控告警" name="third" :key="'second'">
          <div style="background: gray; display: inline">
            ################ tab3内容 ################
          </div>
        </el-tab-pane>
        <el-tab-pane label="紧急事件" name="four" :key="'second'">
          <div style="background: gray; display: inline">
            ################ tab4内容 ################
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>

  <div class="data-detail">
    <h3>实时追踪</h3>
    <el-menu :default-active="activeIndex" class="el-menu" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">集群资源</el-menu-item>
      <el-menu-item index="2">数据集成</el-menu-item>
      <el-menu-item index="2">作业计算</el-menu-item>
      <el-menu-item index="3">作业调度</el-menu-item>
      <el-menu-item index="3">即席查询</el-menu-item>
      <el-menu-item index="3">数据湖仓</el-menu-item>
      <el-menu-item index="3">数据调用</el-menu-item>
      <el-menu-item index="3">监控运维</el-menu-item>
    </el-menu>
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
