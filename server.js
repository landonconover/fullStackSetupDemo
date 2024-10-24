const express = require('express')
const app = express()
const port = 3000

//parse json and form data!
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let cars = [
    {
        name: 'Civic',
        color: 'blue'
    },
    {
        name: 'Truck',
        color: 'red'
    },
    {
        name: 'Batmobile',
        color: 'black'
    }
]

//serve static files from the public folder
app.use(express.static('public'))

//get the list of cars from our api
app.get('/api/getCars', (req, res) => {
    res.send(cars)
})

app.post('/api/addCar', (req, res) => {
    console.log(req.body.name)
    //add the car to the array!
    const newCar = {
        name: req.body.name,
        color: 'unknown'
    }

    cars.push(newCar)

    res.send(cars)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})