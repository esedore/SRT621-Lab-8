const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

app.use(express.static("views"));
app.use(express.static("public"));

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
module.exports = router;

app.use('/',router);
app.listen(process.env.port || 3000);
console.log('Port 3000 listening on');