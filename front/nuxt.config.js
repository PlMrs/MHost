export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'front',
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css'
  ],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src: '~/plugins/tinder.js', mode: 'client'},
    { src: '~/plugins/v-calendar.js', ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxt/postcss8',
    '@nuxtjs/dotenv',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    'nuxt-socket-io',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
  server: {
    port: 4500,
  },
  axios: {
    baseURL: 'http://localhost:3000'
  },
  auth: {
    strategies: {
      local: {
        endpoints : {
          login: {url:'/auth/token', method: 'post', propertyName: 'access_token'},
          user: {url:'/auth/session', method : 'get', propertyName: 'user'}
        },
        tokenType: 'Bearer'
      },
      redirect: {
        login: '/login',
        user : '/dashboard',
        logout: '/',
        callback: '/login',
        home: '/dashboard'
      },
    }
  },
  io: {
    sockets: [ // Required
      { // At least one entry is required
        name: 'home',
        default : true,
        url: 'http://localhost:3000',
      }
    ],
  },
  
}
