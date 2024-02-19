import React from 'react'
import './footer.css'
import flogo from '../../assets/logo_big.png'
import insta_icon from '../../assets/instagram_icon.png'
import pintester_icon from '../../assets/pintester_icon.png'
import whatsapp_icon from '../../assets/whatsapp_icon.png'

function Footer() {
   return (
      <div className='footer-parent'>
         <hr />
         <div className="footer">
            <div className="footer-logo">
               <img src={flogo} alt="" />
               <p>Shoper</p>
            </div>
            <ul className="footer-links">
               <li>Company</li>
               <li>Products</li>
               <li>Offices</li>
               <li>About</li>
               <li>Contact</li>
               <li>Help</li>
            </ul>
            <div className="footer-social-icon">
               <div className="footer-icon-container">
                  <img src={insta_icon} alt="" />
               </div>
               <div className="footer-icon-container">
                  <img src={pintester_icon} alt="" />
               </div>
               <div className="footer-icon-container">
                  <img src={whatsapp_icon} alt="" />
               </div>
            </div>
            <div className="footer-copy-right">
               <hr />
               <p>Copyright @ 2023 - All Right Reserved</p>
            </div>
         </div>

      </div>
   )
}

export default Footer