import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import aspectRatio from '@tailwindcss/aspect-ratio';
import base from 'tailwindcss/base';
import components from 'tailwindcss/components';
import utilities from 'tailwindcss/utilities';


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Already includes components subdirectory
    "./src/components/**/*.{js,ts,jsx,tsx}", // Explicitly add components for clarity
  ],
  theme: {
    extend: {
    colors: {
      dark: '#1a1a1a',
      crimson: '#DC143C',
      graytext: '#d3d3d3',
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
    base,
    components,
    utilities,
  ],
  };
  