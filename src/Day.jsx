import PropTypes from "prop-types"
import SunMoon from "./SunMoon";
import './day.css'


const Day = ({date, temperature, weather, sunrise, sunset}) => {
    
    return (
        <section className={temperature < 60 ? "dayCard cold" : "dayCard hot"}>
            <h3>{date}</h3>
            <p className="weather">{weather}</p>
            <p className="temp">{temperature}°</p>
            <SunMoon sunrise={sunrise} sunset={sunset}></SunMoon>
        </section>
    )
};

Day.propTypes = {
    date: PropTypes.string.isRequired,
    temperature: PropTypes.number.isRequired,
    weather: PropTypes.string.isRequired,
    sunrise: PropTypes.string.isRequired,
    sunset: PropTypes.string.isRequired
};

export default Day;