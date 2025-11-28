import { useEffect,useState } from "react";
import axios from "axios";
import '../assets/css/CartPage.css';
import CartGameCard from '../components/CartGameCard';
import { CART_GAME_IDS } from "../utils/constants";

const APIKEY = import.meta.env.VITE_API_KEY

export default function CartPage() {
    const [data, setData] = useState([])
    const [payment, setPayment] = useState('');

    useEffect(() => {
        let cancelled = false;
        (async () => {
            try{
                const gameData = [];

                for(const id of CART_GAME_IDS){
                    const {data} = await axios.get(`https://api.rawg.io/api/games/${id}`,
                        {params: {key: `${APIKEY}`}}
                    );

                    gameData.push({id: id, name: data['name'], image: data['background_image']})
                }

                if(!cancelled) {
                    setData(gameData);
                }
            }
            catch (e){
                if (!cancelled) console.log(`error occured ${e}`);
            }
        })();
        return () => {cancelled = true; };
    }, [])
    
    const PaymentChange = (event) => {
        setPayment(event.target.value);
    };

    const BuyClick = () => {
        if (!payment) {
            alert("Please select a payment method.");
        } else {
            const confirmation = confirm(`Confirm purchase with ${payment}?`);
            
            if (confirmation) {
                alert("Purchase confirmed!!");
            } else {
                alert("Purchase cancelled.");
            }
        }
    };

    return (
        <div className="cart-page-container">
            <div className="cart-game-prices">
                <div className="game-list">
                    {data.map((game,index) => (
                        <div key={game['name']}>
                            <CartGameCard id ={game['id']} imageSrc={game['image']} name={game['name']}/>

                            {index < data.length - 1 && ( <hr className="game-separator" />)}
                        </div>
                    ))}
                </div>
            </div>

            <div className="cart-payment-box">
                <div className="payment-method">
                    <h3>
                        Total: $74,98
                    </h3>
                    <div className="botton-part">
                            <select className="payment-select-box" value={payment} onChange={PaymentChange}>
                                <option value="" disabled>Select payment</option>
                                <option value="PayPal">PayPal</option>
                                <option value="Credit Card">Credit Card</option>
                                <option value="Pix">Pix</option>
                                <option value="Bitcoin">Bitcoin</option>
                            </select>
                        
                        <button className="button-buy" onClick={BuyClick}>Buy</button>
                    </div>
                </div>
            </div>
        </div>
    )
}