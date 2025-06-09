function kelvinToFahrenheit(kelvinTemp) {
    const temp =  (1.8 * (kelvinTemp - 273) + 32);
    return temp.toFixed(2);
}

function formatDate(ISODate) {
    const date = new Date(ISODate);
    const options = {
        weekday: "short",
        month: "short",
        day: "numeric"
    };
    
    return date.toLocaleDateString("en-US", options);
}

function parseForecastData(list) {
    let parsedData = []

    list.forEach((data) => {
        // get all converted values
        const date = formatDate(data.dt_txt);
        const temperature = kelvinToFahrenheit(data.main.temp);
        const weather = data.weather[0].main;
        const description = data.weather[0].description;
        const icon = data.weather[0].icon;

        // make new object
        const newData = {
            date,
            temperature,
            weather,
            description,
            icon
        }

        // push to array
        parsedData.push(newData);
    })

    return parsedData;
}

export { parseForecastData };