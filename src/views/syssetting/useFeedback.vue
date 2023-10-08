<template>
  <div>
    <Article :msg="name" @change="changeName"></Article>
  </div>
</template>

<script>
import Article from '@/components/Article'

export default {
  name: "useFeedback",

  components: {
    Article
  },

  setup() {
    function changeName() {
      alert('父组件事件被调用')
    }
    return {
      name: '渐行渐远渐无书，水阔鱼沉何处问',
      changeName
    }
  }

}
</script>

<style scoped>

</style>
