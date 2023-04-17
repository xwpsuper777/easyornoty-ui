/*
 * @Author: xwp xuweip0@chanjet.com
 * @Date: 2023-04-14 10:30:38
 * @LastEditors: xwp xuweip0@chanjet.com
 * @LastEditTime: 2023-04-14 15:15:35
 * @FilePath: /easyornoty-ui/webpack.components.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const glob = require('glob');
const list = {};

async function makeList(dirPath, list) {
  const files = glob.sync(`${dirPath}/**/index.js`);
  for (let file of files) {
    const component = file.split(/[/.]/)[2];
    list[component] = `./${file}`;
  }
}

makeList('components/lib', list);
module.exports = {
  entry: list,
  mode: 'development',
  output: {
    filename: '[name].umd.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'rui',
    libraryTarget: 'umd',
  },
  plugins: [new VueLoaderPlugin()],
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader',
          },
        ],
      },
      {
        test: /.sass$/,
        use: [
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /.scss$/,
        use: [
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
};
