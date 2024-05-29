const express = require('express');
 const path = require('path');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const port =2900;


const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('assets'));


app.get('/', function(req, res){
    return res.render('home',{
        "username":"palak"
    });
})

app.get('/menu', function(req, res){
    return res.render('menu');
})


app.get('/catering', function(req, res){
    return res.render('catering');
})
app.get('/chatbox', function(req, res){
    return res.render('chatbox');
})
app.get('/customer', function(req, res){
    return res.render('customer');
})
app.get('/gallery', function(req, res){
    return res.render('gallery');
})
app.get('/login', function(req, res){
    return res.render('login');
})
app.get('/paymentinfo', function(req, res){
    return res.render('paymentinfo');
})
app.get('/location', function(req, res){
    return res.render('reachus');
})
app.get('/reservation', function(req, res){
    return res.render('reservation');
})
app.get('/catering', function(req, res){
    return res.render('catering');
})

app.get('/contact', function(req, res){
    return res.render('contact');
})

let connectdb=require("./connection/connectdb.js")
connectdb()


app.listen(port,function(err){
    if (err) {
        console.log("Error in running the server", err);
    }
    console.log('Yup!My Server is running on Port',port);
})


