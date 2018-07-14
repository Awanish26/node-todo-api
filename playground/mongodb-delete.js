// Deleting data
const {MongoClient, ObjectID}=require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
    if(err){
        return console.log('Unable to connect to the servers');
    }
    console.log('Connected to MongoDB server');
    const db=client.db('TodoApp');

    //deleteMany-target many documents and delete them
    //db.collection('Todos').deleteMany({text:'eat lunch'}).then((result)=>{
    //    console.log(result);
    //});

    
    //deleteOne-target one document
    //db.collection('Todos').deleteOne({text:'eat lunch'}).then((result)=>{
    //    console.log(result);
    //});


    //findOneAndDelete-delets a specific document and also returns it
    // db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
    //     console.log(result);
    // });

   
    //  client.close();

});