import React from 'react'

export default function SingleCard({ projects }) {
    return (
        <div className="projectscards">
            {
                projects.map((e, i) => {
                    return <div className='singleproject' style={i % 2 !== 0 ? { flexDirection: "row-reverse" } : {}}>
                        <div>
                            <img src={process.env.PUBLIC_URL + e.image} className='mainimage' alt="here" height="100%" width="450px" />
                        </div>
                        <div className='projectcontent'>
                            <h3>{e.name}</h3>
                            <div className='tech'>
                                <p>{e.content}</p>
                                {e.techstack.map((e) => {
                                    return <div>{e}</div>
                                })}
                            </div>
                            <div className='links'>
                                {e.code.length === 0 ? "" : <a href={e.code} target='_blank' rel="noreferrer"><img src={process.env.PUBLIC_URL + "/svg/github.svg"} alt="none" height="20px" />Code</a>}
                                {e.link.length === 0 ? "" : <a href={e.link} target='_blank' rel="noreferrer"><img src={process.env.PUBLIC_URL + "/svg/link.svg"} alt="none" height="30px" />link</a>}
                            </div>
                        </div>
                    </div>
                })
            }
        </div>
    )
}
