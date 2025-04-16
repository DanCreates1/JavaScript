export default function Car(props) {
    return(
        <div class="car-card">
        <img src={props.Image}  class="car-image"/>
        <div class="car-details">
        <h2>{props.Name}</h2>
        <p><strong>Price:</strong> {props.Price}</p>
        <p><strong>Engine:</strong> {props.Engine}</p>
        <p><strong>Horsepower:</strong> {props.Horsepower}</p>
        <p><strong>Torque:</strong> {props.Torque}</p>
        <p><strong>Top Speed:</strong>{props.TopSpeed}</p>
        <p><strong>0-60 mph:</strong>{props.to60}</p>
        <p><strong>Weight:</strong>{props.Weight}</p>
        <p><strong>Fuel Economy:</strong> {props.FuelEconomy}</p>
        <p><strong>Transmission:</strong> {props.Transmission}</p>
        <p><strong>Drivetrain:</strong> {props.Drivetrin}</p>
        <p><strong>Description:</strong> {props.Description}</p>
        </div>
        </div>
    )
}