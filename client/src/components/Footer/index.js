import React from 'react'
import './Footer.scss'

const Footer = () => {
  return (
    <div className="footer-container">
        <ul className="navs">
          <li><i className="fab fa-facebook-f"></i>Facebook</li>
          <li><i className="fab fa-youtube"></i>Youtube</li>
          <li><span className="title">metacritic</span></li>
          <li><i className="fab fa-twitter"></i>Twitter</li>
          <li><i className="fab fa-instagram"></i>Instagram</li>
        </ul>
    </div>
  )
}

export default Footer;