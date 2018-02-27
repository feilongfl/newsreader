module.exports = {
  /*
  ** Build configuration
  */
  build: {},
  cache: {
    max: 1000,
    maxAge: 60000
  },
  /*
  ** Headers
  ** Common headers are already provided by @nuxtjs/pwa preset
  */
  head: {},
  /*
  ** Customize the progress-bar color
  */
  loading: {color: '#eaf166'},
  /*
  ** Customize app manifest
  */
  manifest: {
    theme_color: '#336ea4'
  },
  mode: 'spa',
  /*
  ** Modules
  */
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/axios',
    'bootstrap-vue/nuxt'
  ],
  plugins: [
    // '~/plugins/asioxcache'
    '~/plugins/vue-notifications',
    '~/plugins/img-lazeload'
  ],
  router: {
    middleware: [
      'debug'
    ]
  }
}
