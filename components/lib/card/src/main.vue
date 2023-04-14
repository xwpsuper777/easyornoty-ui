<!--
 * @Author: xwp xuweip0@chanjet.com
 * @Date: 2023-04-13 14:33:50
 * @LastEditors: xwp xuweip0@chanjet.com
 * @LastEditTime: 2023-04-14 14:07:47
 * @FilePath: /easyornoty-ui/components/lib/card/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <div>card++++++++</div>
    <div>{{ cardNum }}</div>
  </div>
</template>

<script>
export default {
  name: 'EasyornotyUiCard',

  props: {
    cardNum: {
      default() {
        return 0;
      },
      type: Number,
    },
  },

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
div {
  background: gray;
}
</style>
