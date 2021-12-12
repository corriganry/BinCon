const express = require('express')
const expressHandlebars = require('express-handlebars')
const app = express()
const handlers = require('./lib/handlers')

app.engine('handlebars', expressHandlebars({
  defaultLayout: 'main'
}))
app.set('view engine', 'handlebars')

app.use(express.static(__dirname + '/public'))

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  var result;
   res.render('index', {
      OutBox: result,
    })
   })
app.get('/proposal', handlers.proposal)
app.get('/about', handlers.about)

app.post('/', handlers.convert)

// custom 404 page
app.use((req, res) => {
  res.type('text/plain')
  res.status(404)
  res.send('404 - Not Found')
})

// custom 500 page
app.use((err, req, res, next) => {
  console.error(err.message)
  res.type('text/plain')
  res.status(500)
  res.send('500 - Server Error')
})

app.listen(port, () => console.log(
  `Express started on http://localhost:${port}; `))