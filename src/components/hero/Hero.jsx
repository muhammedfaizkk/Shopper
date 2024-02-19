import React from 'react'
import './hero.css'
import hand_icon from '../../assets/hand_icon.png'
import arrow_icon from '../../assets/arrow.png'
import hero_img from '../../assets/hero_image.png'


function Hero() {
    return (
        <div className='hero'>
            <div className="hero-parent">
                <div className="hero-left">
                    <h2>NEW ARRIVALS ONLY</h2>

                    <div className="hero-hand-icon">
                        <div>
                            <p>New</p>
                            <img src={hand_icon} alt="" />
                        </div>
                        <p>Collections</p>
                        <p>For everyone</p>
                    </div>

                    <div className="herolatest-btn">
                        <div className="latest-collections">
                            Lateast Collections
                        </div>
                        <img className='arrow_icon' src={arrow_icon} alt="" />
                    </div>
                </div>


                <div className="hero-right">
                    <img src={hero_img} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Hero
