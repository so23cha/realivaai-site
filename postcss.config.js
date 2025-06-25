// postcss.config.js
module.exports = {
  plugins: {
    // 기존에 있던 tailwindcss: {}는 삭제하거나 주석 처리
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
}