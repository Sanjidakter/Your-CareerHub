import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './JobDetails.css'

const JobDetails = () => {
    const jobs= useLoaderData();
     const job = jobs[0];
    console.log(job);
    return (
        <div className='jobdetails-container'>
            <div className='job-description'>
                <h3>Job Description: </h3>
                <p>A UI/UX (User Interface/User Experience) designer is responsible for designing and creating engaging and effective interfaces for software and web applications. This includes designing the layout, visual design, and interactivity of the user interface.</p>
                <h3>Job Responsibility</h3>
                <p>Collaborating with cross-functional teams: UI/UX designers often work closely with other teams, including product management, engineering, and marketing, to ensure that the user interface is aligned with business and technical requirements. You will need to be able to effectively communicate your design ideas and gather feedback from other team members.</p>
                <h3>Educational Requirements:</h3>
                <p>Bachelor degree to complete any reputational university.</p>
                <h3>Experiences:</h3>
                <p>2-3 Years in this field.</p>

            </div>
           
         <div className='job-details'>
          <h3>Job Details</h3>
          <hr />
          <p>Salary : <span style={{color:"#757575"}}>{job.salary}</span></p>
          <p>Job Title : <span style={{color:"#757575"}}>{job.job_position}</span></p>
          <h3>Contact Information</h3>
          <hr />
          <p>Phone: <span style={{color:"#757575"}}> 01750-00 00 00</span></p>
          <p>Email:  <span style={{color:"#757575"}}>info@gmail.com</span></p>
          <p>Adress : <span style={{color:"#757575"}}>{job.location}</span></p>

         </div>
        </div>
    );
};

export default JobDetails;