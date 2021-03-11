const path = require('path')

module.exports = {
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            App: path.resolve('resource', 'js')
        }
    }
}