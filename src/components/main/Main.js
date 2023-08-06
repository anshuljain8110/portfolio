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
                            <h1>Full Stack Web<br/>Developer👋</h1>
                            <p>Hi, I am Anshul Jain a passionate critical thinker coder currently pursuing B.tech CSE</p>
                        </div>
                        <div className="myimage">
                            <img src="images/IMG_20230117_101500_761.jpg" alt="Not Found" height="400px" />
                        </div>
                    </div>
                    <div className='lower'>
                        <p>Learnt Tech</p>
                        <div>
                        {
                            a.map((e,i)=>{
                                return <span key={i}><img src={e} alt="Not Found" height="50px"/></span>
                            })
                        }{
                            a.map((e,i)=>{
                                return <span key={i}><img src={e} alt="Not Found" height="50px"/></span>
                            })

                        }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
