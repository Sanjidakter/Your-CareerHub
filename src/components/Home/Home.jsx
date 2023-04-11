import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import img from "./../../assets/All Images/P3OLGJ1 copy 1.png";
import Circular from "../Circular/Circular";
import "./Home.css";
import JobCategory from "../JobCategory/JobCategory";
import AppliedJobs from "../AppliedJobs/AppliedJobs";
import JobDetails from "../JobDetails/JobDetails";
import { addToDb } from "../../utilities/fakedb";


const Home = () => {
  const circulars = useLoaderData();
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch("/jobcategory.json");
        const data = await response.json();
        setCategory(data);
      } catch (error) {
        console.log(error);
      }
    };
    loadData();
  }, []);

  // ///for show more////////
  const [showMore, setShowMore] = useState(false);

  const handleClick = () => {
    setShowMore(true);
  };
  // //end///////

  return (
    <div className="container">
     
          <div className="intro">
            <div className="intro-paragrapgh">
              <h2>
                One Step <br /> Closer To Your <br />{" "}
                <span style={{ color: "#7E90FE" }}>Dream Job</span>
              </h2>
              <p>
                Explore thousands of job opportunities with all the information
                you need. Its your future. Come find it. Manage all your job
                application from start to finish.
              </p>
              <button>Get started</button>
            </div>
            <div>
              <img src={img} alt="" />
            </div>
          </div>
          <div className="job-category ">
            <div style={{ textAlign: "center", verticalAlign: "center" }}>
              <h2>Job Category List</h2>
              <p>
                <small>
                  Explore thousands of job opportunities with all the
                  information you need. Its your future
                </small>
              </p>
            </div>
            <div className="category-container">
              {category.map((category) => (
                <JobCategory
                  key={category.id}
                  category={category}
                ></JobCategory>
              ))}
            </div>
          </div>
          <div className="featured-jobs">
            <div style={{ textAlign: "center", verticalAlign: "center" }}>
              <h2>Featured Jobs</h2>
              <p>
                <small>
                  Explore thousands of job opportunities with all the
                  information you need. Its your future
                </small>
              </p>
            </div>
            <div className="circulars-container">
              {circulars.map((circular) => (
                <Circular key={circular.id} circular={circular}></Circular>
              ))}
            </div> 
            <button style={{ backgroundColor: "#7E90FE", marginLeft: "600px" }}>
              See More
            </button> 

            {/* show more */}
{/*             
            <Circular circulars={circulars} showMore={showMore} />
      {!showMore && (
        <button onClick={handleClick}>See more</button>
      )} */}

      {/* ********** */}
        
      </div>
    </div>
  );
};

export default Home;
