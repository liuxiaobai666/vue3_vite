<template>
  <input type="text" v-model="keyWord">
  <h3>{{ keyWord }}</h3>
</template>

<script>
import { ref, customRef } from 'vue';
export default {
  name: 'App',
  setup() {
    // 数据
    // let keyWord = ref('hello') // 使用Vue提供的ref
    let keyWord = myRef('hello') // 使用程序员自定义的ref


    // 方法

    function myRef(value) { // 自定义ref
      let timer
      return customRef((track, trigger) => {
        return {
          get() {
            console.log(`有人从myRef这个容器中读取数据了，我把${value}给他了`);
            track() // 通知vue追踪一下数据的变化（提前和get商量一下让他认为value是有用的）
            return value
          },
          set(newValue) {
            console.log(`有人把myRef这个容器中数据修改为：${newValue}`);
            clearTimeout(timer)
            timer = setTimeout(()=>{
              value = newValue
              trigger() // 通知vue重新解析模板
            },500)
          }
        }
      })
    }
    return {
      keyWord
    }
  }
}
</script>

<style scoped></style>
