const path = require('path')
const webpack = require('webpack')

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              camelCase: true
            }
          },
          {
            loader: 'postcss-loader'
          }
        ],
        include: path.resolve(__dirname, 'src')
      },
      {
        test: /\.jsx?$/,
        use: ['babel-loader'],
        include: [path.resolve(__dirname, 'src')]
      }
    ]
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src')
    },
    extensions: ['.js', '.jsx']
  },
  externals: [
    {
      react: {
        amd: 'react',
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react'
      }
    }
  ],
  plugins: [new webpack.ProgressPlugin(), new webpack.HashedModuleIdsPlugin()]
}
