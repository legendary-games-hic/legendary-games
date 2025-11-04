import {React, useEffect, useState} from 'react'
import axios from 'axios'

const APIKEY = import.meta.env.VITE_API_KEY

export default function MainPage() {
    const [data, setData] = useState('loading...')

    useEffect(()=>{
        let cancelled = false;
        (async () => {
        try {
            const { data } = await axios.get(`https://api.rawg.io/api/games/64`,
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
        <>
            <button className='btn-success'>This is the main page, here is the image and raw JSON data for game with id <b>64</b>, name fetched from rawg api: <b>{data['name']}</b></button>
            <img src={data['background_image']}>
            </img>
            <p>{JSON.stringify(data)}</p>
        </>
    )
}
