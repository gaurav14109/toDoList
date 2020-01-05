const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/to_do_list', {useNewUrlParser: true});

var db = mongoose.connection;

db.on('error',console.error.bind(console, 'Db not conneccted'));

db.once('open',()=>{
    console.log('Connection Done To Db');
});