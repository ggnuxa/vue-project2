const webpack = require('webpack');
const path = require('path');

const vueConfig = {
  configureWebpack: {
    resolve: {
      alias: {
        vue$: 'vue/dist/vue.esm.js',
        jquery: path.resolve('node_modules/jquery/dist/jquery')
      }
    },
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.$': 'jquery',
        'window.jQuery': 'jquery'
      })
    ]
  }
};

module.exports = vueConfig;
