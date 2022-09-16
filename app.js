const express = require('express')
const mongoose = require('mongoose')
const blogRoutes = require('./routes/blogRoutes')


//connect to db
const dbURI = 'mongodb+srv://Benson:Ben2262@nodeblog.oyp5q2m.mongodb.net/node-blog?retryWrites=true&w=majority'
mongoose.connect(dbURI)
.then((result) =>app.listen(8000))
.catch((err) => console.log(err))

//express app
const app = express()

//register view engine
app.set('view engine', 'ejs')


//middleware & static css
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))


//routes
app.get('/', (req, res) => {    
    res.redirect('/blogs')
})

app.get('/about', (req, res) => {
    res.render('blogs/about', {title: 'About'})
})

//blog routes
app.use('/blogs', blogRoutes)

app.use((req, res) => {
    res.status(404).render('blogs/404', {title: 'Error 404'})
})