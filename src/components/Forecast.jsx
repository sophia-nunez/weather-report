import Day from "./Day";
import '../styles/forecast.css';
import { parseForecastData } from "../utils/utils";

const Forecast = (props) => {

    const parsedData = parseForecastData(props.data.list);

    return (
        <div className="forecastCard">
            {parsedData.map((day) => {
                return <Day key={day.date} date={day.date} temperature={day.temperature} weather={day.weather} icon={day.icon}></Day>
            })}
        </div>
    )
}

export default Forecast;