const express = require('express')
require('./db/mongoose')


const usersRouter = require('./routers/user')
const tasksRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(usersRouter)
app.use(tasksRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

// const bcrypt = require('bcryptjs')
// const myFunction = async () => {
//     const password = 'Red12345'
//     const hashPassword = await bcrypt.hash(password, 8) //8 recommended round
//     console.log(password)
//     console.log(hashPassword)

//     const isMatch = await bcrypt.compare('resds', hashPassword)
//     console.log(isMatch)
// }

// myFunction()
