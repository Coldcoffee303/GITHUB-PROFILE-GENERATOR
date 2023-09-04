const home = (req, res) => {
    res.render('homepage')
}


const generatePlain = (req, res) =>{
    res.render('genPlain')
}


const generateAuto = (req, res) => {
    res.send('blank')
}


const results = (req, res) =>{
    var {name} = req.body
    res.write(`<h1>Hello my name is ${name}</h1>`)
}


module.exports = {home, generateAuto, generatePlain, results}