import { useState } from 'react'
import '../assets/css/components/DetailedGameCard.css'

export default function DetailedGameCard({ id, name, imageSrc, releaseDate, developer, purchaseDate, isFavorite }) {
	const [isFavoriteState, setIsFavoriteState] = useState(isFavorite)

	function handleFavoriteClick() {
		console.log('click')
		console.log(isFavoriteState)
		let favorites = JSON.parse(localStorage.getItem('favorites'))

		if(isFavoriteState){
			favorites = favorites.filter(favid => favid != id)
			setIsFavoriteState(false);
		}
		else{
			favorites.push(id)
			setIsFavoriteState(true);
		}
		localStorage.setItem("favorites", JSON.stringify(favorites));
	}

	return (
		<div className="detailed-game-card-container">
			<img src={imageSrc} />
			<div className='detailed-game-card-overlay'>
				<p className='detailed-game-card-details detailed-game-card-gamename'>{name}</p>
				<p className='detailed-game-card-details detailed-game-card-descriptors'>By {developer}</p>
				<p className='detailed-game-card-details detailed-game-card-descriptors'>Released on {releaseDate}</p>
				<p className='detailed-game-card-details detailed-game-card-descriptors'>Added to library on: {purchaseDate === undefined ? 'unavailable' : purchaseDate}</p>
				<button className='detailed-game-card-details detailed-game-favorite-button' onClick={handleFavoriteClick}>
					{!isFavoriteState ? "Favorite" : "Unfavorite"}
				</button>

			</div>
			{isFavoriteState ? <i class="bi bi-star-fill detailed-game-favorite-star fs-2"></i> : <></>}
		</div>
	)
}
