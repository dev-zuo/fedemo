<template>
  <div class="container">
    <h3>contenteditable @mentions</h3>
    <vue-tribute :options="options">
      <div
        class="content-editable"
        contenteditable="true"
        @input="valueChange"
        placeholder="@..."
      ></div>
    </vue-tribute>
    <br />
    <div>
      <p>纯文本textContent：</p>
      <p>{{ textContent }}</p>
    </div>
    <div>
      <p>富文本innerHTML：</p>
      <p>{{ innerHTML }}</p>
    </div>
  </div>
</template>
<script>
import VueTribute from "vue-tribute";
export default {
  components: {
    VueTribute
  },
  computed: {},
  data() {
    return {
      textContent: "",
      innerHTML: "",
      options: {
        trigger: "@",
        // specify whether a space is required before the trigger string
        requireLeadingSpace: false,
        noMatchTemplate: "<li>暂无数据</li>",
        values: [
          { key: "张三 zhangsan", value: "张三" },
          { key: "李四 lisi", value: "李四" },
          { key: "王五 wangwu", value: "王五" },
          { key: "周杰伦 zhoujielun", value: "周杰伦" }
        ],
        positionMenu: true,
        selectTemplate: function(item) {
          return (
            '<span contenteditable="false"><a>' +
            "@" +
            item.original.value +
            "</a></span>"
          );
        }
      }
    };
  },
  methods: {
    noMatchFound() {
      console.log("暂无数据");
    },
    valueChange(e) {
      console.log(e.target.innerHTML, e.target.textContent);
      this.textContent = e.target.textContent;
      this.innerHTML = e.target.innerHTML;
    }
  }
};
</script>
<style lang="less">
body {
  margin: 20px;
}
h3 {
  margin: 20px;
}
a {
  color: blue;
  text-decoration: none;
}
.content-editable {
  height: 100px;
  padding: 10px;
  border: 1px solid #ccc !important;
  border-radius: 5;
}
.content-editable:empty:before {
  content: attr(placeholder);
  display: block;
  color: #666;
}

// Tribute-specific styles
.tribute-container {
  position: absolute;
  top: 0;
  left: 0;
  height: auto;
  max-height: 300px;
  max-width: 500px;
  overflow: auto;
  display: block;
  z-index: 999999;
  border-radius: 4px;
  box-shadow: 0 1px 4px rgba(#000, 0.13);
}
.tribute-container ul {
  margin: 0;
  margin-top: 2px;
  padding: 0;
  list-style: none;
  background: #fff;
  border-radius: 4px;
  border: 1px solid rgba(#000, 0.13);
  background-clip: padding-box;
  overflow: hidden;
}
.tribute-container li {
  color: #3f5efb;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 14px;
}
.tribute-container li.highlight,
.tribute-container li:hover {
  background: #3f5efb;
  color: #fff;
}
.tribute-container li span {
  font-weight: bold;
}
.tribute-container li.no-match {
  cursor: default;
}
.tribute-container .menu-highlighted {
  font-weight: bold;
}
</style>
