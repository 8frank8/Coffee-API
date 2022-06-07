const { request } = require('express')
const express = require('express')
const app = express()
const PORT = 8000

const coffee_roast = {

'lightRoast' : {
     'taste':'bittersweet flavor and low oiliness',
     'bestWayToBrew':'Pour Over'
},
'medium roast':{
    'taste':'balance flavor, aroma, and acidity',
     'bestWayToBrew':'Cold Brews'
},
'dark roast':{
    'taste':'bitterness is significant high with a low acidity and smoky aftertaste ',
     'bestWayToBrew':'espresso'
}

}

app.get('/', (req, res)=> {
    res.sendFile( __dirname + '/index.html' )
})

app.get('/api/:name', (req,res)=>{
  const roastType = req.params.name.toLowerCase()
 

   if
    (coffee_roast[roastType])
        res.json(coffee_roast[roastType])
   else
   {
       res.send('Roast not found')
   } 
})

app.listen(PORT, () => {
    console.log(`the server is now running on ${PORT}`)
})