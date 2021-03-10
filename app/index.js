const path = require('path')

const express = require('express')

const app = express()

const env = require('./config')

if (!env.PORT) {
    throw Error('Не указан порт!')
}

app.set('port', env.PORT)

app.use(require('./provider'))

app.use('/build', express.static(path.resolve('public', 'build')))

app.use(require('./router'))

app.listen(app.get('port'), function () {
    console.log('Express запущен на http://localhost:' + app.get('port') + ';')
    console.log('Нажмите Ctrl+C для завершения.')
})