import Vue from 'vue';

Vue.config.productionTip = false;

// Require files for test
const testsContext = require.context('./specs', true, /\.spec$/);
testsContext.keys().forEach(testsContext);

// Require files for coverage
const srcContext = require.context('../../src/components', true);
srcContext.keys().forEach(srcContext);
