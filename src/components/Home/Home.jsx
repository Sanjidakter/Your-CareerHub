import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import img from  "./../../assets/All Images/P3OLGJ1 copy 1.png"
import Circular from "../Circular/Circular";
import "./Home.css";

const Home = () => {
  const circulars = useLoaderData();
  
  return (
    <div>
        <div className="intro">
            <div className="intro-paragrapgh">
                <h2>One Step <br /> Closer To Your <br /> <span style={{color:"#7E90FE"}}>Dream Job</span></h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button>Get started</button>
            </div>
            <div>
                <img src={img} alt="" />
            </div>

        </div>
     <div className="featured-jobs">
     <h2>Featured Jobs</h2>
      <p>
        <small>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </small>
      </p>
      <div className="circulars-container">
        {circulars.map((circular) => (
          <Circular key={circular.id} circular={circular}></Circular>
        ))}
      </div>
      <button style={{backgroundColor:"#7E90FE"}}>See More</button>
     </div>
    </div>
  );
};

export default Home;
