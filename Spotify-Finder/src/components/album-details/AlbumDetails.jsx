import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

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



    return (
        <>
            <h1>Hello, please see the tracks in this album below:</h1>
            <ul>
            {tracks.length > 0 && tracks.map(track => (
                <li>{track.name}</li>
            ))}
            </ul>
        </>
    )
}

export default AlbumDetails;