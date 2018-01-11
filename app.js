const express = require('express');
const app = express();
app.set('view engine', 'pug')


app.listen(3000, function(){
    console.log("Server ready!")
})

app.get('/',function(req,res){
    res.render('index', { title: 'Hey', message: 'Hello there!' })
})