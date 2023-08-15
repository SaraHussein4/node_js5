const mongodb = require('mongodb')
const mongoClient = mongodb.MongoClient
const connectionUrl = 'mongodb://127.0.0.1:27017'
const dbname ="proj-1"
mongoClient.connect(connectionUrl , (error , res1) => {
    if(error){
        return console.log('error has occured')
    }
    console.log('All perf')
    const db = res1.db(dbname)
    ///////////////////////////////////
    db.collection('users').insertOne({
        name:'sara' ,
        age : 21
    }),(error , data) => {
        if(error){
            console.log('Unable to insert Data')
        }
        console.log(data.insertedId)
    } 
    ////////////////////////////////////
    db.collection('users').insertOne({
        name:'ahmed' ,
        age : 22
    }),(error , data) => {
        if(error){
            console.log('Unable to insert Data')
        }
        console.log(data.insertedId)
    } 
//////////////////////////////////////

    db.collection('users').insertMany(
       [ {
        name:'esraa' ,
        age : 23},
        {
            name:'sama' ,
        age : 21
        },
        {
            name:'miral' ,
        age : 27
        },
        {
            name:'eman' ,
        age : 27
        },
        {
            name:'fedaa' ,
        age : 27
        },
        {
            name:'elaf' ,
        age : 27
        },
        {
            name:'fatma' ,
        age : 27
        },
        {
            name:'tasneem' ,
        age : 20
        },
        {
            name:'mariam' ,
        age : 25
        },
        {
            name:'abdo' ,
        age : 26
        }],(error,data)=>{
            if(error){
                console.log('Unable to insert data')
            }
            console.log(data.insertedCount)
        }
    )
//////////////////////////////////////////////////////////////

db.collection('users').find({age:27}).toArray((error , users)=>{
        if(error){
            return console.log('error has occured')
        }
        console.log(users)
    })
//////////////////////////////////////////

db.collection('users').find({age:27}).limit(3).toArray((error , users)=>{
        if(error){
            return console.log('error has occured')
        }
        console.log(users)
    })
/////////////////////////////////////////////////////////////

db.collection('users').updateOne({_id:mongodb.ObjectId("64daf5d9c4cb271149065cb8")},{
        $set:{name:"amira"},
        $inc:{age:1}
    }).
    then((data1)=> console.log(data1.modifiedCount))
    .catch((error)=> {console.log(error)})
db.collection('users').updateOne({_id:mongodb.ObjectId("64daf5d9c4cb271149065cb9")},{
        $set:{name:"yara"},
        $inc:{age:4}
    }).
    then((data1)=> console.log(data1.modifiedCount))
    .catch((error)=> {console.log(error)})
db.collection('users').updateOne({_id:mongodb.ObjectId("64daf5d9c4cb271149065cba")},{
        $set:{name:"hana"},
        $inc:{age:2}
    }).
    then((data1)=> console.log(data1.modifiedCount))
    .catch((error)=> {console.log(error)})
db.collection('users').updateOne({_id:mongodb.ObjectId("64daf5d9c4cb271149065cbb")},{
        $set:{name:"reem"},
        $inc:{age:3}
    }).
    then((data1)=> console.log(data1.modifiedCount))
    .catch((error)=> {console.log(error)})


////////////////////////////////////////////////////////////

    db.collection('users').updateMany({},{
        $inc : {age :10}
    })
        .then((data1)=> console.log(data1.modifiedCount))
        .catch((error)=> {console.log(error)})


/////////////////////////////////////////////////
            db.collection('users').deleteMany({age:41})
            .then((data1)=> console.log(data1.deletedCount))
            .catch((error)=> {console.log(error)})
//////////////////////////////////////////////////
    
})
