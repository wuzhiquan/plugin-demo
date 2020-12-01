<template>
  <div style="margin: 20px;">
    <wf-btns :list="list" @btnClick="btnClick" :defaultIndex="0" size="mini"></wf-btns>
    <br />
    <br />
    <wf-btns :list="list" @btnClick="btnClick" :defaultIndex="2"></wf-btns>
    <br />
    <br />
    <wf-btns :list="list" @btnClick="btnClick" :defaultIndex="1" size="large"></wf-btns>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          text: "编辑"
        },
        {
          text: "分享"
        },
        {
          text: "删除"
        }
      ]
    };
  },
  methods: {
    btnClick(item) {
      console.log("item", item);
    }
  }
};
</script>