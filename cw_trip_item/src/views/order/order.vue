<template>
  <div class="wrap">
    <prism-editor
      class="my-editor height-300"
      v-model="code"
      :highlight="highlighter"
      line-numbers
      :tabSize="2"
      @blur="readContent"
    ></prism-editor>
  </div>

  <!-- 使用vue-prism-editor编辑器 -->
</template>

<script>
// import Prism Editor
import { PrismEditor } from 'vue-prism-editor'
import 'vue-prism-editor/dist/prismeditor.min.css'

// import highlighting library
import { highlight, languages } from 'prismjs/components/prism-core'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-javascript'
import 'prismjs/themes/prism-tomorrow.css'

export default {
  components: {
    PrismEditor,
  },
  data: () => ({
    code: 'console.log("Hello World")',
  }),
  methods: {
    highlighter(code) {
      return highlight(code, languages.js)
    },
    readContent() {
      console.log('37失去焦点了', this.code)
    },
  },
}
</script>

<style>
/* required class */
.my-editor {
  /* we dont use `language-` classes anymore so thats why we need to add background and text color manually */
  background: #2d2d2d;
  color: #ccc;

  /* you must provide font-family font-size line-height. Example: */
  font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;
  font-size: 14px;
  line-height: 1.5;
  padding: 5px;
}

/* optional class for removing the outline */
.prism-editor__textarea:focus {
  outline: none;
}

/* not required: */
.height-300 {
  height: 300px;
}
</style>
