import PropTypes from "prop-types";
import '../styles/sunMoon.css'

const SunMoon = ({sunset, sunrise}) => {


    return (
        <div>
            <div className="sunriseContainer">
                <p>&#9788;</p>
                <p>{sunrise}</p>
            </div>
            <div className="sunsetContainer">
                <p>&#9789;</p>
                <p>{sunset}</p>
            </div>

        </div>
    )
}

SunMoon.propTypes = {
    sunrise: PropTypes.string.isRequired,
    sunset: PropTypes.string.isRequired
}

export default SunMoon;