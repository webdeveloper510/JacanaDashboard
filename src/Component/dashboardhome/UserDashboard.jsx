import React, { useEffect , useState} from 'react';
import Cookies from 'js-cookie';
import 'react-multi-carousel/lib/styles.css';
import product from "../../assets/img/home/product.png";
import warranty from "../../assets/img/home/quality.png";
import subscription from "../../assets/img/home/subscription.png";
import claim from "../../assets/img/home/claim.png";
import status from "../../assets/img/home/status.png";


    function UserDashboard() {
      
      const email = sessionStorage.getItem('email');
const userToken = sessionStorage.getItem('user_token');

// Set the API URL
const apiUrl = 'https://jacanawarranty.com/wp-json/react/v1/user_dashboard';

// Set the parameters
const params = {
  email: email,
  user_token: userToken,
  status: 'Active', // Change to the desired status value or remove if not required
  page: 1, // Change to the desired page number or remove if not required
  page_size: 10, // Change to the desired page size or remove if not required
};

// Build the query string with the parameters
const queryString = Object.keys(params)
  .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
  .join('&');

// Set the request headers
const headers = {
  Authorization: `Bearer dszlpys0ro345ci2ux8jxewp736zdxty`,
};

// Fetch the API
fetch(`${apiUrl}?${queryString}`, {
  method: 'GET',
  headers: headers,
})
  .then(response => response.json())
  .then(data => {
    // Handle the API response data here
    console.log(data);
  })
  .catch(error => {
    // Handle any errors that occur during the API request
    console.error(error);
  });

      return(
          <>

<div className="dashboard-top-section">
  <div className="container">
    <div className="row">
    
     <h1>UserDashboard</h1>
     
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


  <div className="dashboard-third-section">
  <div className="container">
  <div className="row justify-content-around">
 

  </div>
  </div>
  </div>


      </>
      )
  }
  

export default UserDashboard;

