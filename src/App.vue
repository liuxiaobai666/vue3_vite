<template>
  <!-- 模板中无需.vlaue读取数据 -->
  <h1>一个人的信息</h1>
  <h2 v-show="person.name">姓名：{{ person.name }}</h2>
  <h2>年龄：{{ person.age }}</h2>
  <h2 v-show="person.sex">性别：{{ person.sex }}</h2>
  <h2>工作种类：{{ person.job.type }}</h2>
  <h2>工作薪资：{{ person.job.salary }}</h2>
  <h3>c:{{ person.job.a.b.c }}</h3>
  <h3>{{ person.hobby }}</h3>
  <button @click="changInfo">修改人物信息</button>
  <button @click="addSex">添加一个sex属性</button>
  <button @click="deleteName">删除一个name属性</button>
</template>

<script>
import { reactive } from 'vue';
export default {
  name: 'App',
  setup() {
    // 数据
    let person = reactive({
      name: "ahb",
      age: 18,
      job: {
        type: '前端工程师',
        salary: '30k',
        a: {
          b: {
            c: 666 // 证明reactive是深层次的
          }
        }
      },
      hobby: ['抽烟', '喝酒', '烫头']
    })
    // 在js中操作reactive不需要.value
    function changInfo() {
      person.name = 'bbb'
      person.age = 48
      person.job.type = 'UI工程师'
      person.job.salary = '50K'
      person.job.a.b.c = 999
      person.hobby[0] = '学习'
    }
    function addSex(){
      person.sex = '男'
    }
    function deleteName(){
      delete person.name
    }
    return {
      person,
      changInfo,
      addSex,
      deleteName
    }
  }
}
</script>

<style scoped></style>
