const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

app.use(express.static("views"));
app.use(express.static("public"));

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'views/index.html'));
})
app.get('/books',function(req,res){
    res.sendFile(path.join(__dirname,'views/book-list.html'));
})
app.get('/book1',function(req,res){
    res.sendFile(path.join(__dirname,'views/persepolis.html'));
})
app.get('/book2',function(req,res){
    res.sendFile(path.join(__dirname,'views/shanameh.html'));
})
app.get('/book3',function(req,res){
    res.sendFile(path.join(__dirname,'views/blind_owl.html'));
})
app.get('/home',function(req,res){
    res.sendFile(path.join(__dirname,'views/index.html'));
})

app.use('/',router);
app.listen(process.env.port || 3000);
console.log('Port 3000 listening on');