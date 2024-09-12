import './SearchBar.scss'

const SearchBar = () => {
    return (
        <>
            <input 
            type="text" 
            placeholder='Search artist or album'
            className="search__input"
            />
        </>
    )
}

export default SearchBar;