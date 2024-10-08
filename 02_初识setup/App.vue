<template>
  <!-- vue3和vue2冲突,vue3优先 -->
  <h1>一个人的信息</h1>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h2>性别：{{ sex }}</h2>
  <button @click="sayHello">说话</button>
  <button @click="sayWelcome">说话</button>
  <button @click="test">test</button>
  <button @click="test1">test1</button>
</template>

<script>
export default {
  name: 'App',
  // vue2写法
  data(){
    return{
      sex:"男"
    }
  },
  methods:{
    sayWelcome(){
      alert('欢迎来到bilibili学习')
    },
    test(){
      // 在vue2中读取vue3的数据和方法 vue2可以读取vue3的数据和方法
      console.log(this.sex,this.name,this.age,this.sayHello);
      
    }
  },
  // 此处只是测试setup 暂时不考虑响应式数据

  // vue3写法
  setup() {
    // 数据
    let name = "ahb"
    let age = 18

    // 方法
    function sayHello() {
      alert(`我叫${name},我岁${age}了,你好啊!`)
    }

    // 在vue3中读取vue2的数据 vue3读不到vue2中的数据和方法
    function test1(){
      console.log(name,age,sayHello,this.sex,this.sayWelcome);
    }
    return{
      name,
      age,
      sayHello,
      test1
    }
  }
}
</script>

<style scoped></style>
