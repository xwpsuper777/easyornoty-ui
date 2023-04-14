/*
 * @Author: xwp xuweip0@chanjet.com
 * @Date: 2023-04-14 11:05:07
 * @LastEditors: xwp xuweip0@chanjet.com
 * @LastEditTime: 2023-04-14 11:05:46
 * @FilePath: /easyornoty-ui/components/lib/demo/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Demo from './src/main.vue';

Demo.install = function (Vue) {
  Vue.component(Demo.name, Card);
};

export default Demo;
