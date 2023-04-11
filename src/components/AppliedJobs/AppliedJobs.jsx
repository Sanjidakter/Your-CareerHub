import React, { useEffect, useState } from "react";
import { getJobCart } from "../../utilities/fakedb";
import Job from "../Job/Job";

const AppliedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("/jobcirculars.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  useEffect(() => {
    const storedCart = getJobCart();
    const savedCart = [];
    // step 1: get id of the addedProduct
    for (const id in storedCart) {
      // step 2: get product from products state by using id
      const addedJobs = jobs.find((job) => job.id === id);
      if (addedJobs) {
        // step 4: add the added product to the saved cart
        savedCart.push(addedJobs);
      }
      // console.log('added Product', addedProduct)
    }
    // step 5: set the cart
    setCart(savedCart);
  }, [jobs]);

  // state immutable set diye change kora lagbe
  const handleAddToCart = (job) => {
    let newCart = [];
    //    if product doesn't exist in the cart , then set quantity = 1
    //  if exist update quantity by 1
    const exists = cart.find((pd) => pd.id === product.id);
    if (!exists) {
      product.quantity = 1;
      newCart = [...cart, product];
    }
    setCart(newCart);
    addToDb(job.id);
  };
//////////Filter//////////
// const ShopList = () => {
//     const [selectedJobType, setSelectedJobType] = useState("all");
  
//     const jobTypes = ["all", "remote", "offsite"];
  
//     const handleClick = () => {
//       const currentIndex = jobTypes.indexOf(selectedJobType);
//       const nextIndex = (currentIndex + 1) % jobTypes.length;
//       setSelectedJobType(jobTypes[nextIndex]);
//     };
  
//     const filteredShops = selectedJobType === "all" ? cart : cart.filter(shop => shop.job_type
//         .includes(selectedJobType));
  
//     }

// /////////////End of filter////////

  console.log(cart);
  return (
    <div className="job-container">
      {/* <h2>Applied jobs:{cart?.length} </h2> */}
      <h2 style={{ textAlign: "center", verticalAlign: "center" }}>
        Applied Jobs
      </h2>
      

      {cart.map((item) => (
        <Job key={item.id} item={item}></Job>
      ))}
    </div>
  );
};

export default AppliedJobs;
