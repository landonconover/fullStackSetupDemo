const express = require('express')
const mongoose = require('mongoose');
//Todo: Secure the password

const password = encodeURIComponent('Your Password here')
const uri = `<your URI here to connect>`;

mongoose.connect(uri);

const app = express()
const port = 3000

//parse json and form data!
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



const Car = mongoose.model('Car', {
    name: String,
    color: String
 });

 

//serve static files from the public folder
app.use(express.static('public'))

//get the list of cars from our api
app.get('/api/getCars', async (req, res) => {

    //go to the DB and get the cars!
    const myCars = await Car.find()

    res.send(myCars)
})

app.post('/api/addCar', async (req, res) => {
    console.log(req.body.name)
    //add the car to the database!
    const newCar = new Car({
        name: req.body.name,
        color: req.body.color
    })
    
    const savedCar = await newCar.save();

    res.send(savedCar)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})