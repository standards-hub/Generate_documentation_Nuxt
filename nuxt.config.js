import theme from '@nuxt/content-theme-docs'

export default theme({
  target: 'static',
  docs: {
    primaryColor: '#E24F55'
  },
  router: { base: '/Generate_documentation_Nuxt/' },
  build: {-
    publicPath: '/_nuxt/',
    babel:{
      plugins: [
        ['@babel/plugin-proposal-private-methods', { loose: true }]
      ]
    }
  },
  generate: {
    fallback: true
  },
  head: {
    title: "my first nuxt proj - main page",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [{ rel: 'icon', type: 'image/png', href: './cim.png' }],
  }
})
  