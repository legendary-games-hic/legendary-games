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