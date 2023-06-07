import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import 'react-multi-carousel/lib/styles.css';
import product from "../../assets/img/home/product.png";
import warranty from "../../assets/img/home/quality.png";
import subscription from "../../assets/img/home/subscription.png";
import claim from "../../assets/img/home/claim.png";
import status from "../../assets/img/home/status.png";


    function UserDashboard() {
 
      const [users, setUsers] = useState([])


      const url = `https://jacanawarranty.com/wp-json/gform/v2/user_dashboard`;
      const token = 'Bearer xuE0sEGHV9UZ8mbpvgJkJXorO';
    
      
      const fetchUserData = () => {
        fetch(url, {
          headers: {
            Authorization: token,
          },
        })
          .then(response => {
            return response.json()
          })
          .then(data => {
            setUsers(data)
          })
      }
    
      useEffect(() => {
        fetchUserData()
      }, [])

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



  <div>
      {users.length > 0 && (
        <ul>
          {users.map(data => (
            <li key={data.id}>{data.name}</li>
          ))}
        </ul>
      )}
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
 

  
      </>
      )
  }
  

export default UserDashboard;

