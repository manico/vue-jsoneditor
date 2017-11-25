import Vue from 'vue';

Vue.config.productionTip = false;

// Require all test files
const testsContext = require.context('./specs', true, /\.spec$/);
testsContext.keys().forEach(testsContext);

// Require all src files except main.js for coverage
const srcContext = require.context('../../src', true, /^\.\/(?!main(\.js)?$)/);
srcContext.keys().forEach(srcContext);
