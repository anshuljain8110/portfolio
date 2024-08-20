import React from 'react'
// import "./Footer.css"
export default function Footer() {
  const linksTailwind = "h-8 mx-2 md:hover:scale-125 duration-200"
  return (
    <section className=''>
        <div className='bg-gray-800 flex flex-col gap-8 items-center justify-between
        px-8 py-16
        sm:px-16
        md:flex-row
        lg:px-32
        xl:px-64'>
            <h3 className=' text-white text-2xl font-semibold'>Copyright 2024 All rights reserved</h3>
            <div className='flex'>
                {/* <a href="https://t.me/anshuljain8110/" target='_blank' rel="noreferrer"><img src={process.env.PUBLIC_URL + "/svg/telegram.svg"} alt="Not Found" height="40px"/></a> */}
                <a href="https://leetcode.com/anshuljain8110" target='_blank' rel="noreferrer"><img className={linksTailwind} src={process.env.PUBLIC_URL + "/svg/leetcode.svg"} alt="Not Found" height="27px"/></a>
                <a href="https://github.com/anshuljain8110" target='_blank' rel="noreferrer"><img className={linksTailwind} src={process.env.PUBLIC_URL + "/svg/github142.svg"} alt="Not Found" height="27px"/></a>
                <a href="https://www.linkedin.com/in/anshuljain8110/" target='_blank' rel="noreferrer"><img className={linksTailwind} src={process.env.PUBLIC_URL + "/svg/linkedin.svg"} alt="Not Found" height="27px"/></a>
                <a href="https://www.youtube.com/channel/UCqmerMpvvsJXd8InKHEmjJg" target='_blank' rel="noreferrer"><img className={linksTailwind} src={process.env.PUBLIC_URL + "/svg/youtube.svg"} alt="Not Found" height="33px"/></a>
                <a href="https://instagram.com/_anshxl__" target='_blank' rel="noreferrer"><img className={linksTailwind} src={process.env.PUBLIC_URL + "/svg/instagram.svg"} alt="Not Found" height="27px"/></a>
            </div>
        </div>
        <div className='hiiii'></div>
    </section>
  )
}
