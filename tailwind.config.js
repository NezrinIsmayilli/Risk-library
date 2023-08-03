/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'aran-layout-',
  content: [
    "./projects/n-toolbar-test/src/**/*.html"
  ],
  theme: {
    extend: {
      minHeight: {
        'content': 'calc(100vh - 128px)'
      }
    },
    fontFamily: { 
      'mono': ['ui-monospace','SFMono-Regular','Menlo','Monaco','Consolas','Liberation Mono','Courier New','monospace']
    }
  },
  plugins: [
      "tailwindcss",
      "autoprefixer",
      "...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})"
  ]
}

