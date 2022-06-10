const path = require('path');
const REPO_ROOT = path.resolve(__dirname, '../../node_modules/@momentum-ui/react-collaboration');
module.exports = {
  stories: ['../stories/**/*.stories.mdx', '../stories/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-scss',
  ],
  framework: '@storybook/react',
  core: {
    //builder: '@storybook/builder-vite',
    builder: 'webpack5',
  },
  async webpackFinal(config, { configType }) {
    config.resolve.alias['@momentum-ui/core/images'] = path.resolve(REPO_ROOT, 'images');
    config.resolve.alias['legacystyles'] = path.resolve(REPO_ROOT, 'scss');
    
    // Add SVGR Loader
    // ========================================================
    const assetRule = config.module.rules.find(({ test }) => test.test('.svg'));

    const assetLoader = {
      loader: assetRule.loader,
      options: assetRule.options || assetRule.query,
    };

    // Merge our rule with existing assetLoader rules
    config.module.rules.unshift({
      test: /\.svg$/,
      use: ['@svgr/webpack', assetLoader],
    });

    config.resolve.alias['@jsapps/core'] = path.resolve(
      __dirname, '../../../packages/jsapps-core/'
    );
    config.resolve.alias['@jsapps/map'] = path.resolve(
      __dirname, '../../../packages/jsapps-map/'
    );

    // customize the config here
    const finalConfig = {
      ...config,
    };

    console.log('config', finalConfig);

    return finalConfig;
  },
};
