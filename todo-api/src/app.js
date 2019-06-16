const express = require('express')
const userRouter = require('./routes/users')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)

app.listen(port, () => {
    console.log(`Servidor no ar na porta ${port}`)
})