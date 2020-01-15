let http = require('http')
let fs = require('fs')

function serveStaticFile(res, url, contentType, resCode) {
    if (!resCode) {
        resCode = 200
    }
    fs.readFile(__dirname + url, function (err, data) {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' })
            res.end('500: Internal Error.')
        } else {
            res.writeHead(resCode, { 'Content-Type': 'contentType' })
            res.end(data)
        }
    })
}

http.createServer(function (req, res) {
    let url = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase()

    switch (url) {
        case '':
            serveStaticFile(res, '/public/home.html', 'text/html')
            break
        case '/about':
            serveStaticFile(res, '/public/about.html', 'text/html')
            break
        case '/logo':
            serveStaticFile(res, '/public/img/logo.png', 'text/png')
            break
        default:
            serveStaticFile(res, '/public/404.html', 'text/html', 404)
            break
    }
}).listen(5566)




console.log('===>Start: ')
console.log('Server: localhost:5566;')
console.log('Stop: Press Ctrl + C')

