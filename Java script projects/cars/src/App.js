import './App.css';
import React from 'react';
import Car from './Components/Car.jsx';
import carData from './CarsData.js';


function App() {
  
  const [cars, setCars] = React.useState()

  const carElement = carData.map((car) => {
    return (
      <Car Image={car.Image}  Name={car.Name} Price={car.Price} />
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
