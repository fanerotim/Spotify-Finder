import './Card.scss';
import {Link} from 'react-router-dom'

const Card = ({ albums }) => {

    return (
        <div className='card__container'>
            {albums.map(album => (
                <div className='card__wrapper' key={album.id}>
                    <Link to={`albums/${album.id}`}>
                        <section className='image__wrapper'>
                            <img className='image__wrapper__img' src={album.images[1].url} alt="" />
                        </section>

                        <section className='text__wrapper'>
                            <p className='text__wrapper__label'>Album</p>
                            <h1 className='text__wrapper__text'>{album.name}</h1>
                        </section>
                        </Link>
                </div>
            ))}

        </div>
    )
}

export default Card;
