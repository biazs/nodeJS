const request = require('request')


const api_token = 'UnWKQPMQtxr0pby8OejtkO1B6H90YjVXuvqYK0aPTRaQc3JkLEgcruGDtUDC'

const cotacao = (symbol, callback) => {
    const url = `http://www.worldtradingdata.com/api/v1/stock?symbol=${symbol}&api_token=${api_token}`

    request({url:url, json:true}, (err, response) => {
        if(err){
            const error = {
                messagem : `Something went wrong: ${err}`
            }
            callback(null, error)
        }
        if(response.body.data == undefined){
            const error = {
                messagem : `No data found`
            }
            callback(null, error)                        
        }

        const parsedJSON = response.body.data[0]
        const {symbol, price_open, price, day_high, day_low} = parsedJSON
        const data = {symbol, price_open, price, day_high, day_low}

        callback(data, null)
    })
}
module.exports = cotacao