<template>
  <Demo @xiaobai="xiaoqi" msg="您好啊" hello="哈哈哈哈" >
    <template v-slot:qwe> 
      <span>哈哈哈哈</span>
    </template>
    <template v-slot:asd> 
      <span>哈哈哈哈</span>
    </template>
  </Demo>
</template>

<script>
import Demo from './components/Demo.vue'
export default {
  name: 'App',
  components: { Demo },
  setup(){
    function xiaoqi(value){
      alert(`您好啊，你触发了xiaobai事件，我收到的参数是：${value}`)
    }
    return {
      xiaoqi
    }
  },
}
</script>

<style scoped></style>
