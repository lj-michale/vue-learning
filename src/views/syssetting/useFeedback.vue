<template>
  <div id="root">
    <!--表单提交submit后弹出一个提示信息,并且阻止默认的提交后刷新操作-->
    <form @submit.prevent="tishi">
      <!--使帐号标题和输入框关联起来-->
      <label for="demo">帐号：</label>
      <input type="text" id="demo" v-model="account">
      <br>
      密码：<input type="password" v-model="password"><br>
      性别：
      <!--因为v-model是绑定的value值，而选择框不是value值，所以这里手动给男女的选择框加入value-->
      男：<input type="radio" name="sex" v-model="sex" value="man">
      女：<input type="radio" name="sex" v-model="sex" value="woman"><br>
      爱好：
      抽烟<input type="checkbox" v-model="hobby" value="chouyan">
      喝酒<input type="checkbox" v-model="hobby" value="hejiu">
      烫头<input type="checkbox" v-model="hobby" value="tangtou"><br>
      所属校区
      <select v-model="city">
        <option value="">请选择校区</option>
        <option value="beijing">北京</option>
        <option value="shanghai">上海</option>
        <option value="guangzhou">广州</option>
        <option value="shenzhen">深圳</option>
      </select><br>
      其他信息：
      <!--textarea是多行信息的意思-->
      <textarea v-model="other"></textarea><br>
      <input type="checkbox" v-model="agree">阅读并接受<a href="#">《用户协议》</a>
      <button>提交</button>
    </form>
  </div>
</template>

<script>

export default {
  name: "useFeedback",

  components: {

  },

  setup() {

  }

}
</script>

<style scoped>

</style>
