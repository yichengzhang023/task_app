const moongose = require('mongoose')

moongose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})



// const Tasks = moongose.model('tasks', {
//     description: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     completed: {
//         type: Boolean,
//         default: false
//     }
// })

// const task = new Tasks({
//     description: 'this is a  test  ',
// })



// task.save().then(() => {
//     console.log(task)
// }).catch((error) => {
//     console.log('Error: ', error)
// })