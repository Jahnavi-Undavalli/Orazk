import React, { useState } from 'react';
import Header from '../Header';
import './index.css';
import { useHistory } from 'react-router-dom';
import Footer from '../Footer';

const Contact = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitted(true);
  };
  const handleReturnToHome = () => {
    // Navigate to the home page
    history.push('/');
  };
  return (
    <>
      <Header />

      <div className="contact-container">
        <div className="contact-form">
          
          {!isSubmitted ? (
            
            <form onSubmit={handleSubmit}>
                <h1>Contact Us</h1>
          <p>Have questions or inquiries? Reach out to us!</p>

              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />

              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />

              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" required></textarea>

              <button type="submit">Submit</button>
            </form>
          ) : (
            <div className="success-message">
        <p>Thank You</p>
        <span role="img" aria-label="check-mark">
          ✔️
        </span>
        <button onClick={handleReturnToHome}>Return to Home</button>
      </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
