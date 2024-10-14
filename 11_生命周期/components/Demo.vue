<template>
  <h2>当前求和为：{{ sum }}</h2>
  <button @click="sum++">点我+1</button>
</template>

<script>
import { ref,onBeforeMount,onMounted,onBeforeUpdate,onUpdated,onBeforeUnmount,onUnmounted } from 'vue';
export default {
  name: 'Demo',
  setup() {
    console.log('setup');
    
    // 数据
    let sum = ref(0)

    // 通过组合式API的形式去使用生命周期钩子
    onBeforeMount(()=>{
      console.log('onBeforeMount');
      
    })
    onMounted(()=>{
      console.log('onMounted');
      
    })
    onBeforeUpdate(()=>{
      console.log('onBeforeUpdate');
      
    })
    onUpdated(()=>{
      console.log('onUpdated');
      
    })
    onBeforeUnmount(()=>{
      console.log('onBeforeUnmount');
      
    })
    onUnmounted(()=>{
      console.log('onUnmounted');
      
    })
    return {
      sum,
    }
  },
  //#region 通过配置项的形式使用生命周期钩子
  /* 
  // 通过配置项的形式使用生命周期钩子
  beforeCreate() { // 创建组件之前
    console.log('beforeCreate');
  },
  created() { // 创建组件之后
    console.log('created');
  },
  beforeMount() { // 挂载组件之前
    console.log('beforeMount');
  },
  mounted() { // 挂载组件之后
    console.log('mounted');
  },
  beforeUpdate() { // 组件更新之前
    console.log('beforeUpdate');
  },
  updated() { // 组件更新之后
    console.log('updated');
  },
  beforeUnmount() { // 组件卸载之前
    console.log('beforeUnmount');
  },
  unmounted() { // 组件卸载之后
    console.log('unmounted');
  },
  
  */
  //#endregion
}
</script>

<style scoped></style>
