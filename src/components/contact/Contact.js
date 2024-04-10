import React from 'react'
import "./Contact.css"
export default function Contact() {
  return (
    <section className='contact' id='contact'>
        <div className='container'>
            <h2>CONTACT 🤙</h2>
            <div className='flex'>
                <div className='adress'>
                    <img src={process.env.PUBLIC_URL + "/svg/location.svg"} alt="Not Found" height="60px"/>
                    <div className='content'>
                        <h3>Location</h3>
                        <a href='https://www.google.com/maps/place/Ambala,+Haryana/@30.3721216,76.7362271,13z/data=!3m1!4b1!4m6!3m5!1s0x390fb62a421e6f11:0xebd28a29f7258d14!8m2!3d30.3752011!4d76.782122!16zL20vMDZ5Y240?entry=ttu' target='_blank' rel="noreferrer">Ambala,Haryana,India (133205)</a>
                    </div>
                </div>
                <div className="email">
                    <img src={process.env.PUBLIC_URL + "/svg/email.svg"} alt="Not Found" height="60px"/>
                    <div className='content'>
                        <h3>Email</h3>
                        <a className='emailid' href='mailto:anshuljain8110@gmail.com'>anshuljain8110@gmail.com</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
