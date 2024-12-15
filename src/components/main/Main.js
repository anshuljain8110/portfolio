import React from 'react'
import { motion } from 'framer-motion'

import a from "./learnttech"
export default function Main() {
    return (
        <>
            <section id='home'>
                <div className="bg-cyanPrimary dark:bg-blackPrimary
        px-8 py-8
        sm:px-16 sm:py-8
        lg:px-32 lg:py-8  
        xl:px-64 xl:py-16">
                    <div className='grid pt-12 lg:grid-cols-2 lg:pt-0 gap-16'>
                        <motion.div 
                        initial={{opacity:0,x:100}}
                        animate={{x:0,opacity:1}} 
                        transition={{duration:1}} 
                        className='flex flex-col justify-center'>
                            <h1 className='text-white text-6xl font-semibold font-mono'>Full Stack Web Developer</h1>
                            <p className='text-white my-4 text-xl'>Hey! I'm <span className='dark:text-orangePrimary font-semibold'>Anshul Jain</span>, your friendly Programmer and a M.E.R.N Stack magician🪄. I love turning ideas into reality with a sprinkle of coding ✨</p>
                            <div className='flex gap-5 mt-4 '>
                                <a href="https://github.com/anshuljain8110" target='_blank' rel="noreferrer"><img className='h-8 hover:scale-125 duration-200' src={process.env.PUBLIC_URL + "/svg/github142.svg"} alt="Not Found" height="27px" /></a>
                                <a href="https://leetcode.com/anshuljain8110/" target='_blank' rel="noreferrer"><img className='h-8 hover:scale-125 duration-200' src={process.env.PUBLIC_URL + "/svg/leetcode.svg"} alt="Not Found" height="27px" /></a>
                            </div>
                        </motion.div>
                        <motion.div 
                        initial={{opacity:0,x:-100}}
                        animate={{x:0,opacity:1}} 
                        transition={{duration:1}} 
                        className='lg:ml-16 flex items-center justify-center '>
                            <img className='rounded-full border-orangePrimary border-4' src={process.env.PUBLIC_URL + '/images/mee.jpeg'} alt="Not Found" height="400px" />
                        </motion.div>
                    </div>
                    <div className='flex flex-col lg:flex-row text-center mt-8 gap-4'>
                        <p className='dark:text-orangePrimary border-orangePrimary py-4 border-b-2 font-bold lg:border-b-0 lg:border-r-2 lg:px-4 lg:py-0 my-2'>Tech Stack</p>
                        <div className='z-0 flex gap-8 items-center justify-center overflow-hidden rounded-3xl '>
                            {
                                a.map((e, i) => {
                                    return <span key={i} className='z-0 my-2'><img className='z-0 scale-125 rounded-2xl  bg-white p-2 mx-4 relative animate-[anim_20s_linear_infinite]' src={process.env.PUBLIC_URL + "/svg/" + e + ".svg"} alt={e} height="50px" /></span>
                                })
                            }
                            {
                                a.map((e, i) => {
                                    return <span key={i} className='z-0 my-2'><img className='z-0 scale-125 rounded-2xl  bg-white p-2 mx-4 relative animate-[anim_20s_linear_infinite]' src={process.env.PUBLIC_URL + "/svg/" + e + ".svg"} alt={e} height="50px" /></span>
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
