import { nanoid } from 'nanoid';
import React from 'react';

export default function Car(props) {
    const [isShown, setIsShown] = React.useState(false);
    function toggleShow(){
        setIsShown(!isShown);
    }
    return(
        <>
        <div className="car-card">
        <img src={props.Img}  className="car-image"/>           
        <div className="car-details">
        <h2>{props.name}</h2>
        <p><strong>Brand:</strong> {props.brand}</p>
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
        <iframe
        width="350"
        height="245"
        src={props.video}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        ></iframe>

        </>}

        </div>
        </div>
        </>
    )
}