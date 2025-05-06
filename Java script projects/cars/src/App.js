import './App.css';
import React from 'react';
import Car from './Components/Car.jsx';
import carData from './CarsData.js';

function App() {
  const [search, setSearch] = React.useState("");

  const filteredCars = carData.filter((car) => {
  return (
    car.name?.toLowerCase().includes(search.toLowerCase()) ||
    car.brand?.toLowerCase().includes(search.toLowerCase()) ||
    car.country?.toLowerCase().includes(search.toLowerCase())
  );
});

  const carElement = filteredCars.map((car) => (
    <Car 
      key={car.key}
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
      description={car.description}
      video={car.video}
    />
  ));

  return (
    <>
      <div className='input-container'>
        <input 
          className='search-bar'
          type="text"
          placeholder="Search for a car"
          id="search-bar"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <main>
        {carElement.length > 0 ? carElement : <p>No matching cars found.</p>}
      </main>
    </>
  );
}

export default App;
