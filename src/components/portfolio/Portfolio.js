import React, { useState } from 'react'
import "./Portfolio.css"
import projects from "./Projects"
import SingleCard from './SingleCard'
import hackathon from './Hackathon'
import problemsolving from './ProblemSolving'
import mobile from './Mobile'
export default function Portfolio() {
    const [radio,setradio] = useState(1)
    return (
        <section className='portfolio' id='projects'>
            <div className="container">
                <div className="heading">
                    <h2>Projects ☺️</h2>
                    <h4>Transforming ideas into innovation, one project at a time – where passion meets proficiency.</h4>
                </div>

                <div className='buttons'>
                    
                    <input type="radio" name='experiece' id='prjects' defaultChecked onChange={()=>{setradio(1)}}/>
                    <label htmlFor="prjects">Web Apps</label>

                    <input type="radio" name='experiece' id='android' onChange={()=>{setradio(2)}}/>
                    <label htmlFor="android">Mobile Apps</label>

                    <input type="radio" name='experiece' id='intership' onClick={()=>{setradio(4)}}/>
                    <label htmlFor="intership">Problem Solving</label>

                    <input type="radio" name='experiece' id='hackathon' onChange={()=>{setradio(3)}} />
                    <label htmlFor="hackathon">Hackathons & Internships</label>

                </div>

                <div className='selected'>
                {radio===1?<SingleCard projects={projects}/>:""}
                {radio===2?<SingleCard projects={mobile}/>:""}
                {radio===3?<SingleCard projects={hackathon}/>:""}
                {radio===4?<SingleCard projects={problemsolving}/>:""}
                </div>
                
            </div>
        </section>
    )
}
