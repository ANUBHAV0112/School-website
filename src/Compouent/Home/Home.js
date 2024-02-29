import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image'; 
import './Home.css';

function Home() {
  return (
    <>
      <Carousel slide={false}>
        <Carousel.Item>
          <Image src="Asset/gallery/School 20.jpg" alt="First slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image src="Asset/gallery/School 2.jpg" alt="Second slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
<br></br><br></br>
    <br></br>
      <div className="container">
        <div className="image">
          <img src="Asset\gallery\Maharana_Pratap.jpg" alt="Your" height={"5%"} width={"100%"}   />
        </div>
        <div className="text">
          <h2 style={{ color: 'blue' ,marginLeft:'200px' ,marginBottom:'70px'}} className="fade-in-text">Maharana Pratap – Our Values</h2>
          <div className="values" style={{ color: 'green',marginLeft:'200px' }}>
            <div className="column" >
              <p className="fade-in-text">
                <ul>
                  <li>M – Morality</li>
                  <li>A – Action Oriented</li>
                  <li>H – Humility</li>
                  <li>A – Achievement</li>
                  <li>R – Responsibility</li>
                  <li>A – Accountability</li>
                  <li>N – National Unity</li>
                  <li>A – Appreciation for cultural Values</li>
                </ul>
              </p>
            </div>
            <div className="column">
              <p className="fade-in-text">
                <ul>
                  <li>P – Patriotism</li>
                  <li>R – Renunciation</li>
                  <li>A – Art of Living</li>
                  <li>T – Team Spirit</li>
                  <li>A – Austerity</li>
                  <li>P – Punctuality</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
