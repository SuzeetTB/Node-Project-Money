const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const {mongoDBURL} = require('./config/database');
//Database Connection
mongoose.connect(mongoDBURL,{useNewUrlParser:true, useUnifiedTopology:true}).then(db=>{
    console.log(`200 | DATABASE CONNECTED`);
}).catch(error=>console.log(`404 | COULD NOT CONNECT |` + error));

//App init
const app = express();
//View Engine Setup
app.set('views', path.join(__dirname,'views'));
app.set('view engine','ejs');
//set public Folder
app.use(express.static(path.join(__dirname, 'public')));
//Routes
app.get('/', (req,res)=>{
    res.render('home/home-index');
});

//Server
const port = process.env.PORT || 4555;
app.listen(port,()=>{
    console.log(`Server is Active | try localhost:${port}`);
})