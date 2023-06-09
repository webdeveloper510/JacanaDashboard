import React, { useEffect , useState} from 'react';
import Cookies from 'js-cookie';
import { useLocation } from 'react-router-dom';
import TableComponent from "../dashboardhome/UserDashboardTable";
import 'react-multi-carousel/lib/styles.css';
import product from "../../assets/img/home/product.png";
import warranty from "../../assets/img/home/quality.png";
import subscription from "../../assets/img/home/subscription.png";
import claim from "../../assets/img/home/claim.png";
import status from "../../assets/img/home/status.png";


    function UserDashboard() {
      const [apiData, setApiData] = useState({ data: [] });

     useEffect(() => {
    const email = Cookies.get('email');
    const userToken = Cookies.get('user_token');
    const roles = Cookies.get('roles');
  
    console.log('Email:', email);
    console.log('User Token:', userToken);
    console.log('Roles:', roles);

    if (!email || !userToken || !roles) {
      // Redirect to the homepage or any other appropriate page
    window.location.href = 'https://www.jacanawarranty.com/';
    } else {
      const apiUrl = 'https://jacanawarranty.com/wp-json/gform/v2/user_dashboard';
      const token = 'Bearer xuE0sEGHV9UZ8mbpvgJkJXorO';

      const queryParams = new URLSearchParams({
        email: email,
        user_token: userToken,
        status: 'Active', // Provide the desired status value if applicable
        // page: 1, // Provide the desired page number if applicable
        // page_size: 10, // Provide the desired page size if applicable
      });

      const url = `${apiUrl}?${queryParams.toString()}`;

      fetch(url, {
        method: 'GET',
        headers: {
          Authorization: token,
          // Include any other required headers
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Failed to fetch API data');
          }
          return response.json();
        })
        .then((data) => {
          // Assuming data is an object with a 'data' property that holds the array
          const responseData = data.data.data;

        setApiData({ data: responseData });
          console.log(responseData);
  
        })
        .catch((error) => {
          console.error(error);
        });
    }
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


  <div className="dashboard-third-section">
  <div className="container">
  <div className="row justify-content-around">
  <table>
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Order ID</th>
          <th>Term</th>
          <th>Renewal Date</th>
          <th>ID</th>
          <th>Payment Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
  {apiData.data.length > 0 ? (
    apiData.data.map((item, index) => (
      <tr key={index}>
        <td>{item.product_name}</td>
        <td>{item.order_id}</td>
        <td>{item.term}</td>
        <td>{item.renewal_date}</td>
        <td>{item.id}</td>
        <td>{item.payment_status}</td>
        <td>{item.button}</td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="7">Loading User Details...</td>
    </tr>
  )}
</tbody>
      </table>

  </div>
  </div>
  </div>

  
      </>
      )
  }
  

export default UserDashboard;

