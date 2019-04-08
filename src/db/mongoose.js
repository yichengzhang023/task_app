const moongose = require('mongoose')
const validator = require('validator')

moongose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})

const User = moongose.model('user', {
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be a postive number')
            }
        }
    },
    email: {
        type: String,
        required: true,
        trim: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Not a validate E-mail address')
            }
        }
    }
})

const Tasks = moongose.model('tasks', {
    description: {
        type: String
    },
    completed: {
        type: Boolean
    }
})


const user1 = new User({
    name: 'Yicheng',
    age: -1
})

user1.save().then(() => {
    console.log(user1)
}).catch((error) => {
    console.log('email: ', error.errors.email.message)
    console.log('Age: ', error.errors.age.message)
})

// task1.save().then(() => {
//     console.log(task1)
// }).catch((error) => {
//     console.log('Error: ', error)
// })