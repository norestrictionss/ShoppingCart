

const connectDB = async function (){
    /**
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
     */

    
    const {MongoClient} = require('mongodb')
    const uri = "mongodb+srv://girayakman1:BvDkA5ENfHiOHPZJ@cluster0.tbu8w14.mongodb.net/?retryWrites=true&w=majority"


    const client = new MongoClient(uri)
 
    try {
        // Connect to the MongoDB cluster
        await client.connect();
        
        const db = client.db("FirstDatabase")

        
        const collection = db.collection('Products')
        console.log(collection.find({}))

        return collection
        // Make the appropriate DB calls
 
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();


    }
}



module.exports = {connectDB}