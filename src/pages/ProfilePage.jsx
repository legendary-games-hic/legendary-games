import { useEffect,useState } from "react";
import axios from "axios";
import '../assets/css/ProfilePage.css'
import ProfileGameCard from '../components/ProfileGameCard'
import { PROFILE_GAME_IDS } from "../utils/constants";

import icon1 from '../assets/images/icon1.jpg';
import icon2 from '../assets/images/icon2.jpg';
import icon3 from '../assets/images/icon3.jpg';
import icon4 from '../assets/images/icon4.jpg';
import icon5 from '../assets/images/icon5.jpg';

const APIKEY = import.meta.env.VITE_API_KEY

export default function ProfilePage() {
    const [data, setData] = useState([])

    useEffect(()=>{
        let cancelled = false;
        (async () => {
            try{
                const gameData = [];

                for(const id of PROFILE_GAME_IDS) {
                    const {data} = await axios.get(`https://api.rawg.io/api/games/${id}`,
                        {params: {key: `${APIKEY}`}}
                    );

                    gameData.push({id: id, name: data['name'], image: data['background_image']})
                }

                if(!cancelled) {
                    setData(gameData);
                }
            }
            catch (e) {
                if (!cancelled) console.log(`error occured ${e}`);
            }
        })();
        return () => {cancelled = true; };
    }, [])
    
    return (
        <div className="profile-page-container">
            <div className=" profile-main-container">
                <div className=" first-container">
                    <div className="icon-image">
                        <img src= {icon1}></img>
                    </div>
                    <div className="name-descrip">
                        <h3>GiovanniGamer01</h3>
                        <p>Hi! I like cats</p>
                    </div>
                    <div className="buttons-container">
                        <button>
                            Edit profile
                        </button>
                    </div>
                </div>
                <div className=" second-container">
                    <div className=" games-container">
                        <div className="upper-box">
                            <h3>Recent games</h3>
                            <p> 91 hours past 30 days</p>
                        </div>
                        
                        <div className="game-list">
                            {data.map((game,index)  => (
                                <div key={game['name']}>
                                    <ProfileGameCard id={game['id']} imageSrc={game['image']} name={game['name']} />
                                   
                                    {index < data.length - 1 && (
                                        <hr className="game-separator" />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="information-container">
                        <h4>Information</h4>
                        <p>Male</p>
                        <p>Costa Rica</p>
                        <p>Games     59</p>
                        <p>Achievements 492</p>
                        <div className="friends-container">
                            <h4>Friends</h4>
                            <div className="friend-entry">
                                <img className="friend-icon" src={icon2} alt=""/>
                                <p>Dovlet</p>
                            </div>
                            <div className="friend-entry">
                                <img className="friend-icon" src={icon3} alt=""/>
                                <p>Nathan</p>
                            </div>
                            <div className="friend-entry">
                                <img className="friend-icon" src={icon4} alt=""/>
                                <p>Joao</p>
                            </div>
                            <div className="friend-entry">
                                <img className="friend-icon" src={icon5} alt=""/>
                                <p>Lucas</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}