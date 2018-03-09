[![NPM version](https://badge.fury.io/js/vue-jsoneditor.svg)](http://badge.fury.io/js/vue-jsoneditor) [![Build Status](https://travis-ci.org/manico/vue-jsoneditor.svg?branch=master)](https://travis-ci.org/manico/vue-jsoneditor) [![codecov](https://codecov.io/gh/manico/vue-jsoneditor/branch/master/graph/badge.svg)](https://codecov.io/gh/manico/vue-jsoneditor) [![codebeat badge](https://codebeat.co/badges/81171683-f0d7-4a4f-8664-25dba6824452)](https://codebeat.co/projects/github-com-manico-vue-jsoneditor-master)

# vue-jsoneditor

> Vue implementation of JSONEditor

## Installation

```bash
# npm
npm install vue-jsoneditor
```

## Using

### Import globally

```javascript
import Vue from 'vue';
import VJsoneditor from 'vue-jsoneditor';
import App from './App';

Vue.config.productionTip = false;
Vue.use(VJsoneditor);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
});
```

### Import locally

```javascript
import VJsoneditor from 'vue-jsoneditor';

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
```

### Use in template

```html
<template>
  <div id="app">
    <v-jsoneditor v-model="json"
                  @input="jsonChanged">
    </v-jsoneditor>
  </div>
</template>
```

## Include jsoneditor api

Don't forget to include jsoneditor API:

```html
<link href="https://cdnjs.cloudflare.com/ajax/libs/jsoneditor/5.14.0/jsoneditor.min.css" rel="stylesheet">
<script src="https://cdnjs.cloudflare.com/ajax/libs/jsoneditor/5.14.0/jsoneditor.min.js"></script>
```