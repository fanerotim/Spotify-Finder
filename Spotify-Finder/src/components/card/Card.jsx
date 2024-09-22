import './Card.scss'

const Card = ({albums}) => {

    return (
        <div className='card__container'>
            {albums.map(album => (
                <section key={album.id} className='card'>
                    <img className='card__img' src={album.images[1].url} alt="" />
                    {/* <h1>{album.name}</h1> */}
                </section>
            ))}

        </div>
    )
}

export default Card;
