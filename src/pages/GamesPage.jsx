import { useEffect, useState } from 'react';
import axios from 'axios';
import '../assets/css/GamesPage.css';

import wwzCover from '../assets/images/wwz.jpeg';
import gowCover from '../assets/images/gow.jpeg';
import indikaCover from '../assets/images/indika.jpeg';
import re_villageCover from '../assets/images/re_village.jpeg';
import frostpunkCover from '../assets/images/frostpunk.jpeg';
import spCover from '../assets/images/sp2.jpeg';
import cs2Cover from '../assets/images/cs2_new.jpeg';
import acCover from '../assets/images/ac_shadows.jpg';

import  castilloCover from '../assets/images/castillo.jpeg';
import daCover from '../assets/images/da.jpeg';


const games = [
  {
    title: "Assasin's Creed: Shadows",
    price: "59.99 $",
    img: acCover
  },
  {
    title: "Frostpunk 2",
    price: "59.99 $",
    img: frostpunkCover
  },
  {
    title: "Indika",
    price: "59.99 $",
    img: indikaCover
  },
  {
    title: "Resident Evil: Village",
    price: "59.99 $",
    img: re_villageCover
  },
  {
    title: "CS2",
    price: "Free",
    img: cs2Cover
  },
  {
    title: "World War Z",
    price: "19.99 $",
    img: wwzCover
  },
  {
    title: "God Of War: Ragnarok",
    price: "69.99 $",
    img: gowCover
  },
  {
    title: "Marvel's Spider-Man 2",
    price: "69.99 $",
    img: spCover
  }
];

const sales = [
  {
    title: "Dead Island 2",
    desc: "Battle through zombie-infested Los Angeles in this action-packed open-world RPG. Craft weapons, team up in co-op mode, and survive the chaos with style.",
    extra: "Don’t miss your chance to grab it!",
    price: "10.99 $",
    img: daCover
  },
  {
    title: "The Callisto Protocol",
    desc: "Step into a terrifying sci-fi nightmare where every shadow hides danger. Fight to survive, upgrade your gear, and uncover the dark secrets of Jupiter’s deadliest prison.",
    extra: "Dare to play — now at a killer price!",
    price: "7.49 $",
    img: castilloCover
  }
];

export default function GamesPage() {
  return (
    <>
        <h4 className='page-title'>Our Best Games</h4>
        <hr className='legendary-blue-color main-hr'/>
        <div className="games-section">
            {games.map((game, index) => (
                <div className="game-card" key={index}>
                <img src={game.img} alt={game.title} />
                <h4>{game.title}</h4>
                <p>{game.price}</p>
                </div>
            ))}
        </div>
        <div className="sale-section">
            {sales.map((item, index) => (
                <div key={index} className="sale-item">
                <img src={item.img} alt={item.title} className="sale-img" />

                <div className="sale-text">
                    <p>{item.desc}</p>
                    <p className="extra">{item.extra}</p>
                    <p className="price">{item.price}</p>
                </div>

                {index !== sales.length - 1 && <hr className="sale-divider" />}
                </div>
            ))}
        </div>
    </>
    
  );
}
