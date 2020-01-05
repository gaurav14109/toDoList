const express = require('express');
const port = 8000;

const app = express();
const db =require('./config/mongoose');
const path = require('path');
const List = require('./models/To_do_list');


app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static('assests'));
app.use(express.urlencoded());

app.use('/',require('./routes/'));//Will route it index.js as used use
app.use('/create_To_Do',require('./routes/'));



app.listen(port, (err)=>{

    if(err){
        console.log('Error in Connection');
    }

    console.log("Connection Done");

});

app.get('/delete_list', (req, res)=>{

    let list_id = req.query.id;
    List.findByIdAndDelete(list_id,(err)=>{

        if(err)
        {
            console.log('Cannot Delete item');
        }
        return res.redirect('back');
    });

});

//When response is there then it should return.
//First request comes to index.js and then we direct. 

