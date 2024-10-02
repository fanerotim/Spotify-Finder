import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import './AlbumDetails.scss';

const AlbumDetails = (props) => {
    const { albumId } = useParams();

    console.log(props)
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
                // console.log(albumTracks)
                setTracks(prev => albumTracks.items)
            } catch (err) {
                console.log(err);
            }
        })()
    }, [])

    return (
        <div className="details__container">
            <Link to='/' className="back__button"><span className="material-symbols-outlined">arrow_back</span>Back to homepage</Link>
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