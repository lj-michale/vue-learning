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
      msg:"<h2>标题</h2>"
    }
  },
  methods:{
    changeName:function (){
      this.num,
      this.name="李四光"
    },
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
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
