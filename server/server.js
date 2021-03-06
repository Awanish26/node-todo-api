var express=require('express');
var bodyParser=require('body-parser');

var {mongoose}=require ('./db/mongoose.js');
var {Todo}=require('./models/todo.js');
var {user}=require('./models/user.js');

var app=express();

app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
var todo=new Todo({
    text:req.body.text
});
todo.save().then((doc)=>{               //saves the model to the databasee
res.send(doc);
},(e)=>{
    res.status(400).send(e);
});
});

app.listen(3000,()=>{
    console.log('Started on port 3000');
});