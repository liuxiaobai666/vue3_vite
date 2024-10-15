<template>
    <h3>我是App组件</h3>
</template>

<script>
import { ref,reactive,readonly,toRefs,isRef,isReactive,isReadonly,isProxy } from 'vue';
export default {
  name: 'App',
  setup() {
    let car = reactive({
      name: "奔驰",
      price: '40W'
    })
    let sum = ref(0)
    let car2 = readonly(car) // 处理了响应式但依然是proxy

    console.log(isRef(sum)); // 检查一个值是否为ref对象
    console.log(isReactive(car)); // 检查一个对象是否由reactive创建的响应式代理
    console.log(isReadonly(car2)); // 检查一个对象是否由readonly创建的只读代理
    console.log(isProxy(car2)); // 检查一个对象是否由reactive或者readonly方法创建的代理
    console.log(isReadonly(car2));
    
    
    
    
    return { ...toRefs(car) }
  },
}
</script>

<style scoped>
.app {
  background-color: gray;
  padding: 10px;
}
</style>
