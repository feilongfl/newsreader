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
  loading: {color: '#3B8070'},
  /*
  ** Customize app manifest
  */
  manifest: {
    theme_color: '#3B8070'
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
    // '~/plugins/vue-notifications'
  ],
  router: {
    middleware: [
      'debug'
    ]
  }
}
