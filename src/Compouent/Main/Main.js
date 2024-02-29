import React from 'react';
import './Main.css';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import video from '../../video/v1.mp4';
import Image from '../../gallery/School 11.jpg';
import Image1 from '../../gallery/School 8.jpg';
import Image2 from '../../gallery/School 9.jpg';
import Image3 from '../../gallery/School 2.jpg';

function Main() {
  return (
    <>
      <div>
        <div className="video-background">
          <video autoPlay loop muted className="video">
            <source src={video} type="video/mp4" />
          </video>
        </div>
        <div className="mission">
        <div className="text7">
          <h1 style={{ marginTop: '40px' }}><b>OUR VISION & MISSION</b></h1>
          <p>AT MPIPS we believe to inspire our children to</p>
          <p>explore and unfold their individual genius and</p>
          <p>potential to be good human beings and equip them</p>
          <p>with 21st century skills and global perspective </p>
          <p> in a joyful learning environment.</p>
        </div>
        <div className="image1">
          <img src={Image} alt="Image" />
        </div>
        </div>
      </div>
      <div>
        <h1 className='c1'>Why Choose Us?</h1>
        <Container>
          <Row>
            <Col xs={6} md={4}>
              <div>
              <img src={Image1} alt="Image 1" rounded />
             <div> <h4 style={{marginTop:'30px'}}>	Pollution-free Environment</h4>
              <p>With a hope to not be up in smoke, we provide a</p>
              <p>clean and green environment to our students and</p>
              <p>teach them to maintain a pollution-free</p>
              <p> environment. Here we also encourage them to</p>
              <p> plant trees and keep the surroundings pristine.</p>
              </div>
              </div>
            </Col>
            <Col xs={6} md={4}>
              <div>
              <img src={Image2} alt="Image 2" rounded />
              <div> <h4 style={{marginTop:'50px'}}>	Emphasis on Disciplinet</h4>
              <p>Wisdom is discipline and vice versa, our institution</p>
              <p>carves students in a disciplined form to shine for a</p>
              <p>brighter future. Disciplinarity is taught in different</p>
              <p> ways including studies, behavioural awareness</p>
              <p> and empathy.</p>
              </div>
              </div>
            </Col>
            <Col xs={6} md={4}>
              <div>
              <img src={Image3} alt="Image 3" thumbnail />
              <div> <h4 style={{marginTop:'20px'}}>	Infrastructure facing Himalayas</h4>
              <p>Our strong school building cradled by the</p>
              <p>Himalayas presents well-equipped infrastructure</p>
              <p>and modern facilities for quality education.</p>
              <p> Geographical features of our premises are diverse</p>
              <p> with a calming view of nature.</p>
              </div>
              </div>
            </Col>

          </Row>
        </Container>
      </div>
    </>
  );
}

export default Main;
