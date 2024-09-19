import { useEffect, useState } from 'react';
import './SearchBar.scss'
import useAuth from '../../hooks/useAuth';

const SearchBar = () => {

    const [token, setToken] = useState(null)
    const { getAccessToken } = useAuth();
    const [input, setInput] = useState('');

    // complete the api call for certain artist/ album 
    useEffect(() => {
        (async () => {
            const curToken = await getAccessToken();
            setToken(() => curToken.access_token)
   
            const search = await fetch('https://api.spotify.com/v1/search?q=janisjoplin&type=album', {
                headers: {
                    Authorization: 'Bearer ' + curToken.access_token
                }
            })

            const searchResult = await search.json();
            console.log(searchResult)
        })()
    }, [])

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