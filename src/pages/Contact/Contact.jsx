import React from 'react'
import './Contact.scss';

const Contact = () => {
  return (
    <div className='contact-container'>
      <form className='contact-form'>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"            
            style={{ backgroundColor: '#e0e0e0', borderColor: '#ccc', padding: '10px', marginBottom: '10px' }}
          />
          
        </div>
        <div>
          <label>E-mail</label>
          <input
            type="email"
            name="email"
            style={{ backgroundColor: '#e0e0e0', borderColor: '#ccc', padding: '10px', marginBottom: '10px' }}
          />
          
        </div>
        <div>
          <label>Message</label>
          <textarea name="" id=""></textarea>
        </div>
        <div>
          <button type="submit" style={{ backgroundColor: '#ccc', padding: '10px' }}>
            submit
          </button>
        </div>
      </form>

    </div>
  )
}

export default Contact