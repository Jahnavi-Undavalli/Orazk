import React from 'react';
import './index.css'; 
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="contact-info">
          <h2 className='contact'>Contact Info</h2>
           <p>Phone: (123) 456-7890</p>
          <p>Email: info@example.com</p>
        </div>
        <div className="social-links">
          <h2 className='Social Media'>Social Media</h2>
          <div>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className='icons'/>
              Instagram
            </a>
          </div>
          <div>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className='icons' />
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
