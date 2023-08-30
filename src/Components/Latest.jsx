import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom'

const Latest = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <>
      {/* <div className="upcoming-events" style={{ padding: '1.9rem' }}>
        <h1
          style={{ textAlign: 'center', padding: '1rem', fontFamily: 'Inter' }}
        >
          Upcoming Events
        </h1>

        <div className="flex" id="logicaa">
          <div className="upcoming-event-div">
            <p className="info">We are back with</p>
            <h1 className="e-head">LOGICA</h1>
            <p className="info">
              A Project Competition where ideas get the Wings!
            </p>
            <br></br>
            <p className="info">7th & 8th April 2023</p>
            <a
              href="https://logica2-registrations.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="btninfo" id="join">
                <ion-icon
                  style={{ padding: 0, fontSize: 24 }}
                  name="arrow-forward-circle"
                ></ion-icon>
                Register
              </button>
            </a>
          </div>
          <img
            className="graphics"
            src="./Images/UpcomingEvents/hackathon.png"
            alt="hackathon"
          ></img>
        </div>
      </div> */}

      <div id="blog-div">
        <div className='heading-blog'>
      <h1 >Latest Blogs Here</h1>
      </div>
        <div className='blgos'>

         
            <div className='blgos-here'> 

              <div className='blog-1'>
               
               <a href="https://abhishekb420.hashnode.dev/nightmare-addeventlistener">
                <img src="./Images/blogs/blog1.png" className='blog-img' />
               </a>
               
              </div>
              <div className='blog-1'>
               
               <a href="https://abhishekb420.hashnode.dev/yaml-aint-markup-language-yaml">
                <img src="./Images/blogs/yaml.png" className='blog-img' />
               </a>
               
              </div>
              <div className='blog-1'>
               
               <a href="https://abhishekb420.hashnode.dev/basics-of-aws">
                <img src="./Images/blogs/aws.png" className='blog-img' />
               </a>
               
            </div>
            <div className='blog-1'>
               
               <a href="https://abhishekb420.hashnode.dev/nightmare-addeventlistener">
                <img src="./Images/blogs/blog1.png" className='blog-img' />
               </a>
               
            </div>
            

          


            </div>
            
            

        </div>
        
         
      </div>
    </>
  )
}

export default Latest


