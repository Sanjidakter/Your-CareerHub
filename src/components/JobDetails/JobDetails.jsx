import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import "./JobDetails.css";
import AppliedJobs from "../AppliedJobs/AppliedJobs";
import { addToDb } from "../../utilities/fakedb";
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const JobDetails = () => {
  const [singleJobData, setSingleJobData] = useState({});
  const { id: jobId } = useParams();
  //  console.log(jobId);

  console.log(singleJobData);

  useEffect(() => {
    const loadData = async () => {
      try {
        const responseFeatured = await fetch("/jobcirculars.json");
        const featuredJobData = await responseFeatured.json();
        const foundData = featuredJobData.find(
          (singleData) => singleData.id === jobId
        );
        console.log(foundData);
        setSingleJobData(foundData);
      } catch (error) {
        console.log(error);
      }
    };
    loadData();
  }, [jobId]);

  const [cart, setCart] = useState([]);

  const handleAddToCart = (id) => {
    console.log(singleJobData);
    addToDb(id);
  };

// toaster///////
const [clickCount, setClickCount] = useState(0);
  const [showMessage, setShowMessage] = useState(false);

  const handleClick = () => {
    setClickCount(clickCount + 1);
    if (clickCount > 0) {
      setShowMessage(true);
    }
  };
// ///end//////

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Job Details</h2>
      <div className="jobdetails-container">
        <div className="job-description">
          <h3>Job Description: </h3>
          <p>
            A UI/UX (User Interface/User Experience) designer is responsible for
            designing and creating engaging and effective interfaces for
            software and web applications. This includes designing the layout,
            visual design, and interactivity of the user interface.
          </p>
          <h3>Job Responsibility</h3>
          <p>
            Collaborating with cross-functional teams: UI/UX designers often
            work closely with other teams, including product management,
            engineering, and marketing, to ensure that the user interface is
            aligned with business and technical requirements. You will need to
            be able to effectively communicate your design ideas and gather
            feedback from other team members.
          </p>
          <h3>Educational Requirements:</h3>
          <p>Bachelor degree to complete any reputational university.</p>
          <h3>Experiences:</h3>
          <p>2-3 Years in this field.</p>
        </div>

        <div className="job-details">
          <h3>Job Details</h3>
          <hr />
          <p>
            Salary :{" "}
            <span style={{ color: "#757575" }}>{singleJobData?.salary}</span>
          </p>
          <p>
            Job Title :{" "}
            <span style={{ color: "#757575" }}>
              {singleJobData?.job_position}
            </span>
          </p>
          <h3>Contact Information</h3>
          <hr />
          <p>
            Phone: <span style={{ color: "#757575" }}> 01750-00 00 00</span>
          </p>
          <p>
            Email: <span style={{ color: "#757575" }}>info@gmail.com</span>
          </p>
          <p>
            Adress :{" "}
            <span style={{ color: "#757575" }}>{singleJobData?.location}</span>
          </p>
        
          {/* <button onClick={() =>{handleAddToCart(singleJobData?.id)}}>
            Apply Now
          </button> */}

          <button onClick={()=>{handleClick();handleAddToCart(singleJobData?.id);}}>Apply Now</button>
          {showMessage && <p style={{color:"red"}}>Already Applied!!!</p>}
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
