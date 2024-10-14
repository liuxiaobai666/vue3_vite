<template>
  <h2>当前求和为：{{ sum }}</h2>
  <button @click="sum++">点我x+1</button>
  <hr>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h2>薪资：{{ job.j1.salary }}k</h2>
  <h2 v-show="person.car">座驾：{{ person.car }}</h2>
  <button @click="name += '~'">修改姓名</button>
  <button @click="age++">修改年龄</button>
  <button @click="job.j1.salary++">涨薪</button>
  <button @click="showRaw">输出最原始的person</button>
  <button @click="addCar">给人添加一台车</button>
  <button @click="person.car.name += '!'">换车名</button>
  <button @click="person.car.price++">换价格</button>

</template>

<script>
import { reactive, toRefs, ref, toRaw, markRaw } from 'vue';
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
      },
      // car:{}
    })

    function showRaw() {
      // const p = toRaw(person) // 还原对象数据本身：取消响应式
      // p.age++
      // console.log(p);
    }
    function addCar() {
      let car = { name: '奔驰', price: 40 }
      person.car = markRaw(car) // 标记一个对象使其不会再成为响应式对象
    }
    return {
      person,
      ...toRefs(person),
      sum,
      showRaw,
      addCar
    }
  }
}
</script>

<style scoped></style>
