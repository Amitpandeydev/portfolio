import React from 'react'
import Navbar from "../component/Navbar";
import Footer from "../component/Footer"

import { Link } from "react-router-dom";
export default function Home() {
  return (
<>
     <Navbar />
     
<div>

 
      <section className="bg-dark text-light py-5">
        <div className="container text-center">
          <h1 className="display-4 fw-bold">
            Hi, we’re NovaStack
          </h1>
          <p className="lead mt-3">
            we build modern websites & web applications using React.
          </p>

          <div className="mt-4">
            <a href="/Projects" className="btn btn-primary me-3">
              View Projects
            </a>
            <a href="/Contact" className="btn btn-outline-light">
              Contact us
            </a>
          </div>
        </div>
      </section>


      <section className="py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-3">About Me</h2>
          <p className="text-muted">
          We are a passionate frontend team dedicated to creating clean, responsive, and user-centric web applications.
          </p>
        </div>
      </section>


      <section className="bg-light py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-4">Skills</h2>
          <div className="row text-center">
            <div className="col-md-3">HTML</div>
            <div className="col-md-3">CSS</div>
            <div className="col-md-3">JavaScript</div>
            <div className="col-md-3">React</div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">Projects</h2>
          <p className="text-muted">
            Here are some of our featured projects.
          </p>
          <a href="/Projects" className="btn btn-dark mt-3">
            See All Projects
          </a>
        </div>
      </section>

    </div>

<Footer/>
    
    </>
  )
}

