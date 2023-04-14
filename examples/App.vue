<!--
 * @Author: xwp xuweip0@chanjet.com
 * @Date: 2023-04-12 15:44:11
 * @LastEditors: xwp xuweip0@chanjet.com
 * @LastEditTime: 2023-04-14 09:54:03
 * @FilePath: /easyornoty-ui/src/App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <EasyornotyUiCard :cardNum="123"></EasyornotyUiCard>
  </div>
</template>

<script>
// import HelloWorld from '../components/HelloWorld.vue';

export default {
  name: 'App',
  components: {
    // HelloWorld,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
