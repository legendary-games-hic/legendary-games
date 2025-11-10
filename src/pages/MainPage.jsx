import {useEffect, useState} from 'react'
import axios from 'axios'

import '../assets/css/MainPage.css'

const APIKEY = import.meta.env.VITE_API_KEY

export default function MainPage() {
    const [data, setData] = useState('loading...')

    useEffect(()=>{
        let cancelled = false;
        (async () => {
        try {
            const { data } = await axios.get(`https://api.rawg.io/api/games/419294`,
                {params: {key: `${APIKEY}`}}
            );
            if (!cancelled) {
                setData(data);
            }
        } catch (e) {
            if (!cancelled) setErr(e);
        }
        })();
        return () => { cancelled = true; };
    }, [])

    return (
        <div className='bg-pages grid-layout-main-page'>
            <div>
                <h5>Featured and Recommended</h5>
                <hr className='legendary-blue-color main-hr'/>
                <div className='main-featured-game-container'>
                    <img src={data['background_image']} className='main-featured-game-image'/>
                    <p className='main-featured-game-description'>Blue Protocol: Star Resonance expands the Blue Protocol universe with a vibrant MMORPG experience. 
                        Create your own hero, team up for strategic raids, or simply relax and have fun with friends fishing,
                        crafting, and endless exploration. Adventure awaits! <i>Start Resonance</i> provides real-time dodging
                     and combo-driven fights alongside gathering and social systems like trading or guilds.</p>
                </div>
            </div>
            <div>
                other content
            </div>
        </div>
    )
}
