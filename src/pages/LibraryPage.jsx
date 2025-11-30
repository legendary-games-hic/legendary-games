import { useEffect, useState } from 'react'
import axios from 'axios'
import '../assets/css/LibraryPage.css'
import { LIBRARY_GAME_IDS } from '../utils/constants';
import DetailedGameCard from '../components/DetailedGameCard'

const APIKEY = import.meta.env.VITE_API_KEY

export default function Library() {
	const [libraryGames, setLibraryGames] = useState([])

	// get data for every game in LIBRARY_GAME_IDS
	useEffect(() => {
		let cancelled = false;
		(async () => {
			try {
				const gameData = [];

				for (const id of LIBRARY_GAME_IDS) {
					const { data } = await axios.get(`https://api.rawg.io/api/games/${id}`,
						{ params: { key: `${APIKEY}` } }
					);
					
					let isFav = false;
					let favorites = JSON.parse(localStorage.getItem('favorites'))

					if(!favorites) {
						favorites = [];
						localStorage.setItem('favorites', '[]')
					}
					
					if(favorites.includes(id)){
						isFav = true;
					}

					gameData.push({ id: id, name: data['name'], releaseDate: data['released'], developer: data['developers'][0]['name'], image: data['background_image'], isFavorite: isFav})
				}

				if (!cancelled) {
					setLibraryGames(gameData);
				}
			} catch (e) {
				if (!cancelled) console.log(`error occured ${e}`);
			}
		})();
		return () => { cancelled = true; };
	}, [])

	return (
		<div className='bg-pages library-page-container'>
			<div>
				<h4 className='legendary-green-color'>My Games</h4>
				<hr className='legendary-blue-color library-title-hr'></hr>

				<h5>Library Statistics</h5>
				<ul className='library-statistics-list'>
					<li>
						<p>You have <b className='legendary-green-color'>{LIBRARY_GAME_IDS.length}</b> games</p>
					</li>
				</ul>
			</div>
			<div className='d-flex flex-wrap gap-4'>
				{libraryGames.map((game => (
					<DetailedGameCard id={game['id']} imageSrc={game['image']} name={game['name']} releaseDate={game['releaseDate']} developer={game['developer']} key={game['name']} 
					isFavorite={game['isFavorite']}/>
				)))}
			</div>
		</div>
	)
}
