import './Card.scss'

const Card = () => {

    const cardCount = [1, 1, 1, 1];

    return (
        <div className='card__container'>
            
            {cardCount.map(card => (
                <section className='card'>
                    <img src="" alt="" />
                    <h1>Album name</h1>
                </section>
            ))}

        </div>

    )
}

export default Card;
