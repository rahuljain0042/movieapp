const mongoose = require('mongoose');
const Customer = require('../models/customer');
const express = require('express');
const router = express.Router();

// router.post('/customer', function(req, res) {
//     let cust = new Customer();
//     cust.firstname = req.body.firstname;
//     cust.lastname = req.body.lastname;
//     cust.email = req.body.email;
//     cust.save((err, data) => {
//         if (err) console.log('error in pushing')
//         else {
//             //console.log(data)
//             res.json(data)
//         }
//     });

// });

router.post('/customer',function(req,res,next){
    Customer.create(req.body).then(function(data){
        res.send(data)
    })
})

module.exports = router

