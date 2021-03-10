const path = require('path')
const eslintWebpackPlugin = require('eslint-webpack-plugin')

module.exports = {
    resolve: {
        extensions: ['.js'],
        alias: {
            App: path.resolve('resource', 'js')
        }
    },
    plugins: [
        new eslintWebpackPlugin({
            extensions: ['js']
        })
    ]
}