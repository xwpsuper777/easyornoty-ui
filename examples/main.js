/*
 * @Author: xwp xuweip0@chanjet.com
 * @Date: 2023-04-12 15:44:11
 * @LastEditors: xwp xuweip0@chanjet.com
 * @LastEditTime: 2023-04-13 15:36:33
 * @FilePath: /easyornoty-ui/examples/main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue';
import App from './App.vue';

import Card from '../components/lib/card/index.js';
Vue.use(Card);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
