<template>
  <h1>一个人的信息</h1>
  <h2>姓名：{{ person.name }}</h2>
  <h2>年龄：{{ person.age }}</h2>
  <slot name="qwe"></slot>
  <slot name="asd"></slot>
  <button @click="test">测试触发一下Demo组件的xiaobai事件</button>
</template>

<script>
import { reactive } from 'vue';
export default {
  name: 'Demo',
  props:['msg','hello'], //props:['msg'],
  emits:['xiaobai'], 
  beforeCreate(){
    // console.log('---beforeCreate---');
  },
  setup(props,context) {
    // console.log('---setup---',this);
    // console.log(props);
    // console.log(context.attrs); 

    // console.log(context);
    
    console.log(context.slots);
    
    /* 
      attrs:props定义但未接收在attrs，v3不接受会有警告
      slots:插槽定义但没在子组件挖坑在slots
      emit:触发自定义事件
    */
    
    
    
    // 数据
    let person = reactive({
      name: "ahb",
      age: 18,
    })
    // 方法
    function test(){
      context.emit('xiaobai',666)
    }
    return {
      person,
      test
    }
  }
}
</script>

<style scoped></style>
