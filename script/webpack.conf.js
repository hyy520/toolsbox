const webpack = require('webpack')
const path = require('path')
const pkg = require('../package.json')
const rootPath = path.resolve(__dirname, '../')

const config = {
    entry: path.resolve(rootPath, 'src', 'index.js'),
    output: {
        filename: `${pkg.nickname}.min.js`,
        path: path.resolve(rootPath, 'min'),
        library: `${pkg.nickname}`,
        libraryTarget: "umd"
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: "babel-loader"
        }]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ]
}

module.exports = config