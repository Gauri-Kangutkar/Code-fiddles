const express= require ('express');
const router = express.Router();
const userModel = require('../models/user');
const CryptoJS = require('crypto-js');
const {v4:uuidv4} = require('uuid')

router.get('/',(req,res)=>{
    res.end("user route");

})

router.post('/', (req,res)=>{
    let userObj = re.body;
    userObj.password = CryptoJS.base64decode.encrypt(userObj.password, '12345678').toString();
    userObj['userid'] = uuidv4();
    let newUser = new userModel(userObj);
    newUser.save().then((doc)=>{
        res.json({error:false, express, response:doc})
    }).catch((err)=>{
        console.log(err);
        res.json({error:true, message:'error in creating doc '})
    })
});

router.post('/login', (req,res)=> {
    let data = req.body;
    userModel.findOne({email: data.email}).then((userDoc)=>{
        if(userDoc == null){
            res.json({error: true, message:"Account doen't exist"});
        }
        else{
            let decryptedPassword = CryptoJS.base64decode.decrypt(userDoc.password, '12345678').toString(CryptoJS.enc.utf8);
            if(decryptedPassword == data.password){
                res.json({error: false, response: userDoc})
            }
            else{
                res.json({error:true, message:'incorrect password'});
                
            }
        }
    }).catch()
})
module.exports = router;
