
const mongoose = require('mongoose');
const Customer = require('../models/customer');
const express = require('express');
const router = express.Router();


router.get('/customer', function(req, res) {
    Customer.find((err, data) => {
        if (err) res.send("error in get")
        else {
            res.json(data)
        }
    });

})

module.exports = router;