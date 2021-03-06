const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

app.use(express.static("views"));
app.use(express.static(__dirname+"public"));
app.use(express.static(__dirname+"css"));

router.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'views/index.html'));
})
router.get('/books',function(req,res){
    res.sendFile(path.join(__dirname,'views/book-list.html'));
})
router.get('/book1',function(req,res){
    res.sendFile(path.join(__dirname,'views/persepolis.html'));
})
router.get('/book2',function(req,res){
    res.sendFile(path.join(__dirname,'views/shanameh.html'));
})
router.get('/book3',function(req,res){
    res.sendFile(path.join(__dirname,'views/blind_owl.html'));
})
router.get('/home',function(req,res){
    res.sendFile(path.join(__dirname,'views/index.html'));
})
router.get('/public',function(req,res){
    res.sendFile(path.join(__dirname,'public'));
})
module.exports = router;

app.use('/',router);
