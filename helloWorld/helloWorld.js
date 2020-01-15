let http = require('http')

// http.createServer(function(req, res){
//     res.writeHead(200, {'Content-type': 'text/plain'})
//     res.end('Hola Seeker!')
// }).listen(5566)

// http.createServer(function(req, res){
//     res.writeHead(200, {'Content-type': 'text/html'})
//     res.end('<h1>Hola Seeker!</h1>')
// }).listen(5566)

http.createServer(function(req, res){
    let url = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase()

    switch(url){
        case '':
            res.writeHead(200, {'Content-Type': 'text/plain'})
            res.end('Homepage')
            break
        case '/about':
            res.writeHead(200, {'Content-Type': 'text/plain'})
            res.end('About')
            break
        default:
            res.writeHead(404, {'Content-Type': 'text/plain'})
            res.end('404: Not Found.')
            break
    }
}).listen(5566)














console.log('===>Start: ')
console.log('Server: localhost:5566;')
console.log('Stop: Press Ctrl + C')
