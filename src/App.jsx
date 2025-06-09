import './App.css'

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
        <Forecast></Forecast>
      </main>
    </div>
  )
}

export default App
