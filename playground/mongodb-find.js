// Fetching data
const {MongoClient, ObjectID}=require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
    if(err){
        return console.log('Unable to connect to the servers');
    }
    console.log('Connected to MongoDB server');
    const db=client.db('TodoApp');

   /* db.collection('Todos').find({_id:new ObjectID('5b4a54130bb6bb13fc69231c')}).toArray().then((docs)=>{              //toArray returns a promise, hence a 'then'
        console.log('Todos');
        console.log(JSON.stringify(docs,undefined,2));
      },(err)=>{
          console.log('Unable to fetch todos',err);
      });         */
    
      db.collection('Todos').find().count().then((count)=>{              
      console.log(`Todos count: ${count}`);
      
    },(err)=>{
        console.log('Unable to fetch todos',err);
    });         
 


    //  client.close();

});