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

    let newName = '群芳过后西湖好，狼籍残红。飞絮濛濛。垂柳阑干尽日风'

    function sendToParent() {
      content.emit('change', newName)
    }
    return {
      sendToParent
    }
  }

}
</script>
