module.exports.index = function (req, res) {
    res.view('home.html')
}

module.exports.notFound = function (req, res) {
    res.view('notFound.html')
}