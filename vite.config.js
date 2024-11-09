import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

const resolve = (dir) => path.resolve(dir)
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    port:3000,
    cors:true,
    proxy:{
      '/api':{
        target:'http://localhost:3000',
        changeOrigin:true,
        rewrite:(path) => path.replace(/^\/api/,'')

      }
    }
  },
  resolve: {
    alias: {
      '@': resolve( 'src'),
      components: resolve('src/components'),
      utils: resolve('src/utils'),
    }
  },
  // css:{
  //   preprocessorOptions:{
  //     less:{
  //       modifyVars: {
  //         //引入less基础变量
  //         hack: `true; @import (reference) "${path.resolve("src/assets/css/index.less")}";`,
  //       },
  //       javascriptEnabled: true,
  //     }
  //   }
  // }
})
//
// import { defineConfig } from 'vite';
// import { resolve } from 'path';
// import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     alias: {
//       '@': resolve('src'),
//     },
//   },
//   server: {
//     proxy: {
//       '/api': {
//         target: 'http://106.14.223.52',
//         changeOrigin: true,
//       },
//       '/public': {
//         target: 'http://106.14.223.52',
//         changeOrigin: true,
//       },
//     },
//   },
// });

