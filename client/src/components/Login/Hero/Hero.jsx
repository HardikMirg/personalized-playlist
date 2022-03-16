import React from 'react'
import './hero.css'

import Scroll from '../../Scroll/Scroll'

import { AUTH_URL } from '../Login'
import playlist from '../../../assets/playlist.svg'

export default function Hero() {
    
    const redirect = () => {
        const redirecting = document.querySelector(".redirecting");
        redirecting.classList.remove("hidden");
    
        setTimeout(() => {
          window.location = AUTH_URL;
        }, 1000);
      };

    return (
        <div className='hero'>
            <div className="heroleft">

                <img src={playlist} className="playlist" alt="" draggable={false} />

            </div>

            <div className="heroright">

                <p className='heading'>Make Your <br/> Own Personalized <br/> <spotify>Spotify</spotify> Playlist Now!</p>

                <div className="buttons">
                    <Scroll
                        to="docs"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                        text="Feedback"
                        className="login-btn"
                    />
                    <Scroll
                        to="redirecting"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                        fx={redirect}
                        text="Log In"
                        className="login-btn"
                    />
                </div>

            </div>
        </div>
    )
}

