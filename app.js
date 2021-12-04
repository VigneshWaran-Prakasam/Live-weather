const geocode = require('./utlis/geocode')
const weather = require('./utlis/weather')


const address = process.argv[2]
if(!address)
{
    console.log('Please provide an address')
}
else{

    geocode(address,(error,{latitude,longtitude,location})=>
{
    if(error)
    {
        return console.log(error)
    }
    weather(latitude,longtitude,(error,forecast)=>
    {
        if(error)
        {
            return console.log(error)
        }
        console.log(location)
        console.log(forecast)

    })

    })
}