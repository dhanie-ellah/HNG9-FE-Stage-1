import React from 'react'
import '../App.css'
import Footer from '../components/footer'
import Input from '../components/input'

const contact = () => {
  return (
    <div>
      <h1>Contact Me</h1>
      <p>Hi there, contact me to ask me about anything you have in mind.</p>
      <div className='flex-inputs'>
        <Input id='first_name' label='First name' input_type='text' placeholder='Enter your first name'/>
        <Input id='last_name' label='Last name' input_type='text' placeholder='Enter your last name'/>
      </div>

      <Input id='email' label='Email' input_type='email' placeholder='yourname@email.com'/>

      <div className="message">
        <label htmlFor="message">Message</label>
        <textarea id="message" cols="30" rows="10" placeholder="Send me a message and I'll reply you as soon as possible..."></textarea>
      </div>

      <div className="check">
        <input type="checkbox" id="" />
        <p>You agree to providing your data to Daniella who may contact you.</p>
      </div>

      <input type="submit" value="Send message" />
      <Footer/>
    </div>
  )
}

export default contact