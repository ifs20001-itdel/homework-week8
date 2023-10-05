const express = require('express')
const router = express.Router()
const pool = require('../queries')

router.get('/', (req, res)=>{
    const sql = 'SELECT * FROM film'
    pool.query(sql, (error, result)=>{
        if(error) throw error
        res.send(result.rows)
    })
})

router.get('/listFilm/:id', (req, res)=>{
    const film_id = req.params.id
    const sql = 'SELECT * FROM film WHERE film_id=$1'
    pool.query(sql, [film_id], (error, result)=>{
        if(error) throw error
        res.send(result.rows).status(200)
    })
})

module.exports = router