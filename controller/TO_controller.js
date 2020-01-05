const List = require('../models/To_do_list');
module.exports.createToDoList = (req, res)=>{

    List.find({},(err, List)=>{


        if(err){
            console.log("Error in fetching data");
            return;
        }
        return res.render('To_do_List',{
            title:'Contact List',
            toDo_List:List   //Rendering the view with list as view to be used.

    });
    });


    
};