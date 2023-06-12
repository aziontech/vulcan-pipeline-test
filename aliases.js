export default [
  ['#root/*', './'],
  ['#lib/*', './lib'],
  ['#errors', './lib/errors/index.js'],
  ['#utils', './lib/utils/index.js'],
  ['#polyfills', './lib/build/polyfills/index.js'],
  ['#types', './lib/types/index.js'],
  ['#build', './lib/build/dispatcher/index.js'],
  ['#bundlers', './lib/build/bundlers/index.js'],
  ['#polyfills/*', './lib/polyfills'],
  ['#targets/*', './lib/targets'],
  ['#types', './lib/types/index.js'],
  ['#preset/*', './lib/presets'],
  ['#env', './lib/env/index.js'],
  ['#platform', './lib/platform/index.js'],
  ['#constants', './lib/constants/index.js'],
];
