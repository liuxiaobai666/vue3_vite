<template>
  <div class="son">
    <h3>我是Son组件(孙),{{ car.name }} -- {{ car.price }}</h3>
    <button @click="car.name += '!'">修改car.name</button>
  </div>
</template>

<script>
import { inject } from 'vue';

export default {
  name:'Son',
  setup(){
    let car = inject('car')
    console.log(car);
    return {car}
    
  }
}
</script>

<style scoped>
.son{
  background-color: orange;
  padding: 10px;
}
</style>
