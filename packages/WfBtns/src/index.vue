<template>
  <ul class="__btns_wrap_">
    <li
      class="__btn_"
      :class="{
        '__active_': index === curIndex,
        '__normal_': size === 'normal',
        '__mini_': size === 'mini', 
        '__large_': size === 'large'
        }"
      v-for="(item, index) in list"
      :key="index"
      @click="onClick(item, index)"
    >{{item.text}}</li>
  </ul>
</template>

<script>
export default {
  name: "WfBtns",
  props: {
    size: {
      type: String,
      default: "normal",
      validator(key) {
        return ["normal", "mini", "large"].includes(key);
      }
    },
    list: {
      type: Array,
      default() {
        return [];
      }
    },
    defaultIndex: {
      type: [Number, String],
      default: 0
    }
  },
  data() {
    return {
      curIndex: this.defaultIndex
    };
  },
  methods: {
    onClick(item, index) {
      this.curIndex = index;
      this.$emit("btnClick", {
        text: item.text,
        index
      });
    }
  }
};
</script>

<style lang="less">
.__btns_wrap_ {
  display: inline-block;
  overflow: hidden;
  border-radius: 4px;
  background: #fff;
  user-select: none;
  padding: 0;
  list-style: none;

  .__btn_ {
    cursor: pointer;
    float: left;
    color: #282828;
    border: 1px solid #c0c4cc;
    &.__large_ {
      padding: 12px 16px;
      font-size: 14px;
    }
    &.__normal_ {
      padding: 9px 13px;
      font-size: 13px;
    }
    &.__mini_ {
      padding: 6px 10px;
      font-size: 12px;
    }
    &.__active_ {
      background: #228fff;
      color: #fff;
      border-color: #228fff;
    }
    &:first-child {
      border-radius: 4px 0 0 4px;
    }
    &:last-child {
      border-radius: 0 4px 4px 0;
      border-left: none;
    }
  }
  .__btn_ + .__btn_ {
    border-left: none;
  }
}
</style>
