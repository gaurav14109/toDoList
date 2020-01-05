const mongoose = require('mongoose');//same instace as in config 
const Schema = mongoose.Schema;


//creating schemas

const toDoSchema = new Schema({

    name:{
        type:String,  //schema name and schema type i.e the datatype declaration.
        required:true
    },
    date:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    }
});
//creating table scheme type.


//creating collection i.e a table creation  i.e table name as List
const List = mongoose.model('List', toDoSchema);

//exporting
module.exports=List; //then we use Cotact.create etc.
//contact table.
//model
