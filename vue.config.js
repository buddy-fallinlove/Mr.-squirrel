module.exports = {
  devServer: {
    proxy: {
      '/api': {
        ws: false,
        target: 'http://localhost:7001/v1',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      },
    }
  }
}
