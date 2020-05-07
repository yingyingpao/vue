<template>
  <div class="act-form">
    <iframe :src="src" ref="iframe" frameborder="0"></iframe>
    <div>从子页面传递的数据：{{childData}}</div>
    <div @click="sendMessage">向iframe发送信息</div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      // 通过信息传参
      src: 'http://localhost:8080/#/'
      // 地址栏传参
      // src: 'http://localhost:8080/#/?aa=333',
    }
  },
  methods: {
    sendMessage () {
      console.log('父向子传参')
      let iframeWin = this.$refs.iframe.contentWindow;
      iframeWin.postMessage({
          cmd: 'getFormJson',
          params: {}
      }, '*');
    },
    handleMessage (event) {
      console.log('父接受子传递过来的参数',event.data)
    }
  },
  mounted () {
    window.addEventListener("message", this.handleMessage);
  }
}
</script>
