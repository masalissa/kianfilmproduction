import React from 'react'
import {IoMdCall} from "react-icons/io"
import {AiOutlineMail} from "react-icons/ai"
import {FaLocationArrow} from "react-icons/fa"
export default function Contact() {
  return (
    <section className='contact-page bg-white'>
      <h1 className='text-center text-black py-3'>Contact Us</h1>
      <div className="w-75 mx-auto pb-5">
        <div className="row border border-dark border-radius-20 mb-3">
       
          <div className="left col-12 col-md-6 contact-info over-flow position-relative">
          <div className="circal"></div>
          <h3>Contact Information</h3>
         <div className="d-flex align-items-center mt-4">
         <span className='fs-4 text-black-50'><IoMdCall /></span>
          <span className='fs-4 text-black-50 ms-5'>+31-123-45-67-89</span>
         </div>
         <div className="d-flex align-items-center mt-4">
         <span className='fs-4 text-black-50'><AiOutlineMail /></span>
          <span className='fs-4 text-black-50 ms-5'>info@kianfilm.com</span>
         </div>
         <div className="d-flex align-items-center mt-4">
         <span className='fs-4 text-black-50'><FaLocationArrow /></span>
          <span className='fs-4 text-black-50 ms-5'>javastraat 123<br />1234 AB Amsterdam</span>
         </div>
          </div>
          <div className="right col-12 col-md-4 ">
            <form className='p-5'>
              <input type="text" placeholder='Full Name' className='inputField' /><br />
              <input type="text" placeholder='Email Address' className='inputField' /><br />
              <textarea type="text" placeholder='Message' className='inputField w-75' /><br />
              <input type="submit" value="Submit" className='bg-dark text-white rounded-5 fs-6 px-5 d-block ms-auto mt-5' />
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
