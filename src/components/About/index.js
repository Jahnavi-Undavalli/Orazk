
import React from 'react';
import Header from '../Header';
import { Chrono } from 'react-chrono';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './index.css';



const About = () => {
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <Header />

      <div className="about-container">
      <div className="about-div">
          <h1 className='heading'>About Us</h1>
           <h2 className='heading1'> Welcome to AccuSolve Consulting!</h2>
           <p className='paragraph'>
     Welcome to AccuSolve Consulting – your trusted partner in precision accounting and financial solutions.
     At AccuSolve, we believe in empowering businesses through accurate and efficient accounting practices.
     With a team of dedicated professionals, we strive to deliver top-notch consulting services that align with your business goals.
   </p>
   <p className='paragraph'>
     Our journey began with a vision to provide comprehensive accounting and bookkeeping solutions that go beyond numbers.
     We understand the challenges that businesses face in today's dynamic financial landscape, and our mission is to simplify your financial processes,
     ensuring compliance, accuracy, and strategic financial management.
   </p>
   <p className='paragraph'>
     Whether you are a small startup or an established enterprise, our agile team is here to support you on your financial journey.
     We are committed to excellence, integrity, and client satisfaction.
     Let us be your partner in achieving financial clarity and unlocking the full potential of your business.
   </p>
         </div>
         <h1 className='heading'>Our CEO's and Co-Founders's</h1>
        <div className="chrono-container">
         
          <Chrono mode="VERTICAL_ALTERNATING"  theme={{
            secondary: 'white',
          }}>
            <div className="timeline-item">
             <div>
             <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeHUZJjliyBrgAZo4mBwoWUiXzE8onaBA-gw&usqp=CAU"
                className="image"
                alt="chennai-super-kings"
              />
             </div>
              <div><h1 className='name'> Ari Gosh</h1>
              <h3 className='profession'>CEO</h3>
              </div>
              </div>

              <div className="timeline-item">
             <div>
             <img
                src="https://cognizant.scene7.com/is/image/cognizant/ravi-kumar-s-cognizant?fmt=png-alpha&"
                className="image"
                alt="chennai-super-kings"
              />
             </div>
              <div><h1 className='name'> Ravi Kumar</h1>
              <h3 className='profession'>Co- Founder</h3>
              </div>
              </div>

              <div className="timeline-item">
             <div>
             <img
                src="https://1.bp.blogspot.com/-uXh9nTM9pwE/YPZA-gJcOZI/AAAAAAAA98o/v_17vkCsr0gzjwbWzHhOeidwCMNsEW9TQCLcBGAsYHQ/s620/images%2B%252811%2529.jpeg"
                className="image"
                alt="chennai-super-kings"
              />
             </div>
              <div><h1 className='name'> Shiv Nadar</h1>
              <h3 className='profession'>Chair Person</h3>
              </div>
              </div>
          </Chrono>
        </div>
  <h1 className='heading'>Here is  What  Our Clients Say About AccuSolve Consulting</h1>
        <div className="slider-container">
          <Slider {...settings}>
            <div className="slider-item">
              <div className='inner-container'>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeHUZJjliyBrgAZo4mBwoWUiXzE8onaBA-gw&usqp=CAU"
                className="image1"
                alt="chennai-super-kings"
              />
              <h1 className='name1'> Ari Gosh</h1>
              </div>
              <p className='paragraph'>They have thorough knowledge about processes and have constantle reminded me of various legal deadlines </p>
            </div>
            <div className="slider-item">
            <div className='inner-container'>
            <img
                src="https://img.etimg.com/thumb/width-1200,height-900,imgsize-12164,resizemode-75,msid-101316423/industry/cons-products/fmcg/rohit-jawa-takes-charge-as-md-and-ceo-of-hindustan-unilever.jpg"
                className="image1"
                alt="chennai-super-kings"
              />
              <h1 className='name1'>Sai Vamsi </h1>
              </div>
              <p className='paragraph'>They have thorough knowledge about processes and have constantle reminded me of various legal deadlines </p>
            </div>
            <div className="slider-item">
            <div className='inner-container'>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeHUZJjliyBrgAZo4mBwoWUiXzE8onaBA-gw&usqp=CAU"
                className="image1"
                alt="chennai-super-kings"
              />
              <h1 className='name1'> Jai Kumar</h1>
              </div>
              <p className='paragraph'>They have thorough knowledge about processes and have constantle reminded me of various legal deadlines </p>
            </div>
            <div className="slider-item">
            <div className='inner-container'>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeHUZJjliyBrgAZo4mBwoWUiXzE8onaBA-gw&usqp=CAU"
                className="image1"
                alt="chennai-super-kings"
              />
              <h1 className='name1'> Prakash</h1>
              </div>
              <p className='paragraph'>They have thorough knowledge about processes and have constantle reminded me of various legal deadlines </p>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default About;
