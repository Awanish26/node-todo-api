// Updating data
const {MongoClient, ObjectID}=require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
    if(err){
        return console.log('Unable to connect to the servers');
    }
    console.log('Connected to MongoDB server');
    const db=client.db('TodoApp');


    // db.collection('Todos').findOneAndUpdate({
    //     _id:new ObjectID('5b4a76a40ff468bd0a04c7f9')
    // },{
    //     $set:{
    //         completed:true
    //     }
    // },{
    //     returnOriginal:false
    // }).then((result)=>{
    //     console.log(result);
    // });


    db.collection('Users').findOneAndUpdate({
        _id:new ObjectID('5b4a5615acaafd30f00c6a86')
    },{
        $set:{
            name:'leo'
        }
    ,$inc:{
        age:1
    }
},{
        returnOriginal:false
    }).then((result)=>{
        console.log(result);
    });
   
   
    //  client.close();

});