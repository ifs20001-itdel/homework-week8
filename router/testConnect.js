const express = require('express')
const router = express.Router()

router.get('/', (req, res)=>{
    res.json("Server is Ready To Run")
    console.log("Server is Ready To Run")
})

module.exports = router