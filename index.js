const express = require('express');
const expressHandlebars = require('express-handlebars');
const app = express();
const handlers = require('./lib/handlers');
const db = require("./db.js");
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.engine('handlebars', expressHandlebars({
  defaultLayout: 'main'
}))
app.set('view engine', 'handlebars')

app.use(express.static(__dirname + '/public'))

const port = process.env.PORT || 3000

app.get('/', handlers.view_all)
app.get('/proposal', handlers.proposal)
app.get('/about', handlers.about)

app.post('/', async function (req, res) {
  var number1 = parseInt(req.body.me);
    var bin = number1.toString(2);
    console.log(bin);
    console.log(number1);
    db.insertNumber(number1, bin);
    var numbers;
    var binaries;
    db.loadNumbers().then(result => {
        numbers = result.numbers,
        binaries = result.binary,
        console.log(binaries),
        console.log(numbers),
        res.render('index',{
            numbers: numbers,
            binary: binaries,
            textbox: number1,
            OutBox: bin,
        })
      })
    })
    
  



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