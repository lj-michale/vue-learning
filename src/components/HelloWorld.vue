<script>
// import { ref } from 'vue'
//
// defineProps({
//   msg: String
// })
//
// const count = ref(0)
export default {
  data() {
    return {
      num: 88,
      name: "张华09",
      msg:"<h2>标题</h2>",
      id: "d1",
      url: "https://img14.360buyimg.com/n1/s450x450_jfs/t1/124490/19/30630/86067/6322db51Ea33c38ea/206f77748445c49e.jpg",
      attributeName: "id",
      mouseEvent:"click"
    }
  },
  computed:{ // 计算属性,只要依赖值不变就不会重新计算
    reverseMsg:function (){
      console.log("计算属性")
      return this.msg.split('').reverse().join('')
    }
  },
  methods:{
    changeName:function (){
      this.num,
      this.name="李四光"
    },
    changeColor:function (){
      this.id='d2'
    },
    reverseMssage:function (){
      console.log("计算函数")
      return this.msg.split('').reverse().join('')
    }
  }
}
</script>

<template>
<!--  <h1>{{ msg }}</h1>
  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>
  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>-->
  <div>
    <p> {{num + 100}} </p>
    <p> {{name}} </p>
    <!-- v-once指令使用 -->
    <p v-once>{{name}}</p>
    <button @click="changeName">改变名字</button>
    <p>{{msg}}</p>
    <p v-html="msg"></p>
    <p v-bind:id="id">v-bind绑定</p>
    <img v-bind:src="url" alt="">
    <button @click="changeColor">改变颜色</button>
    <button @click="id='d2'">改变颜色</button>
    <p>{{num + 1}}</p>
    <p>{{name.split('').reverse().join('')}}</p>
    <p v-bind:id="id+1">v-bind绑定</p>
    <p v-bind:id="id">v-bind绑定</p>
    <!-- v-on: 用于监听DOM元素的事件 -->
    <button @click="changeColor">改变颜色</button>
    <p v-bind:[attributeName]="id">v-bind绑定</p>
    <button @click="attributeName='class'">改变属性</button>
    <!-- 动态事件 -->
    <button @[mouseEvent]="attributeName='class'">改变属性2</button>
    <button @click="mouseEvent='mouseover'">改变事件</button>
  </div>

  <div>
    <!-- 计算属性 -->
    <p>{{reverseMsg}}</p>
    <p>{{reverseMssage()}}</p>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}

#d1{
  color: red;
}
#d2{
  color: blue;
}
.d1{
  font-size: 50px;
}
</style>
