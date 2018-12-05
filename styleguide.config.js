const { createConfig } = require('@rollup-umd/documentation');
const config = createConfig({
  pagePerSection: true,
});

module.exports = config;
