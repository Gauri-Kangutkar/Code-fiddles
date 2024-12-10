const express = require('express');
const cors = require('cors');
const userRoute = require('./routes/user');
const mongoose = require('mongoose')

const app = express();
app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    res.end('hello from server')
})
mongoose.connect('mongodb+srv://codefiddle:Admin@1234@cluster0.dlfm0.mongodb.net/cf?retryWrites=true&w=majority&appName=Cluster0', {useNewUrlParser: true, useUnifiedTopology:true}).then(()=> 
    console.log('connected to db')).catch((err)=> console.log(err));
app.use('/users',userRoute);
app.listen(3000,()=>{
    console.log('server is running in localhost 3000 ')
})