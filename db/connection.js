// // ************* Mongoose MongoDB Connection *************
// //  example from https://www.youtube.com/watch?v=Qn0SOL8vK8w&t=1s
// const mongoose = require('mongoose');
// require('dotenv').config();

// // this gets the connection string from the .env file. (mongoConnectionString is the name of the variable in the .env file)
// const URI = process.env.mongoConnectionString;

// const connectdb = async () => {
//     await mongoose.connect(URI);
//     console.log('MongoDB is connected');
// };

// module.exports = connectdb;

// **********************************************
// ************* MongoDB Connection *************

require('dotenv').config();
//Most of this code comes directlly from Mongodb.com.
const { MongoClient, ServerApiVersion } = require('mongodb');

// // this gets the connection string from the .env file. (mongoConnectionString is the name of the variable in the .env file)
const uri = process.env.mongoConnectionString;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
run().catch(console.dir);
