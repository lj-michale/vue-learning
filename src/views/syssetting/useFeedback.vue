<template>
  <div>
    <Article :msg="name" @change="changeName"></Article>
  </div>
</template>

<script>
import Article from '@/components/Article'
import {ref} from 'vue'

export default {
  name: "useFeedback",

  components: {
    Article
  },

  setup() {
    let name = ref('渐行渐远渐无书，水阔鱼沉何处问')

    function changeName(msg) {
      name.value = msg
    }
    return {
      name,
      changeName
    }
  }

}
</script>

<style scoped>

</style>
