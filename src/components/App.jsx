import '../styles/App.css'
import forecastData from '../data/data.js'

import SearchForm from './SearchForm'
import Forecast from './Forecast'

function App() {

  return (
    <div id="mainApp">
      <header>
        <h1>Weather Report</h1>
        <SearchForm></SearchForm>
      </header>
      <main>
        <Forecast data={forecastData}></Forecast>
      </main>
    </div>
  )
}

export default App
