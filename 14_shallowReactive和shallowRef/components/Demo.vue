<template>
  <h2>当前X：{{ x.y }}</h2>
  <button @click="x.y++">点我x+1</button>
  <h4>{{ person }}</h4>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h2>薪资：{{ job.j1.salary }}k</h2>
  <button @click="name += '~'">修改姓名</button>
  <button @click="age++">修改年龄</button>
  <button @click="job.j1.salary++">涨薪</button>
</template>

<script>
import { reactive, toRef, toRefs,shallowReactive,shallowRef, ref } from 'vue';
export default {
  name: 'Demo',
  setup() {
    // 数据
    // let person = shallowReactive({ //只考虑第一层数据的响应式
    let person = reactive({
      name: '张三',
      age: 18,
      job: {
        j1: {
          salary: 20
        }
      }
    })
    // let x = ref(0)
    let x = shallowRef({ //基本数据类型可以做成响应式，对象类型不管
      y:0
    })
    console.log(x);
    
    return {
      person,
      ...toRefs(person),
      x
    }
  }
}
</script>

<style scoped></style>
