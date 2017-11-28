import sinon from 'sinon';
import Vue from 'vue';
import VJsoneditor from '@/components/VJsoneditor';

describe('VJsoneditor.vue', () => {
  it('should install', () => {
    VJsoneditor.install(Vue);
    const name = Vue.component(VJsoneditor.name).name;

    expect(name).to.equal('VueComponent');
  });

  it('should create jsoneditor', () => {
    const Constructor = Vue.extend(VJsoneditor);
    const vm = new Constructor().$mount();

    expect(typeof vm.jsoneditor).to.equal('object');
  });

  it('should change options', () => {
    const Constructor = Vue.extend(VJsoneditor);
    const vm = new Constructor({
      propsData: {
        value: {
          success: true,
        },
        options: {
          history: false,
          modes: ['tree', 'form'],
        },
      },
    }).$mount();

    expect(vm.jsoneditor.options.history).to.equal(false);
    expect(vm.jsoneditor.options.modes.length).to.equal(2);
  });

  it('should call onChange', () => {
    const spy = sinon.spy(VJsoneditor.methods, 'onChange');
    const Constructor = Vue.extend(VJsoneditor);

    new Constructor({
      propsData: {
        value: {
          success: true,
        },
      },
    }).$mount();

    expect(spy.called).to.equal(true);
  });

  it('should call onError', () => {
    const spy = sinon.spy(VJsoneditor.methods, 'onError');
    const Constructor = Vue.extend(VJsoneditor);
    const vm = new Constructor().$mount();

    // Cannot programatically trigger this
    vm.onError('Error');

    expect(spy.called).to.equal(true);
  });

  it('should destroy jsoneditor', () => {
    const Constructor = Vue.extend(VJsoneditor);
    const vm = new Constructor().$mount();

    vm.$destroy();

    expect(vm.jsoneditor).to.equal(null);
  });
});
