import React from 'react'
import "./Footer.css"
export default function Footer() {
  return (
    <section className='footer'>
        <div className='container'>
            <h3>Copyright 2023 All rights reserved</h3>
            <div>
                <a href="https://t.me/anshuljain8110/" target='_blank' rel="noreferrer"><img src={process.env.PUBLIC_URL + "/svg/telegram.svg"} alt="Not Found" height="40px"/></a>
                <a href="https://instagram.com/_anshxl__" target='_blank' rel="noreferrer"><img src={process.env.PUBLIC_URL + "/svg/instagram.svg"} alt="Not Found" height="27px"/></a>
                <a href="https://github.com/anshuljain8110" target='_blank' rel="noreferrer"><img src={process.env.PUBLIC_URL + "/svg/github142.svg"} alt="Not Found" height="27px"/></a>
                <a href="https://leetcode.com/anshuljain8110" target='_blank' rel="noreferrer"><img src={process.env.PUBLIC_URL + "/svg/leetcode.svg"} alt="Not Found" height="27px"/></a>
                <a href="https://www.linkedin.com/in/anshuljain8110/" target='_blank' rel="noreferrer"><img src={process.env.PUBLIC_URL + "/svg/linkedin.svg"} alt="Not Found" height="27px"/></a>
                <a href="https://www.youtube.com/channel/UCqmerMpvvsJXd8InKHEmjJg" target='_blank' rel="noreferrer"><img src={process.env.PUBLIC_URL + "/svg/youtube.svg"} alt="Not Found" height="33px"/></a>
            </div>
        </div>
    </section>
  )
}
