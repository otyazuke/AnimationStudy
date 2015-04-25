var path = require('path');

var dest = './dest'; // 出力先ディレクトリ
var src = './src';  // ソースディレクトリ
var relativeSrcPath = path.relative('.', src); // 後々、つかいます

module.exports = {
  src: src,
  dest: dest,
  // jade
  jade: {
    src: [
      src + '/www/**/!(_)*.jade'
    ],
    dest: dest,
    options: {pretty: true}
  },

    // jsのビルド設定
  js: {
    src: src + '/js/**',
    dest: dest + '/js',
    uglify: true
  },

  // webpackの設定
  webpack: {
    entry: src + '/js/main.js',
    output: {
      filename: 'bundle.js'
    },
    resolve: {
      extensions: ['', '.js']
    },
  },

   // stylus
  stylus: {
    src: [
      src + '/styl/**/!(_)*'
    ],
    dest: dest + '/css/',
    output: 'main.css',  // 出力ファイル名
    autoprefixer: {
      browsers: ['last 2 versions']
    },
    minify: false
  },

  // copy
  copy: {
    src: [
      src + '/www/**/*.!(jade)'
    ],
    dest: dest
  },

  // watch
  watch: {
    js: relativeSrcPath + '/js/**',
    styl: relativeSrcPath + '/styl/**',
    jade: relativeSrcPath + '/www/**',
    www: relativeSrcPath + '/www/**'
  },

  // 各タスクごとの設定をこの下に追加していく
}
