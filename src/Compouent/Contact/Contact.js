import React from 'react';
import './Contact.css';
import { LuPhoneCall } from "react-icons/lu";
import { FaRegNewspaper } from "react-icons/fa";
import { FaAddressBook } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="contact-container">
      <h1 style={{color:'black' , marginTop:'100px'}}><strong>Contact Us</strong></h1>
      <div className="container" >
        <div className="box">
          <LuPhoneCall size={50} style={{color:'black',marginTop:'20px'}} />
          <h4 style={{marginTop:'20px'}}>
          Call Us
          </h4>
        <p style={{marginTop:'20px'}}><b>+91 9418476139</b></p>
        <p><b>+91 8780867091</b></p>
        <p><b>+91 8278752225</b></p>
         
          <h6 style={{color:'black',marginTop:'30px'}}>Email Us</h6>  
          
          <p>
         <b>mpipschooldgiri@gmail.com</b> 
          </p>
        </div>
        <div className="box" style={{color:'black'}}>
          <FaRegNewspaper size={50} />
          <h4 style={{color:'black'}}>Send Us A Message</h4>
            <p><b>Send your Informations </b></p>
            <a href="http://localhost:3000/form" className="button">Send Message</a>

        </div>
        <div className="box">
          <FaAddressBook size={50} />
          <h4 >Address</h4>
          
            <p ><b>Maharana Pratap International Public School</b> </p> 
            <p ><b>Dharamshala at Dharamgiri, Near chamunda Mandir,</b></p>  
            <p ><b>Kangra, H.P. (Run by Rajput Kalyan Trust, H.P.,</b></p>  
            <p ><b>H.O. Kangra-Regd.)</b></p> 
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
