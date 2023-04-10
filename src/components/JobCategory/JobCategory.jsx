import React from 'react';
import './JobCategory.css'



const JobCategory = ({category}) => {
    const {position,numPositions,icon} = category;
    return (
        <div className='category'>
         <img src={icon} alt="" />
         <p>{position}</p>
         <p>{numPositions}</p>
        </div>
    );
};

export default JobCategory;