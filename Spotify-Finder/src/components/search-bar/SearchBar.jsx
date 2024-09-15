import './SearchBar.scss'

const SearchBar = () => {
    return (
        <div className='search__container'>
            <h1 className='search__container--logo'>Spotify Finder</h1>
            <input
                type="text"
                placeholder='Search artist or album'
                className="search__container--input"
            />
        </div>
    )
}

export default SearchBar;