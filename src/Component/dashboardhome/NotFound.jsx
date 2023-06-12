import React, { useEffect , useState} from 'react';
import 'react-multi-carousel/lib/styles.css';
import nofound from "../../assets/img/home/no-found.png";
    function NotFound() {


      return(
          <>

<div className="no-found-section">
  <div className="container">
    <div className="row">
    
    <div class="d-flex align-items-center justify-content-center vh-100">
            <div class="text-center">
                <h1 class="display-1 fw-bold"><img src={nofound} alt="no-found" /></h1>
                <p class="fs-3"> <span>Opps!</span> Page not found.</p>
                <p class="lead">
                    The page you're looking for doesn't exist.
                  </p>
                <a href="/" class="btn btn-primary">Go Home</a>
            </div>
        </div>
     
      </div>
      </div>
</div>


      </>
      )
  }
  

export default NotFound;

