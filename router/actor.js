const express = require('express')
const pool = require('../queries')
const router = express.Router()

router.get('/', (req, res)=>{
    const sql = 'SELECT * FROM actor'
    pool.query(sql, (error, result)=>{
        if(error) throw error
        res.send(result.rows)
    })
})

module.exports = router