import './searchForm.css'

const SearchForm = () => {


    return (
        <form>
            <input type="search" id="search-text" placeholder="Enter city name"></input>
            <button type="submit">Submit</button>
        </form>
    )
}

export default SearchForm;