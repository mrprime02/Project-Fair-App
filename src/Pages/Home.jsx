import React, { useEffect, useState } from 'react'
import landingImg from '../assets/images/landing.svg'
import { Link, useNavigate } from 'react-router-dom'
import ProjectCard from '../Components/ProjectCard'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getHomeProjectAPI } from '../Services/allAPI';

function Home() {
  const navigate = useNavigate()
  const [isLoggedIn,setLoggedIn] = useState(false)
  const [allProjects,setAllProjects] = useState([])
  console.log(allProjects);
  const getHomeProjects = async ()=>{
    const result = await getHomeProjectAPI()
    if(result.status===200){
      setAllProjects(result.data)
    }else{
      console.log(result);
    }
  }

  useEffect(()=>{
    getHomeProjects()
    if(sessionStorage.getItem("token")){
      setLoggedIn(true)
    }else{
      setLoggedIn(false)
    }
  },[])

  const handleProjectPage = ()=>{
    if(sessionStorage.getItem("token")){
      navigate('/projects')
    }else{
      toast.warning("Please login to explore our projects!!!")
    }
    
  }
  return (
    <>
    {/* landing page */}
    <div style={{width:'100%',height:'100vh',backgroundColor:'#90ee90'}} className="rounded">
      <div style={{height:'100%'}} className='container'>
        <div style={{height:'100%'}} className="row align-items-center">
          <div className="col-lg-5">
           <h1 style={{fontSize:'80px'}} className='fw-bolder text-light'>
            <i style={{height:'82px'}} className="fa-brands fa-stack-overflow fa-bounce"></i>Project Fair</h1>
            <p>one stop Destination for all Software Development Projects. Where user can add and manage their Projects. As well as access all Projects available in our website... What are you waiting for!!!</p>
           { isLoggedIn?<Link className="btn btn-warning mt-3" to={'/dashboard'}>Manage your Projects<i class="fa-solid fa-arrow-right ms-2"></i></Link>:<Link className="btn btn-warning mt-3" to={'/login'}>Starts to Explore<i class="fa-solid fa-arrow-right ms-2"></i></Link>}
          </div>
          <div className="col-lg-2"/>
          <div className="col-lg-5">
            <img className='img-fluid' src={landingImg} alt="No Image" />
          </div>
        </div>
      </div>
    </div>

    {/* all projects */}
    <div className="projects mt-5">
      <h1 className='text-center mb-5'>Explore Our Projects</h1>
      <marquee>
        <div className="d-flex justify-content-between">
         { allProjects.length>0? allProjects.map((project,index)=>(
           <div key={index} className="me-5">
           <ProjectCard project={project}/>
         </div>
         )):null}
        </div>
      </marquee>
      <div className="text-center">
        <button onClick={handleProjectPage} className='btn btn-link'>View More Projects</button>
      </div>
    </div>
    <ToastContainer autoClose={3000} theme="colored" />
    </>
  )
}

export default Home