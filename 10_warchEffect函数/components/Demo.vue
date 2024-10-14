<template>
  <h2>当前求和为：{{ sum }}</h2>
  <button @click="sum++">点我+1</button>
  <hr>
  <h2>当前的信息为：{{ msg }}</h2>
  <button @click="msg += '!'">修改信息</button>
  <hr>
  <h2>姓名：{{ person.name }}</h2>
  <h2>年龄：{{ person.age }}</h2>
  <h2>薪资：{{ person.job.j1.salary }}k</h2>
  <button @click="person.name += '~'">修改姓名</button>
  <button @click="person.age++">修改年龄</button>
  <button @click="person.job.j1.salary++">涨薪</button>
</template>

<script>
import { reactive, ref, watchEffect } from 'vue';
export default {
  name: 'Demo',
  setup() {
    // 数据
    let sum = ref(0)
    let msg = ref('你好啊')
    let person = reactive({
      name: '张三',
      age: 18,
      job: {
        j1: {
          salary: 20
        }
      }
    })
    // console.log(sum);
    // 监视的是谁，监视的回调，监视的配置
    // 既要指明监视的属性，也要指名监视的回调
    /* watch(sum, (n, o) => {
      console.log('sum值变了', n, o);

    },{immediate:true}) */
    
    // 不指明监视的属性，监视的回调有哪个属性就监视哪个属性
    watchEffect(()=>{
      const x1 = sum.value
      const x2 = person.job.j1.salary
      console.log('warchEffect所指定的回调执行了！');
      
    })





    return {
      sum,
      msg,
      person
    }
  }
}
</script>

<style scoped></style>
