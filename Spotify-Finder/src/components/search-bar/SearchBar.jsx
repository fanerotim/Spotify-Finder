import { useEffect, useState } from 'react';
import './SearchBar.scss'
import useAuth from '../../hooks/useAuth';
import Card from '../card/Card';

const SearchBar = () => {

    const [token, setToken] = useState(null)
    const { getAccessToken } = useAuth();
    const [input, setInput] = useState('');
    const [albums, setAlbums] = useState([]);

    // complete the api call for certain artist/ album 
    useEffect(() => {
        (async () => {
            const curToken = await getAccessToken();
            setToken(() => curToken.access_token)
   
            
        })()
    }, [])

    const handleChange = async (e) => {
        setInput(() => e.target.value)

        const search = await fetch(`https://api.spotify.com/v1/search?q=${input}&type=album`, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })

        const searchResult = await search.json();
        console.log('search result', searchResult)
        
        if (searchResult.albums.items) {
            setAlbums(prev => searchResult.albums.items)
        }
    }

    return (
        <div className='search__container'>
            <h1 className='search__container--logo'>Spotify Finder</h1>
            <input
                type="text"
                placeholder='Search artist or album'
                className="search__container--input"
                value={input}
                onChange={(e) => handleChange(e)}
            />
            {albums.length > 0 && albums.map(album => (
                <Card album={album}/>
            ))}
        </div>
    )
}

export default SearchBar;