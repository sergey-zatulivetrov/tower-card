const path = require('path')

module.exports = function (req, res, next) {
    res.view = function (view) {
        return res.sendFile(path.resolve('resource', 'view', view))
    }

    res.api = function (success, error, message, response) {
        return res.json({
            success,
            error,
            message,
            response
        })
    }

    res.apiSuccess = function (response) {
        return res.api(true, 0, '', response)
    }

    res.apiError = function (error, message) {
        return res.api(false, error, message, {})
    }

    next()
}