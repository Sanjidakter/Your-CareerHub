import React from "react";
import "./Circular.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faCircleDollarToSlot,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Circular = ({ circular,showMore  }) => {
  const { id,logo, company_name, job_position, job_type, location, salary } = circular;
    const navigate = useNavigate();
  return (
    <div className="circular">
      <img src={logo} alt="" />
      <div className="circular-detail">
        <p style={{ fontWeight: "800", fontSize: "24px" }}>{job_position}</p>
        <p style={{ color: "#757575" }}>{company_name}</p>
        <p style={{ display: "flex", gap: "20px", marginBlockEnd: "0 !important",
    marginBlockStart: "0 !important"}}>
          <p style={{ border: "1px solid #7E90FE", padding: "5px" }}>
            {job_type[0]}
          </p>
          <p style={{ border: "1px solid #7E90FE", padding: "5px" }}>
            {job_type[1]}
          </p>
        </p>
        <p
          style={{ display: "flex", gap: "20px",}}
          className="location-salary"
        >
          <p>
            <FontAwesomeIcon icon={faLocationDot} style={{marginRight:"8px"}} />
            {location}
          </p>
          <p>
            <FontAwesomeIcon icon={faCircleDollarToSlot } style={{marginRight:"8px"}} />
            Salary : {salary}
          </p>
        </p>
        <button onClick={()=>navigate(`jobdetails/${id}`)} style={{ backgroundColor: "#7E90FE" }}>View Details</button>
      </div>
    </div>
  );
};

export default Circular;
