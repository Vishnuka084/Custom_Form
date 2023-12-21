/*
* Express (npm i express)
* mongoose (npm i  mongoose)
* nodemon ( npm i nodemon  -g(sudo))
* dotenv ( npm i dotenv) -> sendgrid
* body-parser (npm i body-parser)
* bcrypt (npm i bcrypt)
* jsonwebtoken (npm i jsonwebtoken)
*
*
*  */

const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const bodyParser = require('body-parser');
const port = process.env.SERVER_PORT | 3000;
const app = express();

//---------------------
const userRouter = require('./routes/UserRouter');
//---------------------
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:false}));

// parse application/json
app.use(bodyParser.json);

try{
    mongoose.connect('mongodb:127.0.0.1/posapi',()=>{
        app.listen(port,()=>{
            console.log(`server Started & running  on port ${port}`);
        })
    });
}catch (e){
    console.log(e);
}


app.get('/test-api',(req,resp)=>{
    return resp.json({'message ':'server Started!'})
})

//-------------
app.use('/api/v1/user',userRouter);