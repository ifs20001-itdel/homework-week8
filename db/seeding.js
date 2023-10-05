const pool = require('../queries')
var fs = require('fs')

const seedQuery = fs.readFileSync('db/seeding.sql', { encoding: 'utf8' })
pool.query(seedQuery, (err, res) => {
    console.log(err, res)
    console.log('Seeding Completed!')
    pool.end()
})