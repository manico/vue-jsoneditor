<template>
  <div id="app">
    <v-jsoneditor v-model="json"
                  @input="jsonChanged">
    </v-jsoneditor>
  </div>
</template>

<script>
  export default {
    name: 'app',
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
