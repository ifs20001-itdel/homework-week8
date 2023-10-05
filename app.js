const express = require('express')
const app = express()
const port = 3020
const testConnect = require('./router/testConnect')
const film = require('./router/film')
const listCategory = require('./router/listCategory')
const actor = require('./router/actor')
const filmCategory = require('./router/filmCategory')

app.use(testConnect)

// List file film.js di router/film.js untuk melihat Path yang digunakan untuk mengakses
app.use(film)

// Menampilkan data list Category
app.use('/listCategory', listCategory)

// Menampilkan data list Film berdasarkan Category
app.use(filmCategory)

// Menampilkan data list Table Actor
app.use('/actor', actor)

app.listen(port, ()=>{
    console.log(`Server run in port ${port}`)
})