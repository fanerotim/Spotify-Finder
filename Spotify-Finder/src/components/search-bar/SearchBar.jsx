import { useEffect, useState } from 'react';
import './SearchBar.scss'
import useAuth from '../../hooks/useAuth';

const SearchBar = () => {

    const [token, setToken] = useState(null)
    const { getAccessToken } = useAuth();

    const [input, setInput] = useState('');

    return (
        <div className='search__container'>
            <h1 className='search__container--logo'>Spotify Finder</h1>
            <input
                type="text"
                placeholder='Search artist or album'
                className="search__container--input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
        </div>
    )
}

export default SearchBar;