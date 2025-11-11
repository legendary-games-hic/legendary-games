import React from 'react'

import '../assets/css/components/SmallGameCard.css'

export default function SmallGameCard({name, imageSrc}) {
  return (
    <div className="small-game-card-container">
        <img src={imageSrc}/>
        <div className='small-game-card-overlay'>
            <p className='small-game-card-name'>{name}</p>
        </div>
    </div>
  )
}
