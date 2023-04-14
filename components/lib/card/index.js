/*
 * @Author: xwp xuweip0@chanjet.com
 * @Date: 2023-04-13 14:33:50
 * @LastEditors: xwp xuweip0@chanjet.com
 * @LastEditTime: 2023-04-13 15:33:22
 * @FilePath: /easyornoty-ui/components/lib/card/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Card from './src/main.vue';

Card.install = function (Vue) {
  Vue.component(Card.name, Card);
};

export default Card;
