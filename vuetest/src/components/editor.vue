<template>
  <div class="">
    <vue-editor
      v-model="content"
      @focus="onEditorFocus"
      @blur="onEditorBlur"
      @selection-change="onSelectionChange"
    />
    <div class="" v-html='content'>
    </div>
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";

export default {
  components: { VueEditor },

  data: () => ({
    content: ""
  }),
  methods: {
    onEditorBlur(quill) {
      console.log("editor blur!", quill);
    },

    onEditorFocus(quill) {
      console.log("editor focus!", quill);
    },

    onSelectionChange(range) {
      console.log("selection change!", range);
    }
  }
};
</script>
