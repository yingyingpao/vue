<template>
  <div class="">
    <div>从父页面传递的数据：{{iframeData}}</div>
    <button @click="handleMessageToParent">向父级发送消息</button>

  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";

export default {
  components: { VueEditor },

  data: () => ({
    iframeData: ""
  }),

  methods: {
    handleMessage(event){
      let arr = Object.keys(event.data)
      this.iframeData = event.data;
      console.log(Object.keys(event.data).length)
    },
    handleMessageToParent () { // 子向父传参
  	 window.parent.postMessage({
    		cmd: 'returnFormJson',
    		params: {}
      	}, '*');
    }
  },
  mounted () {
    // 接受父页面发来的信息
    window.addEventListener("message", this.handleMessage) // 子接收方式二参数
  }
};
</script>
