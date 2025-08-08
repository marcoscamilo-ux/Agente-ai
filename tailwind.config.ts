import type { Config } from 'tailwindcss'
const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#0ea5e9',
          secondary: '#22d3ee',
          accent: '#a855f7'
        }
      }
    }
  },
  plugins: []
}
export default config
