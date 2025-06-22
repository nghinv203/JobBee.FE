const webpack = require('webpack');
const { merge } = require('webpack-merge');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const WebpackNotifierPlugin = require('webpack-notifier');

const environment = require('./environment');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (config, options, targetOptions) => {
  // Webpack Cache Configuration
  config.cache = {
    type: 'filesystem',
    cacheDirectory: path.resolve(__dirname, '../target/webpack'),
    buildDependencies: {
      config: [
        __filename,
        path.resolve(__dirname, 'webpack.custom.js'),
        path.resolve(__dirname, '../angular.json'),
        path.resolve(__dirname, '../tsconfig.app.json'),
        path.resolve(__dirname, '../tsconfig.json'),
      ],
    },
  };

  config.plugins.push(
    new WebpackNotifierPlugin({
      title: 'JobBee Build V1',
      alwaysNotify: true,
      skipFirstNotification: false,
      // contentImage: path.join(__dirname, '../src/assets/icon.png'), // (Tùy chọn) Thêm logo vào thông báo
    })
  );

  // PLUGINS
  if (config.mode === 'development') {
    config.plugins.push(
      new ESLintPlugin({
        extensions: ['js', 'ts'],
        overrideConfigFile: path.resolve(__dirname, 'eslintrc.js'), // Ensure ESLint config is explicit
      })
    );
  }

  if (config.mode === 'production') {
    config.plugins.push(
      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        openAnalyzer: false,
        reportFilename: '../stats.html',
      })
    );
  }

  // Copy third-party resources (if any)
  const patterns = [
    // Add third-party resources here, e.g., { from: 'src/assets', to: 'assets' }
  ];

  if (patterns.length > 0) {
    config.plugins.push(new CopyWebpackPlugin({ patterns }));
  }

  // Environment Variables
  config.plugins.push(
    new webpack.DefinePlugin({
      __TIMESTAMP__: JSON.stringify(environment.__TIMESTAMP__ || new Date().toISOString()),
      __VERSION__: JSON.stringify(environment.__VERSION__ || '1.0.0'),
      __DEBUG_INFO_ENABLED__: JSON.stringify(config.mode === 'development'),
      __SERVER_API_URL__: JSON.stringify(environment.__SERVER_API_URL__ || ''),
    })
  );

  // index.html
  config.plugins.push(
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/index.html'),
      inject: true,
      scriptLoading: 'blocking'
    })
  );

  // i18n JSON Merging (Custom Implementation)
  config.plugins.push({
    apply: (compiler) => {
      compiler.hooks.thisCompilation.tap('MergeJsonPlugin', (compilation) => {
        const fs = require('fs').promises;
        const glob = require('glob-promise');
        const mergeJson = async (pattern, outputFile) => {
          const files = await glob(pattern);
          const merged = {};
          for (const file of files) {
            const content = await fs.readFile(file, 'utf-8');
            Object.assign(merged, JSON.parse(content));
          }
          compilation.assets[outputFile] = {
            source: () => JSON.stringify(merged),
            size: () => JSON.stringify(merged).length,
          };
        };

        // Merge i18n files
        Promise.all([
          mergeJson('./src/i18n/vi/*.json', 'i18n/vi.json'),
          mergeJson('./src/i18n/en/*.json', 'i18n/en.json'),
        ]).catch((err) => compilation.errors.push(err));
      });
    },
  });

  // Merge custom config
  config = merge(config, {
    // Add custom Webpack configurations here, e.g.:
    // resolve: { alias: { '@': path.resolve(__dirname, '../src') } }
  });

  return config;
};
