const express = require('express')

const router = new express.Router()


router.post('/users',(req, res) => {

    res.status(201).send()
})

router.get('/users',(req, res) => {
    const users = [
        {name : 'user1'},
        {name : 'user2'}
    ]
    res.status(200).send(users)
})

router.get('/users/:id',(req, res) => {
    console.log(req.params.id)
    const user = {name : 'user1'}
    
    res.status(200).send(user)
})

router.patch('/users/:id',(req, res) => {

    res.send
})


module.exports = router