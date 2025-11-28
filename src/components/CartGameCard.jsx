import '../assets/css/components/CartGameCard.css'
import { GAME_PRICE } from '../utils/constants';


export default function CartGameCard({name, imageSrc, id}) {

    const price = GAME_PRICE[id];

    return(
        <div className='cart-game-card-container'>
            <img src={imageSrc}/>
            <div className='cart-card-information'>
                <p className='cart-card-name'>{name}</p>
                <p className='cart-card-price'> ${price}</p>
                <p className='cart-card-remove'>remove</p>
            </div>
            

        </div>
    )
}