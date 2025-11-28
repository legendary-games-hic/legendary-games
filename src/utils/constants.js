/**
 * Use this file for global constants that will be used across different pages.
 */

// this is a list of ids for the games in the user's library, it's mostly temporary for dev purposes
export const LIBRARY_GAME_IDS = ['22509', '327239', '34791', '10926', '654'];

// support page items (the support card title, icon and description)
// note that the support icon should be the <i> </i> tag names from here https://icons.getbootstrap.com/
export const SUPPORT_PAGE_ITEMS = [
    {
        icon: 'bi-cart3',
        title: 'Purchase Assistance',
        description: 'Includes refund requests and general payment issues.'
    },
    {
        icon: 'bi-person',
        title: 'Account Help',
        description: 'Support for account retrieval, changing user details or region.'
    },
    {
        icon: 'bi-file-earmark-check',
        title: 'Further Support',
        description: 'Submit a general support ticket. Response takes up to 3 business days.'
    },
    {
        icon: 'bi-question-lg',
        title: 'FAQ',
        description: 'View our frequently asked questions section below.'
    }
]


// this is for the profile game cards
export const PROFILE_GAME_IDS = ['22509', '654', '34791']

export const TOTAL_TIME = {
    '22509': 70,
    '654': 120, 
    '34791': 40
}

export const GAME_TIME = {
    '22509': 13,
    '654': 22,
    '34791': 17
}


// this is for the cart game cards

export const CART_GAME_IDS = ['9767','1007483']

export const GAME_PRICE = {
    '9767': 14.99,
    '1007483': 59.49
}

