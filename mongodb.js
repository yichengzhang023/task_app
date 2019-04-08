const {
    MongoClient,
    ObjectID
} = require("mongodb")
const id = new ObjectID()

const connectionURL = "mongodb://127.0.0.1:27017"
const databaseName = "task_manager"

console.log(id)
console.log(id.getTimestamp())


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

    db.collection('users').findOne({
        name: 'Yolanda'
    }, (error, user) => {
        if (error) {
            return console.log('Unable to fetch')
        }
        console.log(user)
    })
    db.collection('users').find({
        age: 27
    }).toArray((error, users) => {
        console.log(users)
    })

    const updatePromise = db.collection('users').updateOne({
        _id: '5c9f4d0922a2ac20f89f90db'
    }, {
        $set: {
            name: 'Mike'
        }
    })

    updatePromise.then((result) => {
        console.log(result)
    }).catch(
        (error) => {
            console.log(error)
        })
    // console.log("connect successfully!")
})