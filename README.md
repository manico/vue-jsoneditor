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
import { VJsoneditor } from 'vue-jsoneditor';

export default {
  name: 'my-component',
  components: {
    VJsoneditor,
  },
  data() {
    return {};
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