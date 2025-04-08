export default function carFlahcard(props) {
    return(
        <div className="carFlashcard">
            <img src={props.Image} alt={props.Name} />
            <h2>{props.Name}</h2>
            <br />
            <p>Price: {props.Price}</p>
            <p>Engine: {props.Engine}</p>
            <p>Horsepower: {props.Horsepower}</p>
            <p>Torque: {props.Torque}</p>
            <p>Top Speed: {props.TopSpeed}</p>
            <p>0-60 mph: {props.to60} seconds</p>
            <p>Weight: {props.Weight} lbs</p>
            <p>Fuel Economy: {props.FuelEconomy} mpg</p>
            <p>Transmission: {props.Transmission}</p>
            <p>Drivetrain: {props.Drivetrin}</p>
            <p>Description: {props.Description}</p>
        </div>
    )
}