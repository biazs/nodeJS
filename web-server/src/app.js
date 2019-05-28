const path = require('path')
const express = require('express')
const hbs = require('hbs')

const cotacoes = require('./util/cotacao')

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)


app.use(express.static(publicDirectoryPath))



app.get('',(req,res) => {
    res.render('index',{
        title: 'Bem vindo ao sistema Curso nodejs',
        author:' Bia'
    })
})

//minhaapp.com.br/help
app.get('/help',(req,res) => {
    res.render('help',{
        title: 'Ajuda'
    })
})
//minhaapp.com.br/about
app.get('/about',(req,res) => {
    res.render('about',{
        title: 'Sobre',
        author:' Bia Zoroastro'
    })
})


app.get('/help/*', (req, res) => {        
    res.render('404', {
        title: '404',
        errorMessage : 'Não existe página depois de /help',
        author: 'Bia Zoroastro'})
})

app.get('*', (req, res) => {
    //res.send('404')    
    res.render('404', {
        title: '404',
        errorMessage : 'Página não encontrada',
        author: 'Bia Zoroastro'})
})

app.listen(3000,() => {
    console.log('server is up on port 3000')

})
