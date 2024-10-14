<template>
  <h1>一个人的信息</h1>
  姓：<input type="text" v-model="person.firstName"><br>
  名：<input type="text" v-model="person.lastName"><br>
  姓名：<input type="text" v-model="person.fullName">
</template>

<script>
import { reactive, computed } from 'vue';
export default {
  name: 'Demo',
  // vue2的写法
  /* computed:{
    fullName(){
      return this.person.firstName + '-' + this.person.lastName
    }
  }, */
  setup() {
    // 数据
    let person = reactive({
      firstName: "张",
      lastName: "三",
    })
    // vue3的写法 简写不考虑计算属性被修改的情况
    /* let fullName = computed(()=>{
      return person.firstName + '-' +person.lastName
    }) */
    person.fullName = computed(() => { // 直接在person上追加一个属性
      return person.firstName + '-' + person.lastName
    })
    // vue3的写法 完整写法 考虑计算属性读写情况
    person.fullName = computed({
      get() {
        return person.firstName + '-' + person.lastName
      },
      set(value) {
        const nameArr = value.split('-')
        person.firstName = nameArr[0]
        person.lastName = nameArr[1]
      }
    })
    return {
      person,
      // fullName
    }
  }
}
</script>

<style scoped></style>
