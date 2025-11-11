import '../assets/css/components/DetailedGameCard.css'

export default function DetailedGameCard({name, imageSrc, releaseDate, developer, purchaseDate, isFavorite}) {
  return (
    <div className="detailed-game-card-container">
        <img src={imageSrc}/>
        <div className='detailed-game-card-overlay'>
            <p className='detailed-game-card-details'>{name}</p>
            <p className='detailed-game-card-details'>{releaseDate}</p>
            <p className='detailed-game-card-details'>{developer}</p>
            <p className='detailed-game-card-details'>Purchase date: {purchaseDate === undefined ? 'unavailable': purchaseDate}</p>
        </div>
    </div>
  )
}
