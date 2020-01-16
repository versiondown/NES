var express = require('express')
var app = express()
var handlebars = require('express3-handlebars').create({ defaultLayout: 'main'})
var quote = require('./lib/quote')

app.set('port', process.env.PORT || 5566)

// Tool: Handlebars
app.engine('handlebars', handlebars.engine)
app.set('view engine', 'handlebars')

app.use(express.static(__dirname + '/public'))


// Router: Test
app.use(function (req, res, next) {
    res.locals.showTests = app.get('env') !== 'production'
        && req.query.test === '1'
    next()
})

// Router: Main
app.get('/', function(req, res) {
    res.render('home')
})

app.get('/about', function(req, res) {
    res.render('about', { quote: quote.getQuote() })
})

// Router: Wrong
app.use(function(req, res, next) {
    res.status(404)
    res.render('404')
})

app.use(function(err, req, res, next) {
    console.error(err.stack)
    res.status(500)
    res.render('500')
})

// Router: Port
app.listen(app.get('port'), function() {
    console.log('===>Express started on http://localhost:'
        + app.get('port')
        + '; press Ctrl-C to stop.')
})
