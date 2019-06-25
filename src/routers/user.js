const express = require('express')
const router = new express.Router()
const User = require('../models/user')

router.get('/test', (req, res) => {
    res.send('This is a new File')
})

router.get('/users', (req, res) => {
    User.find({}).then((users) => {
        res.send(users)
    }).catch((e) => {
        res.status(500).send() //server error
    })
})

router.get('/users/:id', (req, res) => {
    const _id = req.params.id //auto cast
    User.findById(_id).then((users) => {
        if (!users) {
            return res.status(404).send()
        }

        res.send(users)
    }).catch((e) => {
        res.status(500).send(e)
    })
})

router.post('/users', async (req, res) => {
    const user = new User(req.body)


    try {
        await user.save()
        res.status(201).send(user)
    } catch (error) {
        res.status(400).send(error)


    }
    // user.save().then(() => {
    //     res.status(201).send(user)
    // }).catch((e) => {
    //     res.status(400).send(e) //send back 400 code, and the error information.
    // })
}) //route post request

router.patch('/users/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowUpdates = ['name', 'email', 'password', 'age']
    const isValidOption = updates.every((update) => {
        return allowUpdates.includes(update)
    })
    if (!isValidOption) {
        return res.status(400).send({
            error: "Invalid Updates"
        })
    }
    try {
        // const user = await User.findByIdAndUpdate(req.params.id, req.body, {
        //     new: true,
        //     runValidators: true
        // })
        const user = await User.findById(req.params.id)

        updates.forEach((update) => user[update] = req.body[update])
        await user.save()

        if (!user) {
            return res.status(404).send()

        }
        res.send(user)
    } catch (error) {
        res.status(400).send(error)

    }
})

router.delete('/users/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id)
        if (!user) {
            return res.status(404).send()
        }

        res.send(user)
    } catch (error) {
        res.send(500).send()

    }
})

router.post('/users/login', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        res.send(user)
    } catch (error) {
        res.status(404).send()
    }
})

module.exports = router