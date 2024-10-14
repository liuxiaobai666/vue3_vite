<template>
  <h2>当前求和为：{{ sum }}</h2>
  <button @click="sum++">点我x+1</button>
  <hr>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h2>薪资：{{ job.j1.salary }}k</h2>
  <button @click="name += '~'">修改姓名</button>
  <button @click="age++">修改年龄</button>
  <button @click="job.j1.salary++">涨薪</button>
</template>

<script>
import { reactive, toRefs, ref, readonly, shallowReadonly } from 'vue';
export default {
  name: 'Demo',
  setup() {
    // 数据
    let sum = ref(0)
    let person = reactive({
      name: '张三',
      age: 18,
      job: {
        j1: {
          salary: 20
        }
      }
    })
    // readonly:只读，是一个函数，接收一个响应式数据
    // person = readonly(person)
    // shallowReadonly:只读，是一个函数，接收一个响应式数据但只管第一层数据
    // person = shallowReadonly(person)
    // sum = readonly(sum)
    // sum = shallowReadonly(sum)


    return {
      ...toRefs(person),
      sum
    }
  }
}
</script>

<style scoped></style>
