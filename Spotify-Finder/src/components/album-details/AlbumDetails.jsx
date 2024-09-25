import { useParams } from "react-router-dom";

const AlbumDetails = () => {

    const {albumId} = useParams();

    return (
        <h1>Hello</h1>
    )
}

export default AlbumDetails;