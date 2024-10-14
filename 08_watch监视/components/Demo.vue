<template>
  <h2>当前求和为：{{ sum }}</h2>
  <button @click="sum++">点我+1</button>
  <hr>
  <h2>当前的信息为：{{ msg }}</h2>
  <button @click="msg += '!'">修改信息</button>
  <hr>
  <h2>姓名：{{ person.name }}</h2>
  <h2>年龄：{{ person.age }}</h2>
  <h2>薪资：{{ person.job.j1.salart }}k</h2>
  <button @click="person.name += '~'">修改姓名</button>
  <button @click="person.age++">修改年龄</button>
  <button @click="person.job.j1.salart++">涨薪</button>
</template>

<script>
import { reactive, ref, watch } from 'vue';
export default {
  name: 'Demo',
  // vue2
  /* watch: {
    sum(n,o){ //新值旧值
      console.log('sum的值变化了',n,o);
      
    },
    sum: {
      immediate: true, //初始化执行一次
      //deep:true, //深度监视
      handler(n, o) { //新值旧值
        console.log('sum的值变化了', n, o);

      }
    }
  }, */
  setup() {
    // 数据
    let sum = ref(0)
    let msg = ref('你好啊')
    let person = reactive({
      name: '张三',
      age: 18,
      job: {
        j1: {
          salart: 20
        }
      }
    })
    // 情况一：监视ref所定义的一个响应式数据
    watch(sum,(newValue,OldValue)=>{
      console.log('sum变了',newValue,OldValue);
      
    },{immediate:true}) // immediate初始化，deep深度监视

    // 情况二：监视ref所定义的多个响应式数据
    /* watch([sum, msg], (newValue, OldValue) => {
      console.log('sum或msg变了', newValue, OldValue);

    }, { immediate: true }) */

    /*   情况三：监视reactive所定义的一个响应式数据的全部属性
              1.此处无法正确获取oldValue
              2.强制开启了深度监视，deep可以关闭{deep:false}
    */
    /* watch(person,(newValue,oldValue)=>{
      console.log('person变化了',newValue,oldValue);
    },{deep:false}) */

    // 情况四：监视reactive所定义的一个响应式数据某个属性
    /* watch(()=>person.age,(newValue,oldValue)=>{
      console.log('person.age变化了',newValue,oldValue);
    }) */
    // 情况五：监视reactive所定义的一个响应式数据某些属性
    /* watch([() => person.age,() => person.name], (newValue, oldValue) => {
      console.log('person变化了', newValue, oldValue);
    }) */
    // 特殊情况
    /* watch(()=>person.job, (newValue, oldValue) => {
      console.log('person变化了', newValue, oldValue);
    },{deep:true}) */
    // 此处监视的是reactive所定义的对象中的某个属性依然是一个对象，所以监视需要配置deep
    return {
      sum,
      msg,
      person
    }
  }
}
</script>

<style scoped></style>
