/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'aran-layout-',
  content: [
    "./src/**/*.html"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'risk_logo': "url('../assets/risk_logo.png')",
        'panda_logo': "url('../assets/panda_logo_small.png')"
      },
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

