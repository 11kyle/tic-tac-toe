import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'light-blue': 'hsl(178,60%,48%)',
        'light-blue-hover': 'hsl(178,75%,65%)',
        'light-yellow': 'hsl(39,88%,58%)',
        'light-yellow-hover': 'hsl(39,100%,69%)',
        'dark-navy': 'hsl(202,32%,15%)',
        'semi-dark-navy': 'hsl(199,35%,19%)',
        'silver': 'hsl(198,23%,72%)',
        'silver-hover': 'hsl(197,33%,89%)'
      }
    },
  },
  plugins: [],
}
export default config
