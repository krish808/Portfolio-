import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa';
import {BsInstagram,BsTwitter} from 'react-icons/bs';

const Footer = () => {
  return (
    <footer>
      <a href="#home" className='footer__logo'>LOGO</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experiance">Experience</a></li>
        <li><a href="#services">Service</a></li>
        <li><a href="#portfolio">Protfolio</a></li>
        <li><a href="#testimonial">Testimonial</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com" target="blank"><FaFacebookF/></a>
        <a href="https://instagram.com"  target="blank"><BsInstagram/></a>
        <a href="https://twitter.com" target="blank"><BsTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>Copyright 2025</small>
      </div>
    </footer>       
  )
}

export default Footer