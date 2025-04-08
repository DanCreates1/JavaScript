import './App.css';
import React from 'react';
import carFlashCar from './Components/carFlashCard';


function App() {
  
  const [cars, setCars] = React.useState()

  const carElement = cars.map((car) => {
    return (
      <carFlashCar />
    )
  }
  )
  
  return (
    <main>
      {}
    </main>
  );
}

export default App;
