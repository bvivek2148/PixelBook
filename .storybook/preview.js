import React from 'react';
import '../src/index.css';

const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#ffffff'
        },
        {
          name: 'dark',
          value: '#1a1a1a'
        }
      ]
    },
    viewport: {
      viewports: {
        mobile: {
          name: 'Mobile',
          styles: {
            width: '360px',
            height: '640px'
          }
        },
        tablet: {
          name: 'Tablet',
          styles: {
            width: '768px',
            height: '1024px'
          }
        },
        desktop: {
          name: 'Desktop',
          styles: {
            width: '1280px',
            height: '800px'
          }
        }
      }
    },
    options: {
      storySort: {
        order: ['Introduction', 'Components']
      }
    },
    docs: {
      title: 'PixelBook'
    }
  }
}

export default preview