import webpack from 'webpack';

export default {
  /*
  ** Headers of the page
  */
  head: {
    title: 'kokino.cz',
    meta: [
      { charset: 'utf-8' },
      { hid: 'description', name: 'description', content: 'Cukrářství Kokino' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  modules: [
    ['@nuxtjs/google-analytics', {
      id: 'UA-34824221-1'
    }],
    'bootstrap-vue/nuxt',
    '@nuxtjs/dotenv',
  ],
  /*
  ** Build configuration
  */
  build: {
    plugins: [
      new webpack.ProvidePlugin({
        '$': 'jquery'
      })
    ],
  }
};
