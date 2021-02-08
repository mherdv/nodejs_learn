const express = require('express');
const router = express.Router();

router.post('/login',(req,res)=>{
    res.send('login')
})

router.post('/registration',(req,res)=>{
    res.send('registration')
})

module.exports = router