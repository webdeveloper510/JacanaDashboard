import React, { useEffect , useState} from 'react';
import Cookies from 'js-cookie';
import 'react-multi-carousel/lib/styles.css';
import product from "../../assets/img/home/product.png";
import warranty from "../../assets/img/home/quality.png";
import subscription from "../../assets/img/home/subscription.png";
import claim from "../../assets/img/home/claim.png";
import status from "../../assets/img/home/status.png";


    function SavedCard() {
      const [loading, setLoading] = useState(true);
      const [apiData, setApiData] = useState({ data: [] });
      
      useEffect(() => {
        const email = Cookies.get('email');
        const userToken = Cookies.get('user_token');
        const roles = Cookies.get('roles');
      
        console.log('Email:', email);
        console.log('User Token:', userToken);
        console.log('Roles:', roles);
      
      if (!email || !userToken || !roles || email === 'undefined' || userToken === 'undefined' || roles === 'undefined') {
          // Redirect to the homepage
          setTimeout(() => {
            window.location.href = 'https://www.jacanawarranty.com/';
          }, 2000); // Delay of 3000 milliseconds (3 seconds)
        } else {
          
        }
      }, []);


      return(
          <>

<div className="dashboard-top-section">
  <div className="container">
    <div className="row">
    
     <h1>Saved Cards</h1>
     
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
  

export default SavedCard;

