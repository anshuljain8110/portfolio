import React from 'react'
import "./Contact.css"
export default function Contact() {
  return (
    <section className='contact' id='contact'>
        <div className='container'>
            <h2>CONTACT 🤙</h2>
            <div className='flex'>
                <div className='adress'>
                    <img src={process.env.PUBLIC_URL + "/svg/email.svg"} alt="Not Found" height="60px"/>
                    <div className='content'>
                        <h3>Location</h3>
                        <p>Ambala,Haryana,India (133205)</p>
                    </div>
                </div>
                <div className="email">
                    <img src={process.env.PUBLIC_URL + "/svg/location.svg"} alt="Not Found" height="60px"/>
                    <div className='content'>
                        <h3>Email</h3>
                        <p>anshuljain8110@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
