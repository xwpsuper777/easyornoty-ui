/*
 * @Author: xwp xuweip0@chanjet.com
 * @Date: 2023-04-12 15:44:11
 * @LastEditors: xwp xuweip0@chanjet.com
 * @LastEditTime: 2023-04-13 14:53:14
 * @FilePath: /easyornoty-ui/.eslintrc.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "prettier/prettier": [
      "warn",
      {
        singleQuote: true,
      },
    ],
  },
};
