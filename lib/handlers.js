const ehb = require("express-handlebars")

exports.proposal = (req, res) => res.render('proposal')
exports.about = (req, res) => res.render('about')


exports.convert = (req, res) => {
    //const number1 = req.body.Input1;
    //const result = number1.toString(2);
    var result = 2;
    console.log(result);
    res.render('index', {
        OutBox: result,
    })
    
}


