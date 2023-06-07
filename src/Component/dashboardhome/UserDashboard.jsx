import React, { useEffect, useState } from "react";
import 'react-multi-carousel/lib/styles.css';
import product from "../../assets/img/home/product.png";
import warranty from "../../assets/img/home/quality.png";
import subscription from "../../assets/img/home/subscription.png";
import claim from "../../assets/img/home/claim.png";
import status from "../../assets/img/home/status.png";


    function UserDashboard() {
 
      const [userData, setUserData] = useState(null); // Initialize userData state

      useEffect(() => {
        const token = 'xuE0sEGHV9UZ8mbpvgJkJXorO'; // Token value
    
        // Fetch the data from the API
        fetch('https://jacanawarranty.com/wp-json/gform/v2/user_dashboard', {
          headers: {
            Authorization: `Bearer ${token}` // Include the token in the Authorization header
          }
        })
          .then(response => {
            console.log(response);
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(data => {
            setUserData(data); // Store the response data in the userData state
          })
          .catch(error => {
            console.error('Error:', error);
            // Handle the error condition if needed
          });
      }, []);


      return(
          <>

<div className="dashboard-top-section">
  <div className="container">
    <div className="row">
    
     <h1>UserDashboard</h1>


     {/* <img src={dashboarduser} className="dashbaord-userimage" alt="dashboard-user"/> */}
     
      </div>
      </div>
  </div>
  
  <div className="dashboard-second-section">
  <div className="container">
    <div className="row justify-content-around">
    
    <div className="col-md-2 each-box-image">
    <h3>PRODUCTS</h3>
    <img src={product} alt="product"/>
    </div>
    <div className="col-md-2 each-box-image">
    <h3>WARRANTY</h3>
    <img src={warranty} alt="warranty"/>
    </div>
    <div className="col-md-2 each-box-image">
    <h3>SUBSCRIPTION</h3>
    <img src={subscription} alt="subscription"/>
    </div>
    <div className="col-md-2 each-box-image">
    <h3>FILE CLAIM</h3>
    <img src={claim} alt="claim"/>
    </div>
    <div className="col-md-2 each-box-image">
    <h3>STATUS</h3>
    <img src={status} alt="status"/>
    </div>
     
      </div>
      </div>
  </div>
 
  {userData && (
        <div>
          <p>Email: {userData.data.email}</p>
          <p>User Token: {userData.data.user_token}</p>
          <p>Status: {userData.data.status}</p>
          <p>Page: {userData.data.page}</p>
          <p>Page Size: {userData.data.page_size}</p>
        </div>
      )}
  
      </>
      )
  }
  

export default UserDashboard;

