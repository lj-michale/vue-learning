<template>
  <div>
    {{msg}}
    <button @click="sendToParent">子组件向父组件传递数据</button>
  </div>
</template>

<script>
export default {
  name: "Article",

  props: ['msg'],

  setup(props, content) {
    console.log(props.msg)

    function sendToParent() {
      content.emit('change')
    }

    return {
      sendToParent
    }
  }

}
</script>
