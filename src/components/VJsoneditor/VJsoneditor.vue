<template>
  <div ref="jsoneditor">
  </div>
</template>

<script>
  import JSONEditor from 'jsoneditor';
  import 'jsoneditor/dist/jsoneditor.min.css';

  export default {
    name: 'v-jsoneditor',
    props: {
      options: {
        type: Object,
        default() {
          return {};
        },
      },
      value: {
        type: Object,
        default() {
          return {};
        },
      },
    },
    data() {
      return {
        jsoneditor: null,
      };
    },
    mounted() {
      const container = this.$refs.jsoneditor;

      const self = this;
      const options = Object.assign({
        onChange() {
          self.$emit('input', self.jsoneditor.get());
        },
      }, this.options);

      this.jsoneditor = new JSONEditor(container, options, this.value);
    },
    beforeDestroy() {
      if (this.jsoneditor) {
        this.jsoneditor.destroy();
        this.jsoneditor = null;
      }
    },
  };
</script>
