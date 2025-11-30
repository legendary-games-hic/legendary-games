import React from 'react'

import '../assets/css/components/SmallGameCard.css'
import LoadingGif from '../assets/gifs/loading.gif'

export default function SmallGameCard({name, imageSrc}) {
  return (
    <div className="small-game-card-container">
        {imageSrc != undefined ? <img src={imageSrc}/> : <img src={LoadingGif}/>}
        <div className='small-game-card-overlay'>
            <p className='small-game-card-name'>{name}</p>
        </div>
    </div>
  )
}
