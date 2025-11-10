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
                <img src={data['background_image']} className='main-featured-game-image'/>
            </div>
            <div>
                other content
            </div>
        </div>
    )
}
