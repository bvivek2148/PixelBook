

const config = {
  stories: [
    '../src/stories/**/*.mdx',
    '../src/components/**/*.stories.@(js|jsx|mjs|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y'
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  docs: {
    autodocs: 'tag',
    title: 'PixelBook'
  },
  viteFinal: async (config) => {
    // Ensure 'react' and 'react-dom' are optimized by Vite
    // and that React is available globally in the preview iframe.
    config.optimizeDeps = config.optimizeDeps || {};
    config.optimizeDeps.include = [
      ...(config.optimizeDeps.include || []),
      'react',
      'react-dom',
    ];

    // This can sometimes help with React being undefined in the preview.
    // It makes sure that every JSX file is processed with the React runtime.
    if (config.esbuild !== false) {
        config.esbuild = config.esbuild || {};
        config.esbuild.jsxInject = `import React from 'react'`;
    }
    
    // Add this line to handle React externals
    config.build = config.build || {};
    config.build.commonjsOptions = {
      include: [/node_modules/],
      transformMixedEsModules: true
    };
    
    // Add global React variable
    config.define = config.define || {};
    config.define.global = 'window';
    
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve?.alias,
          '@': '/src',
        },
      },
    };
  },
};

export default config