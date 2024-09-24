import { useEffect, useState } from 'react';
import './SearchBar.scss'
import useFetchToken from '../../hooks/useFetchToken';
import Card from '../card/Card';
import useFetchSearch from '../../hooks/useFetchSearch';

const SearchBar = () => {

    // set access token
    const [token, setToken] = useState(null)

    // import function that calls Spotify API to request access token
    const { getAccessToken } = useFetchToken();

    // state of user input
    const [input, setInput] = useState('');

    // state for result of user search
    const [albums, setAlbums] = useState([]);

    // on initial render of component get access token and set it in state
    useEffect(() => {
        (async () => {
            const curToken = await getAccessToken();
            setToken(() => curToken.access_token)
        })()
    }, [])

    const { search } = useFetchSearch();

    const handleChange = async (e) => {
        
        setInput(prev => e.target.value);
        
        const url = `https://api.spotify.com/v1/search?q=${input}&type=album`;

        try {
            const result = await search(url, token);

            if (result.albums.items) {
                setAlbums(prev => result.albums.items)
            }
        } catch (err) {
            console.log(err, 'boom')
        }
    }

    return (
        <>
            <div className='search__container'>
                <h1 className='search__container--logo'>Spotify Finder</h1>
                <input
                    type="text"
                    placeholder='Search artist or album'
                    className="search__container--input"
                    value={input}
                    onChange={(e) => handleChange(e)}
                />
            </div>
            {input !== '' && <Card albums={albums} />}
        </>
    )
}

export default SearchBar;