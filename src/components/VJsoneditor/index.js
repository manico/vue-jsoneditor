import VJsoneditor from './VJsoneditor';

VJsoneditor.install = function install(Vue) {
  Vue.component(VJsoneditor.name, VJsoneditor);
};

export default VJsoneditor;
