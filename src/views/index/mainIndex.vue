<template>
  <div class="data-box">
    <h3>数据概览</h3>
    <el-row :gutter="20">
      <el-col :md="4" :xs="15">
        <el-card shadow="never" class="item-background">
          <div class="item">
            <div class="main">
              <h2>数据服务统计</h2>
              <h4>98</h4>
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
              <h4>608</h4>
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
              <h4>208</h4>
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
              <h4>8908</h4>
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
          <div style="background: white; display: inline">
            <bar-graph :width="'600px'" :height="'250px'"></bar-graph>
          </div>
        </el-tab-pane>
        <el-tab-pane label="访问分析" name="second" :key="'second'">
          <div style="background: white; display: inline">
            ################ tab2内容 ################
          </div>
        </el-tab-pane>
        <el-tab-pane label="模块统计" name="third" :key="'second'">
          <div style="background: white; display: inline">
            ################ tab3内容 ################
          </div>
        </el-tab-pane>
        <el-tab-pane label="使用时长" name="four" :key="'second'">
          <div style="background: white; display: inline">
            ################ tab4内容 ################
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="server-op">
      <h4>运维追踪</h4>
      <el-tabs v-model="activeName2">
        <el-tab-pane label="集群运维" name="first" :key="'first'">
          <div style="background: white; display: inline">
            ################ tab1内容 ################
          </div>
        </el-tab-pane>
        <el-tab-pane label="作业运维" name="second" :key="'second'">
          <div style="background: white; display: inline">

          </div>
        </el-tab-pane>
        <el-tab-pane label="监控告警" name="third" :key="'second'">
          <div style="background: white; display: inline">
            ################ tab3内容 ################
          </div>
        </el-tab-pane>
        <el-tab-pane label="紧急事件" name="four" :key="'second'">
          <div style="background: white; display: inline">
            ################ tab4内容 ################
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>

  <div class="detail">
    <h3>实时追踪</h3>
    <el-tabs v-model="activeName">
      <el-tab-pane label="集群资源" name="tab-one" :key="'first'">
        <div style="background: white; display: inline">
          ################ tab1内容 ################
        </div>
      </el-tab-pane>
      <el-tab-pane label="数据集成" name="tab-second" :key="'second'">
        <div style="background: white; display: inline">
          ################ 数据集成 ################
        </div>
      </el-tab-pane>
      <el-tab-pane label="作业计算" name="tab-third" :key="'second'">
        <div style="background: white; display: inline">
          ################ 作业计算 ################
        </div>
      </el-tab-pane>
      <el-tab-pane label="作业调度" name="tab-four" :key="'second'">
        <div style="background: white; display: inline">
          ################ 作业调度 ################
        </div>
      </el-tab-pane>
      <el-tab-pane label="即席查询" name="tab-five" :key="'first'">
        <div style="background: white; display: inline">
          ################ 即席查询 ################
        </div>
      </el-tab-pane>
      <el-tab-pane label="数据湖仓" name="tab-sex" :key="'second'">
        <div style="background: white; display: inline">
          ################ 数据湖仓 ################
        </div>
      </el-tab-pane>
      <el-tab-pane label="数据调用" name="tab-seven" :key="'second'">
        <div style="background: white; display: inline">
          ################ 数据调用 ################
        </div>
      </el-tab-pane>
      <el-tab-pane label="监控运维" name="tab-eight" :key="'second'">
        <div style="background: white; display: inline">
          ################ 监控运维 ################
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup lang="ts">
import LineEcharts from '@/components/ECharts/lineEcharts.vue'
import Maintable from '@/components/table/maintable.vue'
import pieEcharts from '@/components/ECharts/pieEcharts.vue'
import Card from '@/components/card/Card.vue'
import BarGraph from '@/components/ECharts/BarGraph'
</script>

<style lang="scss">

.data-box{
  width:100%;
  height:140px;
  background:white;
}

#detail{
  width:100%;
  height:300px;
  background:white;
}

.use .server-use{
  width:50%;
  height:300px;
  background:white;
  float:left;
}

.use .server-op{
  width:50%;
  height:300px;
  background:white;
  float:left;
}

.data-box .item p span.up {
  color: #f56c6c;
}

.data-box .item p span.down {
  color: #67c23a;
}

//div{
//  border: 2px solid black;
//}
</style>
