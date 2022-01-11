const express = require('express')
const router = express.Router();


const personcontroller= require('../controllers/personController')


router.get('/', personcontroller.getStaff)

module.exports=router

