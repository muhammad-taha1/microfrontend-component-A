const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
  const files = [
    './dist/runtime-es5.js',
    './dist/polyfills-es5.js',
    './dist/scripts.js',
    './dist/main-es5.js',
  ]
  await fs.ensureDir('elements')
  await concat(files, 'elements/component-A.js');

})()
