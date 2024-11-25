import React from 'react'
import './Contact.scss';

const Contact = () => {
  return (
<<<<<<< HEAD
    <section className='contact-container'>
      <header>
        <h1>CONTACT</h1>
      </header>

      <article>
        <h2>BASIC INFORMAION</h2>
        <h3>기본정보</h3>
        <form className='contact-form'>
        
          <div>
            <label htmlFor='name'>Name</label>
            <input
              type="text"
              name="name" 
              placeholder='이름'  
              id="name"
              autoComplete="off"                     
            />            
          </div>

          <div>
            <label htmlFor='email'>E-mail</label>
            <input
              type="email"
              name="email" 
              placeholder='이메일'
              id='email'
              autoComplete="off"  
            />            
          </div>

          <div>
            <label htmlFor='tel'>Tel</label>
              <input
                type="text"
                name="tel"
                placeholder='전화번호'    
                id='tel'
                autoComplete="off"       
              />
          </div>

        </form>
      </article>

      <article>
        <h2>MESSAGE</h2>
        <h3>문의내용</h3>
        <div>
        <textarea></textarea>
        </div>
      </article>

      <article>
        <h2>AGREEMENT</h2>
        <h3>개인정보 수집 및 이용 동의</h3>
        <div>
        <label htmlFor="">
          <input type="checkbox" />
          개인 정보 수집 및 이용에 동의합니다.
        </label>
        </div>
      </article>

      <article>
        <div>
          <button>Send</button>
        </div>
      </article>

    </section>
=======
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
>>>>>>> 4b8c3667da030c0388177a044b2c4464b134a5bc
  )
}

export default Contact