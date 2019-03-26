const mongodb = require("mongodb")
const MongoClient = mongodb.MongoClient

const connectionURL = "mongodb://127.0.0.1:27017"
const databaseName = "task_manager"

MongoClient.connect(connectionURL, {
    useNewUrlParser: true
}, (error, client) => { //avoid parser deprecated.
    if (error){
        return console.log("unable to connect ot the server")
    }
    const db = client.db(databaseName)
    db.collection("users").insertOne(
        {
            'name': 'Yicheng',
            'Age': 27
        }
    )
    // console.log("connect sucucessfully!")
})