const db = require('../models') //this is where our db mongoose connection lives as well as our models

// PEOPLE INDEX ROUTE
const getPeople = (req, res) => {
    // db.People.find({})  <-- db has all our models in it so we can use any of them here with one line! 
    // res.send('getPeople')
    db.People.find({})
    .then((foundPeople) => {
        if(!foundPeople){
            res.status(404).json({message: 'Cannot find People'})
        } else {
            res.status(200).json({data: foundPeople})
        }
    })
}

// PEOPLE CREATE ROUTE
const createPeople = (req, res) => {
    // db.People.create({name: 'testing'})
    // .then((res) => {console.log(res)})
    // res.send('createPeople')
    db.People.create(req.body)
    .then((createdPerson) => {
        if(!createdPerson){
            res.status(400).json({message: 'Cannot create People'})
        } else {
            res.status(201).json({data: createdPerson, message: 'Person created'})
        }
    })
}

module.exports = {
    getPeople, 
    createPeople
}