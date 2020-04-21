module.exports = {
  devServer: {
    disableHostCheck: true,
  },
  lintOnSave: false,
  transpileDependencies: ['vuetify'],

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false,
    },
  },
}
