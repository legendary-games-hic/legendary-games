import '../assets/css/MainPage.css';
import '../assets/css/AboutPage.css';

import avatarImage from '../assets/images/about-avatar.png'; 

export default function AboutPage() {
  return (
    <div className="bg-pages grid-layout-main-page about-page-container">
      
      {/* LEFT SIDE */}
      <div>
        <section className="about-section">
          <h4 className="legendary-green-color">
            About Legendary Games
          </h4>
          <hr className="legendary-blue-color main-hr" />

          <p className="paragraph-gray-color about-paragraph">
            We bring players together through unforgettable adventures. 
            Legendary Games is built on a love for the worlds we explore, 
            the characters we cheer for, and the shared excitement of the next big win. 
            We celebrate every type of gamer — from tabletop strategists to 
            digital warriors and collectors chasing the rarest finds.
          </p>
        </section>

        <section className="about-section">
          <h4 className="legendary-green-color">
            Our Commitment to Gaming
          </h4>
          <hr className="legendary-blue-color main-hr" />

          <p className="paragraph-gray-color about-paragraph">
            Our passion drives us to discover the best games, curate epic experiences,
            and create a community where everyone belongs. 
            Whether you’re hunting for a new favorite board game,
            grabbing the latest console release, or 
            gearing up for tournament night — we’re here to make every play feel legendary.
          </p>

          <p className="paragraph-gray-color about-paragraph">
            At Legendary Games, fun isn’t just something we sell — it’s what we live for.
          </p>
        </section>
      </div>

      {/* RIGHT SIDE */}
      <div className="main-featured-game-container about-page-image-wrapper">
        <img
          src={avatarImage}
          className="main-featured-game-image"
          alt="About Legendary Games"
        />
      </div>

    </div>
  );
}