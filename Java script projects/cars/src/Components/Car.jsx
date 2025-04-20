import React from 'react';

export default function Car(props) {
    const [isShown, setIsShown] = React.useState(false);
    function toggleShow(){
        setIsShown(!isShown);
    }
    return(
        <>
        <h1>{props.country}</h1>
        <br/>
        <h3>{props.brand}</h3>
        <div class="car-card">
        <img src={props.Img}  class="car-image"/>           
        <div class="car-details">
        <h2>{props.name}</h2>
        <p><strong>Price:</strong> {props.price}</p>
        <p><strong>Engine:</strong> {props.engine}</p>
        <p><strong>Horsepower:</strong> {props.horsepower}</p>
        <p></p>
        <p><strong>Top Speed:</strong> {props.topSpeed}</p>
        <p><strong>0-100 Km/h:</strong> {props.to100}</p>
        <button onClick={toggleShow}>Show{isShown ? " Less" : " More"}</button>

        {isShown && 
        <>
        <p><strong>Torque:</strong> {props.torque}</p>
        <p><strong>Weight:</strong> {props.weight}</p>
        <p><strong>Fuel Economy:</strong> {props.fuelEconomy}</p>
        <p><strong>Transmission:</strong> {props.transmission}</p>
        <p><strong>Drivetrain:</strong> {props.drivetrin}</p>
        <p><strong>Description:</strong> {props.description}</p>
        <h3>watch a video on {props.name}</h3>
        <iframe width="420" height="345" src={props.video}></iframe>
        </>}

        </div>
        </div>
        </>
    )
}