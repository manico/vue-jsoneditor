<template>
  <div id="app">
    <v-jsoneditor v-model="json"
                  @input="jsonChanged">
    </v-jsoneditor>
  </div>
</template>

<script>
  import VJsoneditor from './components/VJsoneditor/VJsoneditor';

  export default {
    name: 'app',
    components: {
      VJsoneditor,
    },
    data() {
      return {
        json: {
          sucess: true,
        },
      };
    },
    methods: {
      jsonChanged(value) {
        console.log(JSON.stringify(value));
      },
    },
  };
</script>
