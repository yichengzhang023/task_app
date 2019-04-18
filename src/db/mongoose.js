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
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 7,
        validate(){
            if (value.toLowerCase().includes('password')){
                throw new Error('Password cannot contain "password"')
            }
        }
    }
})

const Tasks = moongose.model('tasks', {
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})

const task = new Tasks({
    description: 'this is a  test  ',
})

const user1 = new User({
    name: '',
    age: -1,
    email: '123@qq21312com',
    password: '     ree     '
})

user1.save().then(() => {
    console.log(user1)
}).catch((error) => {
    console.log('name: ', error.errors.name.message)
    console.log('email: ', error.errors.email.message)
    console.log('Age: ', error.errors.age.message)
    console.log('Password: ', error.errors.password.message)
})

task.save().then(() => {
    console.log(task)
}).catch((error) => {
    console.log('Error: ', error)
})