const express = require('express')
// const body_parser = require('body-parser')
const path = require('path')
const indexRouter = require('./routes/index.js')


const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
// app.use(body_parser.json())
// app.use(body_parser.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, 'public')))
app.use('/', indexRouter)

app.use((err, req, res, next) =>{
    console.error(err)
})

app.get('/', (req, res)=>{
    res.render('homepage')
})



const PORT = process.env.PORT || 3000

app.listen(PORT, ()=>{
    console.log(`Server is cooking on port ${PORT}`)
})
