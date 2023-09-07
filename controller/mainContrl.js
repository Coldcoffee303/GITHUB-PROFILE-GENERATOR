const home = (req, res) => {
    res.render('homepage')
}


const GetGeneratePlain = (req, res) =>{
    res.render('genPlain')
}



const PostResults = (req, res) =>{
    var body = req.body

    

    res.type('text').send(`<h1>Hello my name is ${body.Name}</h1>`)
    res.end()
}



















module.exports = {home, GetGeneratePlain, PostResults}