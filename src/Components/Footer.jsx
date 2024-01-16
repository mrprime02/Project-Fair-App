import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div   className='d-flex justify-content-center align-items-center flex-column   mt-5' style={{width:'100%',height:'300px',backgroundColor:'#90ee90'}}>
    <div className="footer-content d-flex justify-content-evenly w-100 flex-wrap">
      <div style={{width:'400px'}} className="website">
        <h4 className='fw-bolder text-light'><i className="fa-brands fa-stack-overflow fa-bounce"></i>Project Fair</h4>
        <h6>Desigined and build with all the love in the world of Luminar team with the help of our contributors.</h6>
        <h6>Code licenced MIT, docs CC BY 3.0</h6>
        <p>Currently v1.0.0 </p>
      </div>
      <div className="links d-flex flex-column">
        <h4>Links</h4>
        <Link to={'/'} className='text-decoration-none' style={{color:'white'}}>Home</Link>
        <Link to={'/login'} className='text-decoration-none' style={{color:'white'}}>Login</Link>
        <Link to={'/register'} className='text-decoration-none' style={{color:'white'}}>Register</Link>
      </div>
      <div className="guides d-flex flex-column">
      <h4>Guides</h4>
        <a className='text-decoration-none' style={{color:'white'}} href="https://react.dev/" target='_blank'>React</a>
        <a className='text-decoration-none' style={{color:'white'}} href="https://react-bootstrap.netlify.app/" target='_blank'>React Bootstrap</a>
        <a className='text-decoration-none' style={{color:'white'}} href="https://www.w3schools.com/react/react_router.asp" target='_blank'>Routing</a>
      </div>
      <div className="contact">
        <h4>Contact Us</h4>
        <div className="d-flex">
          <input placeholder='Enter your mail' type="text" className="form-control" />
          <button className='btn btn-warning ms-3'><i class="fa-solid fa-arrow-right"></i></button>
        </div>
        <div style={{color:'white'}} className="icons mt-3 d-flex justify-content-between">
        <i style={{height:'50px'}} class="fa-solid fa-envelope fa-2x"></i>
        <i style={{height:'50px'}} class="fa-brands fa-twitter fa-2x"></i>
        <i style={{height:'50px'}} class="fa-brands fa-github fa-2x"></i>
        <i style={{height:'50px'}} class="fa-brands fa-facebook fa-2x"></i>
        <i style={{height:'50px'}} class="fa-brands fa-instagram fa-2x"></i>
        <i style={{height:'50px'}} class="fa-brands fa-linkedin fa-2x"></i>
        </div>
      </div>
    </div>
    <p className='text-center'>Copyright &copy; 2024 Project Fair. Build with React</p>
    </div>
  )
}

export default Footer