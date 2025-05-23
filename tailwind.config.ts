import type { Config } from 'tailwindcss'
import { colors, typography } from './src/theme/tokens'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './.storybook/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors,
      fontSize: typography.fontSizes,
      fontWeight: typography.fontWeights,
      lineHeight: typography.lineHeights,
      letterSpacing: typography.letterSpacing,
    },
  },
  darkMode: 'class',
  plugins: [],
}

export default config