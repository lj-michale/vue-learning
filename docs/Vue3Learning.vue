<template>
  <div>
    <ChildComponent />
  </div>
</template>

<script>
import ChildComponent from '@/components/ChildComponent.vue'

export default {
  name: "Vue3Learning",
  // 当前组件需要引用名为 ChildComponent 的子组件，因此在 export default 中使用 components 属性将子组件引入到当前组件中。这样，在当前组件的模板中就可以像正常使用组件一样使用 ChildComponent 了。
  components: {
    ChildComponent
  }

}
</script>

<style scoped>

</style>
