import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import './AlbumDetails.scss';

const AlbumDetails = () => {
    const { albumId } = useParams();

    const url = `https://api.spotify.com/v1/albums/${albumId}/tracks`
    const token = localStorage.getItem('access_token');

    const [tracks, setTracks] = useState([]);

    useEffect(() => {
        (async () => {
            const albumTracksReq = await fetch(url, {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            });
            const albumTracks = await albumTracksReq.json();
            setTracks(prev => albumTracks.items)
        })()
    }, [])
    
    console.log(tracks)


    return (
        <>
            <Link to='/' className="back__button">Back to homepage</Link>
            <h1 className="track__list__container__heading">Tracklist:</h1>
            <ul className="track__list__container">
            {tracks.length > 0 && tracks.map((track, index) => (
                <li className="track__list--item">{index + 1}. {track.name}</li>
            ))}
            </ul>
        </>
    )
}

export default AlbumDetails;