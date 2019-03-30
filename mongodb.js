const mongodb = require("mongodb")
const MongoClient = mongodb.MongoClient

const connectionURL = "mongodb://127.0.0.1:27017"
const databaseName = "task_manager"

MongoClient.connect(connectionURL, {
    useNewUrlParser: true
}, (error, client) => { //avoid parser deprecated.
    if (error) {
        return console.log("unable to connect ot the server")
    }
    const db = client.db(databaseName)
    // db.collection("users").insertOne({
    //     'name': 'Yicheng',
    //     'Age': 27
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('unable to insert user')
    //     }
    //     console.log(result.ops) //return array of insert results

    // })

    // db.collection('users').insertMany([{
    //     'name': 'Harry',
    //     'age': 27
    // }, {
    //     'name': 'Yolanda',
    //     'age': 27
    // }], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert these documents')
    //     }
    //     console.log(result.ops)
    // })

    db.collection('users').find({})

    // console.log("connect successfully!")
})