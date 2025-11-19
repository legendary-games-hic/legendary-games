import React from 'react'

import '../assets/css/SupportPage.css'
import SupportCard from '../components/SupportCard'

import { SUPPORT_PAGE_ITEMS } from '../utils/constants'

export default function SupportPage() {
	return (
		<div className='d-flex flex-column align-items-center'>
			<h3 className='support-title'>Legendary Games Support Services</h3>
			<hr className='legendary-blue-color support-title-hr'></hr>

			<div className='d-flex flex-row flex-wrap gap-4 align-items-center justify-content-center'
				style={{marginBottom: '10vh'}}>
				{SUPPORT_PAGE_ITEMS.map((si) => {
					return <SupportCard iconName={si.icon} title={si.title} description={si.description} />
				})}
			</div>

			<div className='support-faq-container'>
				<h5 className=''>Frequency Asked Question</h5>
				<hr className='legendary-blue-color support-faq-hr'></hr>

				{/* We probably wanna make this its own component if we want to put more faq questions */}
				<div>
					<div className='d-flex flex-row align-items-center gap-4'>
						<h1 className='big-q legendary-green-color'>Q</h1>
						<p className='support-faq-question'>Another user is bothering me, what can I do about it?</p>
					</div>
					<p className='support-faq-answer'>If another user is bothering you, you can go into his profile, under the more options section select
						"block communication". This will prevent the user from reaching you. Additionally, you will not see any content created
						by this user on the legendary games platform (games, reviews, news, community posts or comments).
					</p>
					<p className='support-faq-answer'>
						If the user is aggressive or threating, please submit a support ticket under "More Help" so Legendary Games staff can review the
						incident.
					</p>
				</div>
				<div>
					<div className='d-flex flex-row align-items-center gap-4'>
						<h1 className='big-q legendary-green-color'>Q</h1>
						<p className='support-faq-question'>My child uses my account, is there a way to block 18+ games?</p>
					</div>
					<p className='support-faq-answer'>Unfortunately Legendary Games does not currently support blocking games based on content.
					</p>
				</div>
				<div>
					<div className='d-flex flex-row align-items-center gap-4'>
						<h1 className='big-q legendary-green-color'>Q</h1>
						<p className='support-faq-question'>What payment methods does Legendary Games Support</p>
					</div>
					<p className='support-faq-answer'>Legendary Games currently support Paypal, Debit and Credit cards. If you would like,
						you can also mail a check to our PO box and our Team can add funds to your account.
					</p>
				</div>
			</div>
		</div>
	)
}
