const mongoose = require('mongoose');
const Customer = require('../models/customer');
const express = require('express');
const router = express.Router();

router.delete('/customer/:id',(req,res)=>{
	Customer.findOneAndRemove({
		_id:req.params.id
	},function(err,customer){
		if(err){
			res.send('error deleting')
		}
		else{
			res.send('deleted succesfully')
		}
	}
	
	);
});

module.exports = router;