import './App.css';
import React from 'react';
import carFlashCar from './Components/carFlashCard';


function App() {
  
  const [cars, setCars] = React.useState()

  cars.map((car) => {
    return (
      <div>
        <img src={car.Image} alt="Car" />
        <h2>{car.Name}</h2>
        <p>{car.Description}</p>
        <p>Price: {car.Price}</p>
        <p>Engine: {car.Engine}</p>
        <p>Horsepower: {car.Horsepower}</p>
        <p>Torque: {car.Torque}</p>
        <p>Top Speed: {car.TopSpeed}</p>
        <p>0-60 mph: {car.to60} seconds</p>
        <p>Weight: {car.Weight} lbs</p>
        <p>Fuel Economy: {car.FuelEconomy} mpg</p>
        <p>Transmission: {car.Transmission}</p>
        <p>Drivetrain: {car.Drivetrin}</p>
      </div>
    )
  }
  )
  
  return (
    <carFlashCar/>
  );
}

export default App;
