import React from 'react'
import PizzaLeft from '../assets/pizzaLeft.jpg';
import "../styles/Contact.css";

function Contact(){
  return (
    <div className='contact'>
        <div 
        className='leftSide'
         style={{backgroundImage: `url(${PizzaLeft})` }}
         ></div>
        <div className='rightSide'>
            <h1> Contact Us</h1>
          
            <form id='contact-form' method='POST'>
                <label htmlfor="name">Full Name</label>
                <input name='name' placeholder='Entrer full name ...' type='text' />
          
                <label htmlfor="email">Email</label>
                <input name='email' placeholder='Entrer email ...' type='email' />
           
                <label htmlFor='message'>Message</label>
                <textarea rows="6" placeholder='Entrer message ..' name='message' required></textarea>
         
                <button type='submit'>Send Message</button>
            </form>
        </div>
    </div>
  );
}

export default Contact;