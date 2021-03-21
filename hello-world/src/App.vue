<template>
  <div id="app">
    <Transitions />
    <p>------------------------------</p>
    <RenderCondition title="Giá trị prop được truyền vào" />
    <p>------------------------------</p>
    <BindingClass />
    <p>------------------------------</p>
    <Example />
  </div>
</template> 

<script>
import Example from './components/Example.vue'
import BindingClass from "./components/BindingClass.vue"
import RenderCondition from "./components/RenderCondition.vue"
import Transitions from "./components/Transitions.vue"

export default {
  name: 'App',
  components: {
    BindingClass,
    Example,
    RenderCondition,
    Transitions,
  }
}
</script>

<style>
  #app {
      font-family: Avenir, Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
      margin-top: 60px;
  }
</style>
