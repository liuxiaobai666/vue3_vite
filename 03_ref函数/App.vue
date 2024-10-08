<template>
  <!-- 模板中无需.vlaue读取数据 -->
  <h1>一个人的信息</h1>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h2>工作种类：{{ job.type }}</h2>
  <h2>工作薪资：{{ job.salary }}</h2>
  <button @click="changInfo">修改人物信息</button>
</template>

<script>
import { ref } from 'vue';
export default {
  name: 'App',
  setup() {
    // 数据

    let name = ref("ahb")
    let age = ref(18)

    let job = ref({
      type:'前端工程师',
      salary:'30k'
    })
    // 在js中操作数据需要.value
    function changInfo(){
      name.value = 'bbb'
      age.value = 48
      job.value.type = 'UI工程师'
      job.value.salary = '50K'
    }
    
    return{
      name,
      age,
      job,
      changInfo
    }
  }
}
</script>

<style scoped></style>
