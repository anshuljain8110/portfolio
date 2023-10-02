import React from 'react'
import "./Portfolio.css"
import projects from "./Projects"
export default function Portfolio() {
    return (
        <section className='portfolio' id='projects'>
            <div className="container">
                <div className="heading">
                    <h2>PROJECTS ☺️</h2>
                    <h4>Each project is a unique building block towards better programming</h4>
                </div>
                <div className="projectscards">
                    {
                        projects.map((e) => {
                            return <div className='singleproject'>
                                <div>
                                    <img src={process.env.PUBLIC_URL + e.image} className='mainimage' alt="here"height="100%" width="450px"/>
                                </div>
                                <div className='projectcontent' style={{marginLeft:"20px"}}>
                                    <h3>{e.name}</h3>
                                    <div className='tech'>
                                    <p>{e.content}</p>
                                        {e.techstack.map((e)=>{
                                            return <div>{e}</div>
                                        })}
                                    </div>
                                    <div className='links'>
                                        <a href={e.code} target='_blank' rel="noreferrer"><img src={process.env.PUBLIC_URL + "/svg/github.svg"} alt="none" height="20px"/>Code</a>
                                        <a href={e.link} target='_blank' rel="noreferrer"><img src={process.env.PUBLIC_URL + "/svg/link.svg"} alt="none" height="30px"/>link</a>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </section>
    )
}
