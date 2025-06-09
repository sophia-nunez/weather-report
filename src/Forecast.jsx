import Day from "./Day";
import './forecast.css';

const Forecast = () => {

    const data = [{date: "Mon", temperature: "72", weather: "Sunny", sunrise: "6:12am", sunset: "7:19pm"},
        {date: "Tue", temperature: 68, weather: "Cloudy", sunrise: "6:14am", sunset: "7:21pm"},
        {date: "Wed", temperature: 76, weather: "Rainy", sunrise: "6:29am", sunset: "7:29pm"},
        {date: "Thu", temperature: 59, weather: "Sunny", sunrise: "6:35am", sunset: "7:32pm"},
        {date: "Fri", temperature: 78, weather: "Windy", sunrise: "6:37am", sunset: "7:33pm"}
    ]

    return (
        <div className="forecastCard">
            {data.map((day, index) => {
                return <Day key={index} date={day.date} temperature={day.temperature} weather={day.weather} sunrise={day.sunrise} sunset={day.sunset}></Day>
            })}
        </div>
    )
}

export default Forecast;