var express = require('express')

var app = express()

app.set('port', process.env.PORT || 5566)

// Tool: Handlebars
var handlebars = require('express3-handlebars').create({ defaultLayout: 'main'})
app.engine('handlebars', handlebars.engine)
app.set('view engine', 'handlebars')

// Port: Main
app.get('/', function(req, res) {
    // res.type('text/plain')
    // res.send('TTT')

    res.render('home')
})

app.get('/about', function(req, res) {
    // res.type('text/plain')
    // res.send('TTT | About')

    res.render('about')
})

// Port: Wrong
app.use(function(req, res, next) {
    // res.type('text/plain')
    // res.status(404)
    // res.send('404 - Not Found.')

    res.status(404)
    res.render('404')
})

app.use(function(err, req, res, next) {
    // console.error(err.stack)
    // res.style('text/plain')
    // res.status(500)
    // res.send('500 - Server Error.')

    console.error(err.stack)
    res.status(500)
    res.render('500')
})

// Port: Port
app.listen(app.get('port'), function() {
    console.log('===>Express started on http://localhost:'
        + app.get('port')
        + '; press Ctrl-C to stop.')
})
