const express = require('express')

const app = express()

//minhaapp.com.br
app.get('',(req,res) => {
    res.send('<h1>Hello minha app</h1')
})
//minhaapp.com.br/help
app.get('/help',(req,res) => {
    res.send('help page')
})
//minhaapp.com.br/about
app.get('/about',(req,res) => {
    res.send('about page')
})
app.listen(3000,() => {
    console.log('server is up on port 3000')

})
