import '../assets/css/components/ProfileGameCard.css'
import { TOTAL_TIME, GAME_TIME } from '../utils/constants';


export default function ProfileGameCard({name, imageSrc, id}) {

    const totalHours = TOTAL_TIME[id];

    const lastdays = GAME_TIME[id];

    return(
        <div className='profile-game-card-container'>
            <img src={imageSrc}/>
            <div className='profile-card-information'>
                <p className='profile-card-name'>{name}</p>
                <p className='profile-card-time'> {totalHours} hours played</p>
                <p className='profile-card-time'> {lastdays} hours in the last 30 days</p>
            </div>
            

        </div>
    )
}