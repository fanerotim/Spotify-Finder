import './Card.scss'

const Card = ({ albums }) => {

    return (
        <div className='card__container'>
            {albums.map(album => (
                <div className='card__wrapper'>
                    <section key={album.id} className='image__wrapper'>
                        <img className='image__wrapper__img' src={album.images[1].url} alt="" />
                    </section>

                    <section className='text__wrapper'>
                        <p className='text__wrapper__label'>Album</p>
                        <h1 className='text__wrapper__text'>{album.name}</h1>
                    </section>
                </div>
            ))}

        </div>
    )
}

export default Card;
