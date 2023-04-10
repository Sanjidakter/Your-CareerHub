import React from 'react';
import './JobCategory.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileInvoice,
  faMicrochip,
  faLightbulb,
  faShareFromSquare
} from "@fortawesome/free-solid-svg-icons";


const JobCategory = ({circular}) => {
    const {department,num_posts_available,icons} = circular;
    return (
        <div className='category'>
         {/* <FontAwesomeIcon icon={faFileInvoice} /> */}
         <p>{department}</p>
         <p>{num_posts_available}</p>
        </div>
    );
};

export default JobCategory;