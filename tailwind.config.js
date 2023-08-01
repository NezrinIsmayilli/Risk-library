/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./projects/n-toolbar-test/src/**/*.html"
  ],
  theme: {
    extend: {
      minHeight: {
        'router-outlet': 'calc(100vh - 128px)'
      }
    },
    fontFamily: { 
      'mono': ['ui-monospace','SFMono-Regular','Menlo','Monaco','Consolas','Liberation Mono','Courier New','monospace']
    }
  },
  plugins: [],
}

