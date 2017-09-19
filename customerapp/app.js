const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');
const Customer = require('./models/customer');
// connect mongoose
mongoose.connect('mongodb://localhost:27017/moviefav');
//const db = mongoose.connection;
const app = express();
const insert = require('./routes/insert');
const display = require('./routes/display');
 const update = require('./routes/update');
 const deleted = require('./routes/deleted');


//Body Parser Middleware
app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
//Set Static Path
//app.use(express.static(path.join(__dirname, 'public')))

// app.get('/', function(req, res) {
//     res.render('index');
// });

app.use('/',display);

app.use('/',insert);

app.use('/',update);

app.use('/',deleted);



app.listen(3000, function() {
    console.log('Server Started on Port 3000...');
})

module.exports= app