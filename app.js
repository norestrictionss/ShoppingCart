express = require('express')
const router = require('./routes/router')
const bodyParser = require('body-parser')
const {MongoClient} = require('mongodb')
const uri = "mongodb+srv://girayakman1:BvDkA5ENfHiOHPZJ@cluster0.tbu8w14.mongodb.net/?retryWrites=true&w=majority"
const PORT = 3000
const client = new MongoClient(uri)


app = express()


app.use('/public/images', express.static('./public/images'))

app.set('view engine', 'ejs')
var collections
 
app.use('/about', router);
// Parses the text as url encoded data
app.use(bodyParser.urlencoded({extended: true}));
 
// Parses the text as json
app.use(bodyParser.json());
 

app.get('/', (req, res)=>{


    res.render('index')
})


// GET method for products page
app.get('/products', async(req, res)=>{
    
    
    try{

        (await client.connect())
        const cursor = client.db("FirstDatabase")
        
        const collection = await cursor.collection("Products").find({}).toArray()
        
        res.render('products', {collections: collection})
       
        
        
    }
    catch(err){
        console.log(err)
    }

    


})

// Get Method for about page

app.get('/about', (req, res)=>{


    res.render('about', {title:'Hello!', name:'Giray'})



})

app.listen(PORT)












