import { useParams, Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import './AlbumDetails.scss';

const AlbumDetails = () => {
    const { albumId } = useParams();

    let { state } = useLocation();
    console.log(state);

    const url = `https://api.spotify.com/v1/albums/${albumId}/tracks`
    const token = localStorage.getItem('access_token');

    const [tracks, setTracks] = useState([]);

    useEffect(() => {
        (async () => {

            try {
                const albumTracksReq = await fetch(url, {
                    headers: {
                        Authorization: 'Bearer ' + token
                    }
                });
                const albumTracks = await albumTracksReq.json();
                setTracks(prev => albumTracks.items)
            } catch (err) {
                console.log(err);
            }
        })()
    }, [])

    return (
        <div className="details__container">
            <Link to='/' className="back__button"><span className="material-symbols-outlined">arrow_back</span>Back to homepage</Link>
            <div className="album__details">
                <span className="album__details__label">Album name: </span><p>{state.name}</p>
                <span className="album__details__label">Release date: </span><p>{state.release_date}</p>
                <span className="album__details__label">Total tracks: </span><p>{state.total_tracks}</p>
                <span className="album__details__label">Artists: </span><p>{state.artists[0].name}</p>
            </div>
            <h1 className="track__list__container__heading">Tracklist:</h1>
            <ul className="track__list__container">
                {tracks.length > 0 && tracks.map((track, index) => (
                    <li key={track.id} className="track__list--item">{index + 1}. {track.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default AlbumDetails;