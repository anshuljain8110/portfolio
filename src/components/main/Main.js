import React from 'react'
import "./Main.css"
import a from "./learnttech"
export default function Main() {
    return (
        <>
            <section className='main' id='home'>
                <div className="container">
                    <div className='upper'>
                        <div className='intro'>
                            <h1>Full Stack Web Developer👋</h1>
                            <p>"Hey! I'm Anshul Jain, your friendly Programmer and a M.E.R.N Stack magician🪄. I love turning ideas into reality with a sprinkle of coding magic! ✨"</p>
                            <div className='mainlinks'>
                            <a href="https://github.com/anshuljain8110" target='_blank' rel="noreferrer"><img src={process.env.PUBLIC_URL + "/svg/github142.svg"} alt="Not Found" height="27px"/></a>
                            <a href="https://leetcode.com/anshuljain8110/" target='_blank' rel="noreferrer"><img src={process.env.PUBLIC_URL + "/svg/leetcode.svg"} alt="Not Found" height="27px"/></a>
                            </div>
                        </div>
                        <div className='mainimagediv'>
                            <img className='myimage' src={process.env.PUBLIC_URL + '/images/IMG_20230117_101500_761.jpg'} alt="Not Found" height="400px" />
                        </div>
                    </div>
                    <div className='lower'>
                        <p>Learnt Tech</p>
                        <div>
                        {
                            a.map((e,i)=>{
                                return <span key={i}><img src={process.env.PUBLIC_URL + e} alt="Not Found" height="50px"/></span>
                            })
                        }{
                            a.map((e,i)=>{
                                return <span key={i}><img src={process.env.PUBLIC_URL + e} alt="Not Found" height="50px"/></span>
                            })

                        }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
