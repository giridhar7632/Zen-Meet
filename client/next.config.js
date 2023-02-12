/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

module.exports = withPWA({
  reactStrictMode: true,
  pwa: {
    dest: 'public',
    runtimeCaching,
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === 'development',
  },
})

// module.exports = withPWA({
//   reactStrictMode: true,
//   pwa:{
//     dest:"public",
//     register:true,
//     skipWaiting:true,
//     disable:process.env.NODE_ENV === 'development'
//   }
// });
