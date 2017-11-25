import Vue from 'vue';
import VJsoneditor from '@/components/VJsoneditor/VJsoneditor';

describe('VJsoneditor.vue', () => {
  it('should have name', () => {
    const Constructor = Vue.extend(VJsoneditor);
    const vm = new Constructor().$mount();
    expect(vm.$options.name).to.equal('v-jsoneditor');
  });
});
