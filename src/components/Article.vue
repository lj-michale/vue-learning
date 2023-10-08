<template>
  <div>
    {{msg}}
    <p> ####################### </p>
    {{info}}
  </div>
</template>

<script>
export default {
  name: "Article",

  props: ['msg'],

  setup(props) {
    console.log(props.msg)

    return {
      info: props.msg
    }
  }
}
</script>
