import React from 'react'

import '../assets/css/components/SupportCard.css'

export default function SupportCard({ iconName, title, description }) {
  return (
    <div className='support-card-container'>
        <i class={`bi ${iconName} support-card-icon`}></i>
        <div className='support-card-text-container'>
            <h6 className='support-card-text-title'>{title}</h6>
            <p className='support-card-text-description'>
                {description}
            </p>
        </div>
    </div>
  )
}
