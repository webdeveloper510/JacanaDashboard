import React from "react";
import 'react-multi-carousel/lib/styles.css';
import Blogs from "../blogs/Blogs";
import dashboarduser from "../../assets/img/home/dashboard-top.png";
import product from "../../assets/img/home/product.png";
import warranty from "../../assets/img/home/quality.png";
import subscription from "../../assets/img/home/subscription.png";
import claim from "../../assets/img/home/claim.png";
import status from "../../assets/img/home/status.png";


class DashboardHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null, // Initialize data as null
      loading: true, // Initialize loading state as true
    };
  }

  componentDidMount() {
    // User ID
    const userId = '4lQofg';

    console.log(userId);

    // Construct the URL with the user ID
    const url = `https://jacanawarranty.com/wp-json/gform/v2/user_authentication/?user_id=${userId}`;

    // Make the API request
    fetch(url, {
      headers: {
        Authorization: 'Bearer xuE0sEGHV9UZ8mbpvgJkJXorO' // Provide the token in the Authorization header
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // Handle the response data
        console.log(data);

        // Update the component state with the fetched data
        this.setState({ data, loading: false });
      })
      .catch(error => {
        // Handle any errors that occur during the request
        console.error('Error:', error);
        this.setState({ loading: false });
      });
  }


  render() {
    const { data, loading } = this.state;
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
    <div className="row">
    
    {loading ? (
              // Render a loading message if data is not yet available
              <h4>Loading...</h4>
            ) : data ? (
              // Render the data if available
              <div>
                <h4>Data:</h4>
                <pre>{JSON.stringify(data, null, 2)}</pre>
              </div>
            ) : (
              // Render an error message if data is not available
              <h4>Error: Failed to fetch data</h4>
            )}
      </div>
      </div>
  </div>
  
  
    <div className="blogs-section">
      <div className="container">
       
      <Blogs/>
        
      </div>
  
    </div>
      </>
      )
  }
  }

export default DashboardHome;

