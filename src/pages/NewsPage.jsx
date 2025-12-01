import {useEffect, useState} from 'react'
import axios from 'axios'


import '../assets/css/NewsPage.css'

import cs2Cover from '../assets/images/cs2.png'
import bf6Cover from '../assets/images/bf6.png'
import horror_games from '../assets/images/horror-games.png'
import gta6Cover from '../assets/images/gta6.jpg'
import fc26Cover from '../assets/images/fc26.jpeg'

const APIKEY = import.meta.env.VITE_API_KEY

export default function NewsPage(){
    return(
        <div>
            <div>
                <h4 className='page-title'>Legendary Games News</h4>
                <hr className='legendary-blue-color main-hr'/>
                <div class="games-section">
                    <div class="game-card">
                        <img src={cs2Cover} alt="CS2 Update" className='news-img-l'/>
                        <p class="game-title">VALVE announce new big update for CS2!</p>
                        <button class="learn-btn">Learn more</button>
                    </div>

                    <div class="game-card">
                        <img src={bf6Cover} alt="Battlefield 6" className='news-img-l'/>
                        <p class="game-title">Brand new Battlefield 6 is already out!</p>
                        <button class="learn-btn">Learn more</button>
                    </div>
                </div>
            </div>
            <div className="news-section">
            <hr />
            <div className="news-item">
                <img src={horror_games} alt="Horror Games" className="news-img" />

                <div className="news-text">
                    <p>Best online horrors to play with your friends!</p>
                    <p>Legendary Games Store has high discounts for these games, tap to learn more!</p>
                    <p>Deals are available until November 27.</p>
                </div>
            </div>

            <hr />

            <div className="news-item">
                <img src={fc26Cover} alt="EA FC 26" className="news-img" />

                <div className="news-text">
                    <p>EA Sports FC 26 introduces dual gameplay presets — ‘Authentic’ for realism and ‘Competitive’ for sharper online control.</p>
                    <p>The new feature offers players more control over how the game feels and plays.</p>
                </div>
            </div>

            <hr />

            <div className="news-item">
                <img src={gta6Cover} alt="GTA 6" className="news-img" />

                <div className="news-text">
                    <p>GTA 6 is set to launch on May 26, 2026, exclusively for PS5 and Xbox Series X|S, following a delay.</p>
                    <p>Rockstar says the latest trailer is made from in-game footage, blurring the line between cinematic cutscenes and gameplay.</p>
                </div>
            </div>

        </div>

        </div>
    )
}