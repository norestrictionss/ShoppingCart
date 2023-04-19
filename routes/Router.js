const { connect } = require('mongoose')

express = require('express')
db = require('mongoose')


const connectdb = require('../models/connectdb')
router = express.Router()

const {MongoClient} = require('mongodb')
const uri = "mongodb+srv://girayakman1:BvDkA5ENfHiOHPZJ@cluster0.tbu8w14.mongodb.net/?retryWrites=true&w=majority"

const client = MongoClient
 

router.get('/about', (req, res)=>{


    res.render('templates/about.html')


})



module.exports = router

