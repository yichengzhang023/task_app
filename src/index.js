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

