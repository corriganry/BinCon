const ehb = require("express-handlebars");
const db = require("../db.js");
var express = require('express');
var app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

var hbs = ehb.create({})

hbs.handlebars.registerHelper("log", function(that) {
        console.log(that)
    })

exports.proposal = (req, res) => res.render('proposal')
exports.about = (req, res) => res.render('about')


exports.convert = (req, res) => {
    var number1 = req.body.me;
    //var result = number1.toString(2);
    console.log(number1);
    db.insertNumber(number1);
    var numbers
    db.loadNumbers().then(result => {
        numbers = result.numbers,
        console.log(numbers),
        res.render('index',{
            numbers:numbers,
            textbox: number1,
            OutBox: number1,
        })
    })
    
}

exports.home = (req, res) => {
    var numbers;
    var binaries;
    db.loadNumbers().then(result => {
        numbers = result.numbers,
        binaries = result.binary,
        console.log(numbers),
        res.render('index',{
            numbers:numbers,
            binary:binaries,
            textbox: number1,
            OutBox: number1,
        })
    })
}

exports.view_all = (req, res) => {
    var numbers;
    var binaries;
    db.loadNumbers().then(result => {
        numbers = result.numbers,
        binaries = result.binary,
        console.log(numbers),
        res.render('index',{
            numbers:numbers,
            binary:binaries,
        })
    })
}

