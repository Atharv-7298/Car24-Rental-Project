import React from 'react';
import './Footer.css';
import whatsapp from '../Assets/whatsapp_icon.png';
import instagram from '../Assets/whatsapp_icon.png';
import facebook from '../Assets/whatsapp_icon.png';

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-left">
          <img src={whatsapp} alt="Rent-A-Car" className="logo" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eius, at cupiditate adipisci deserunt id.</p>
          <div className="social-icons">
            <img src={whatsapp } alt="WhatsApp" />
            <img src={instagram } alt="Instagram" />
            <img src={facebook } alt="Facebook" />
          </div>
        </div>
        <div className="footer-right">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Services</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-center">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1-222-456-7898</li>
            <li>car24@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="copyright">Copyright 2025 @ car24.com - All Right Reserved.</p>
    </div>
  );
};

export default Footer;
