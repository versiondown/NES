let express = require('express')

let app = express()

app.set('port', process.env.PORT || 5566)

// Tool: Handlebars
let handlebars = require('express3-handlebars').create({ defaultLayout: 'main'})
app.engine(('handlebars', handlebars.engine))
app.set('vie engine', 'handlebars')

// Port: Main
app.get('/', (req, res) => {
    res.type('text/plain')
    res.send('TTT')
})

app.get('/about', (req, res) => {
    res.type('text/plain')
    res.send('TTT | About')
})

// Port: Wrong
app.use((req, res, next) => {
    res.type('text/plain')
    res.status(404)
    res.send('404 - Not Found.')
})

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.style('text/plain')
    res.status(500)
    res.send('500 - Server Error.')
})

// Port: Port
app.listen(app.get('port'), () => {
    console.log('===>Express started on http://localhost:'
        + app.get('port')
        + '; press Ctrl-C to stop.')
})
