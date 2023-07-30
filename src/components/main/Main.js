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
                            <h1>Anshul Jain</h1>
                            <p>Hi, I am anshul jain a critical thinker coder wanted to become a backend developer</p>
                        </div>
                        <div className="myimage">
                            <img src="images/IMG_20230117_101500_761.jpg" alt="Not Found" height="400px" />
                        </div>
                    </div>
                    <div className='lower'>
                        <p>Learnt Tech</p>
                        <div>
                        {
                            a.map((e)=>{
                                return <span><img src={e} alt="Not Found" height="50px"/></span>
                            })
                        }{
                            a.map((e)=>{
                                return <span><img src={e} alt="Not Found" height="50px"/></span>
                            })

                        }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
