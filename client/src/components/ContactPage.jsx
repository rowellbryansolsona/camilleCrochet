import './Contact.css'; 
import Container from 'react-bootstrap/Container'; 
import Row from 'react-bootstrap/Row'; 
import Col from 'react-bootstrap/Col'; 
import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import DataService from '../service/dataservice';

function ContactPage() { 
  const form = useRef();

  const [info, setInfo] = useState({
    name: "",
    email: "",
    number: "",
    subject: "",
    message: "",
  })

  const [alertMessage, setAlertMessage] = useState({
   alertStatus: "",
   message: ""
  });

  const fetchInfo = async () => {
    try{
      const response = await axios.get("http://localhost:3000/api/contactinfo");
      setContactinfo(response.data);
    } catch(error) {
      console.log("Error fetching info", error);
    }
  }

  const sendEmail = async (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
  
    try {
      let req = {
        name: formData.get('user_name'),
        email: formData.get('user_email'),
        number: formData.get('user_number'),
        subject: formData.get('user_subject'),
        message: formData.get('message')
      }
      const response = await DataService.saveContactInfo("/api/save-contactinfo",req);
  
      console.log(response); // Response from the server

      setAlertMessage({
        alertStatus: "Success",
        message: response
      });

      setInfo({
        name: "",
        email: "",
        number: "",
        subject: "",
        message: "",
      });

      form.current.reset();
      // Additional logic after successful submission if needed
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return ( 
    <div className="contact header-margin">
      <div className='contactbg'>
        <h1>
          <i className="fa-regular fa-comments tracking-in-expand-fwd"></i>
          <div className='tracking-in-expand-fwd'>
            Contact Us
          </div>
        </h1>
        <p className='tracking-in-expand-fwd'>GET IN TOUCH WITH US</p>
      
        <div className="container my-5">
          <div className="row justify-content-center" id='container'>
            <div className="col-lg-9">
              <form ref={form} onSubmit={sendEmail}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label htmlFor="user_name" className="form-label tracking-in-expand-fwd">Name</label>
                    <input className="form-control"  id="user_name" type="text" name="user_name" required/>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="user_email" className="form-label tracking-in-expand-fwd">Email</label>
                    <input  id='user_email' className="form-control" type="email" name="user_email" required/>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="user_number" className="form-label tracking-in-expand-fwd">Number</label>
                    <input id='user_number' className="form-control" type="number" name="user_number" required/>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="user_subject" className="form-label tracking-in-expand-fwd">Subject</label>
                    <input id="user_subject" className="form-control" type="text" name="user_subject" required/>
                  </div>
                  <div className="col-12">
                    <label className="form-label tracking-in-expand-fwd">Message</label>
                    <textarea className="form-control" id="message" name="message" rows="3" required />
                  </div>
                  <div className="col-12">
                    <div className="row justify-content-center">
                      <div className="vertical-center" id='btn'>
                        <button>
                          <input  className="btn btn-light w-100 fw-bold tracking-in-expand-fwd" type="submit" value="Send" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
              {alertMessage.alertStatus === 'Success' && (
                <div className="alert alert-success alert-dismissible fade show" role="alert">
                <strong>{alertMessage.alertStatus}</strong> {alertMessage.message}
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div> 
  ); 
} 

export default ContactPage;
