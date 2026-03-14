import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import aspectRatio from '@tailwindcss/aspect-ratio';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark:           '#1a1a1a',   // deepest background (cards, sidebars)
        page:           '#212529',   // main page background
        surface:        '#2a2d35',   // elevated card / section backgrounds
        crimson:        '#DC143C',   // primary accent
        'crimson-dark': '#a50e2d',   // crimson hover state
        graytext:       '#d3d3d3',   // default body text
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
    },
  },
  plugins: [
    forms,
    typography,
    aspectRatio,
  ],
};
