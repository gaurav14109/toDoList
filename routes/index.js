//this is the entry point for routes
const express = require('express');
const route = express.Router();
const toDoController = require('../controller/TO_controller');
const List = require('../models/To_do_list');
const db =require('../config/mongoose');


route.get('/',toDoController.createToDoList); //const name + function name.
route.post('/create_To_Do', (req, res)=>{

    List.create({
          name:req.body.name,//taking it from browser and create key should be as per schema.
          date:req.body.date,
          category:req.body.category

    },(error,List)=>{

        if(error){
            console.log('Error creating the schema');
            return;
        }
        console.log('Created schema',List);
        res.redirect('back');
    });
   
});



module.exports = route;