import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  define: {
    'process.env': {}
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'), // 设置 `@` 指向 `src` 目录
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
  },
  base: './', // 设置打包路径
  server: {
    host: 'localhost', // 服务启动地址 默认： '127.0.0.1'
    port: 3000, // 服务启动端口 默认值： 3000
    https: false,
    open: true, // 启动时打开浏览器
    // 设置代理，根据我们项目实际情况配置
    proxy: { // 跨域代理
      '/api': { // 请求接口，/api 是替换关键字，会替换api/* 目录下的请求接口函数中的url地址然后进行拼接
        target: 'http://127.0.0.1:8089/api',  // 实际请求的服务器地址 上面的 “/api” 在axios里就是指向这个实际的地址
        changeOrigin: true, // 是否允许跨域
        ws: false,  // webStock 请求
        rewrite: (path) => path.replace(/^\/api/, '') // 处理替换的函数 api是替换的关键字
      },
      '/han': {  // 这是第二个代理地址，和上面的是一样的
        target: 'https://api.vvhan.com/api/',
        changeOrigin: true, // 是否允许跨域
        ws: false,
        rewrite: (path) => path.replace(/^\/han/, '')
      }
    }
  },
  css: { preprocessorOptions: { css: { charset: false } } },
  build: {

  },
})
