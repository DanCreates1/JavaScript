import './App.css';
import React from 'react';
import Car from './Components/Car.jsx';
import carData from './CarsData.js';


function App() {
  
  const [cars, setCars] = React.useState()

  const carElement = carData.map((car) => {
    return (
      <Car 
            country={car.country}
            brand={car.brand}
            Img={car.Img}
            name={car.name}
            price={car.price} 
            engine={car.engine} 
            horsepower={car.horsepower}
            topSpeed={car.topSpeed} 
            torque={car.torque} 
            to100={car.to100}
            weight={car.weight}
            fuelEconomy={car.fuelEconomy}
            transmission={car.transmission}
            drivereain={car.drivetrin}
            description={car.description}  />
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
