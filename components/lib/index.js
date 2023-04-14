/*
 * @Author: xwp xuweip0@chanjet.com
 * @Date: 2023-04-13 14:11:49
 * @LastEditors: xwp xuweip0@chanjet.com
 * @LastEditTime: 2023-04-13 15:35:52
 * @FilePath: /easyornoty-ui/components/lib/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Demo from './demo/index.js';
import Card from './card/index.js';

const components = {
  Demo,
  Card,
};

const install = function (Vue) {
  if (install.installed) return;
  Object.keys(components).forEach((key) => {
    Vue.component(components[key].name, components[key]);
  });
};

const API = { install };

export default API;
