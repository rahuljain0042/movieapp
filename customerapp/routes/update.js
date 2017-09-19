
const mongoose = require('mongoose');
const Customer = require('../models/customer');
const express = require('express');
const router = express.Router();


router.put('/customer/:id',(req,res)=>{
	Customer.update({
		_id:req.params.id
	},
	{$set:{email:req.body.email } },{upsert:true},
function(err,newCustomer){
	if(err){
		console.log('error occured');
	}
	else{
		console.log('success');
		res.json('newCustomer');
	}
	

	});
});

module.exports = router;
