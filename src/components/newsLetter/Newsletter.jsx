import React from 'react'
import './newsletter.css'
function Newsletter() {
    return (
        <div className='newsletter'>
            <div className="newsletter-parent">
                <div className='newsletter-head'>  <h1>GET EXCLUSIVE OFFERS ON YOUR EMAIL</h1></div>
                <p>Subscribe to our new letter and stay update</p>
                <div className="email-subscribe">
                    <input type="email" placeholder='your email id' />
                    <button>Subscribe</button>
                </div>
                <div className="button-em">
                    <button>Subscribe</button>
                </div>
            </div>
        </div>
    )
}

export default Newsletter
