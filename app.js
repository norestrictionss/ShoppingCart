express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const {MongoClient, ObjectId} = require('mongodb')
const uri = "mongodb+srv://girayakman1:BvDkA5ENfHiOHPZJ@cluster0.tbu8w14.mongodb.net/?retryWrites=true&w=majority"

const client = new MongoClient(uri)


app = express()


app.use('/', express.static('./static'))
var collections
 
// Parses the text as url encoded data
app.use(bodyParser.urlencoded({extended: true}));
 
// Parses the text as json
app.use(bodyParser.json());
 

app.get('/Products', async(req, res)=>{
    

    
    try{
        (await client.connect())
        console.log("occ")
        const cursor = client.db("FirstDatabase")

        const collection = await cursor.Products.findOne({_id: "642dd2f2c2bf135af19e81c8"})
        console.log(collection)
        
        res.send(collection)
        
    }
    catch(err){
        console.log(err)
    }


})

app.listen(8000)












