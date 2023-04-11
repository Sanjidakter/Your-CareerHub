import React from "react";
import "./Job.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faCircleDollarToSlot,
} from "@fortawesome/free-solid-svg-icons";

const Job = ({ item }) => {
  // const { id,logo, company_name, job_position, job_type, location, salary } = cart;
  //   console.log(item.company_name);
  return (
    <div
      className="job-container"
      style={{ marginTop: "5%", border: "2px solid", padding: "10px" }}
    >
      <div className="job-descriptions">
        <img
          style={{ marginRight: "5%", marginTop: "3%" }}
          src={item?.logo}
          alt=""
        />
        <div style={{ width: "30%" }}>
          <p style={{ fontWeight: "800", fontSize: "24px" }}>
            {item?.job_position}
          </p>
          <p style={{ color: "#757575" }}>{item?.company_name}</p>
          <p
            style={{
              display: "flex",
              gap: "20px",
              marginBlockEnd: "0 !important",
              marginBlockStart: "0 !important",
            }}
          >
            <p style={{ border: "1px solid #7E90FE", padding: "5px" }}>
              {item?.job_type[0]}
            </p>
            <p style={{ border: "1px solid #7E90FE", padding: "5px" }}>
              {item.job_type[1]}
            </p>
          </p>
          <p
            style={{ display: "flex", gap: "20px" }}
            className="location-salary"
          >
            <p style={{ width: "60%" }}>
              <FontAwesomeIcon
                icon={faLocationDot}
                style={{ marginRight: "8px" }}
              />
              {item?.location}
            </p>
            <p>
              <FontAwesomeIcon icon={faCircleDollarToSlot} style={{}} />
              Salary : {item?.salary}
            </p>
          </p>
        </div>
        <button
          style={{
            backgroundColor: "#7E90FE",
            marginLeft: "40%",
            marginTop: "5%",
            width: "12%",
            height: "5%",
          }}
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default Job;
