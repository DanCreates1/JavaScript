import './App.css';
import React from 'react';
import Car from './Components/Car.jsx';
import carData from './CarsData.js';


function App() {
  
  const [cars, setCars] = React.useState()

  const carElement = carData.map((car) => {
    return (
      <Car Image={car.Image}
            Name={car.Name}
            Price={car.Price} 
            Engine={car.Engine} 
            Horesepower={car.Horsepower}
            Torque={car.Torque} 
            to60={car.to60}
            Weight={car.Weight}
            FuelEconomy={car.FuelEconomy}
            Transmission={car.Transmission}
            Drivereain={car.Drivetrin}
            Description={car.Description}  />
    )
  }
  )
  
  return (
    <main>
      {carElement}
    </main>
  );
}

export default App;
