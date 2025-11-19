import React from 'react'

import '../assets/css/SupportPage.css'
import SupportCard from '../components/SupportCard'

import { SUPPORT_PAGE_ITEMS } from '../utils/constants'

export default function SupportPage() {
  return (
    <div className='d-flex flex-column align-items-center'>
      <h3 className='support-title'>Legendary Games Support Services</h3>
      <hr className='legendary-blue-color support-title-hr'></hr>

      <div className='d-flex flex-row flex-wrap gap-4 align-items-center justify-content-center'>
        {SUPPORT_PAGE_ITEMS.map((si) => {
          return <SupportCard iconName={si.icon} title={si.title} description={si.description} />
        })}
      </div>
    </div>
  )
}
