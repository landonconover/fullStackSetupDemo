const carsUL = document.querySelector('#cars')
const newCarTextBox = document.querySelector('#newCar')
const newCarBtn = document.querySelector('#theButton')

function displayCars(cars){
    carsUL.innerHTML = ''
    cars.forEach(car => {
        const carLI = document.createElement('li')
        carLI.innerHTML = car.name
        carsUL.appendChild(carLI)
    });
}

fetch('/api/getCars')
    .then(res => res.json())
    .then(data => {
        displayCars(data)
    })


newCarBtn.addEventListener('click', () => {
    const carName = newCarTextBox.value
    
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const response = fetch("/api/addCar", {
    method: "POST",
    body: JSON.stringify({ name: carName }),
    headers: myHeaders,
    })
    .then(res => res.json())
    .then(data => {
        displayCars(data)
    })
})