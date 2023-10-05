const express = require('express')
const app = express()
const port = 3020
const testConnect = require('./router/testConnect')
const film = require('./router/film')
const listCategory = require('./router/listCategory')
const actor = require('./router/actor')
const filmCategory = require('./router/categoryFilm')

app.use(testConnect)

app.use('/film', film)

app.use(film)

app.use('/listCategory', listCategory)

app.use(filmCategory)

app.use('/actor', actor)

app.listen(port, ()=>{
    console.log(`Server run in port ${port}`)
})