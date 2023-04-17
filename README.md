<!--
 * @Author: xwp xuweip0@chanjet.com
 * @Date: 2023-04-17 19:15:09
 * @LastEditors: xwp xuweip0@chanjet.com
 * @LastEditTime: 2023-04-17 19:19:24
 * @FilePath: /easyornoty-ui/README.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
#### 1.安装组件库
```bash
npm install easyornoty-ui -s
```

#### 2.引用组件库
```javascript
// 全部引入
import 'easyornoty-ui/dist/css/index.css'
import EUI from 'easyornoty-ui'
Vue.use(EUI)

// 按需引入
import 'easyornoty-ui/dist/css/index.css'
import{EasyornotyUiCard} from 'easyornoty-ui'
Vue.use(EasyornotyUiCard)
```