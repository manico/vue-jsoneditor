import Vue from 'vue';
import VJsoneditor from '@/components/VJsoneditor';

describe('VJsoneditor.vue', () => {
  it('should render editor', () => {
    const Constructor = Vue.extend(VJsoneditor);
    const vm = new Constructor().$mount();
    // TODO: Add test
  });
});
