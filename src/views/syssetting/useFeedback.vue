<template>
  <div>
    <Article :msg="name"></Article>
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
    return {
      name: '渐行渐远渐无书，水阔鱼沉何处问'
    }
  }
}
</script>

<style scoped>

</style>
