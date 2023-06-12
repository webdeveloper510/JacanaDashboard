import React, {useState} from "react";
import {NavLink} from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../assets/img/home/jacanalogo.png';
import logoblue from '../../assets/img/home/logo-blue.png';
// Main CSS File
import '../../assets/css/style.css';

import { RxHamburgerMenu } from "react-icons/rx";


const DashboardHeader =() => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const mobilemenuShow = () => setShow(true);


    return(
        <>

          {/* <!-- ======= Header ======= --> */}
            <header id="header" className="headre">
              <div className="container d-flex justify-content-between align-items-center">

                <div className="logo">
                  <h1 className="text-light">
                  <NavLink to="/">
                    <img src={logo} alt="logo"  />
                    </NavLink>
                  </h1>
                </div>

                <nav id="navbar" className="navbar">
                  <ul>
                  <li>
                      <NavLink className="" to="/user_dashboard">Dashboard</NavLink>
                    </li>
                    <li>
                      <NavLink to="/userprofile"> Profile page</NavLink>
                      </li>
                    <li>
                      <NavLink to="/savecards"> Saved Cards</NavLink>
                      </li>
                      <li>
                      <NavLink to="/faq"> FAQ's</NavLink>
                      </li>
                      <li>
                      <NavLink to="https://www.jacanawarranty.com/blog/"> Blog</NavLink>
                      </li>
                  </ul>
                
                </nav> 
                {/* <!-- .navbar --> */}

                <RxHamburgerMenu onClick={mobilemenuShow}  className="mobile-btn"/>

                <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title> <div className="logo">
                  <h1 className="text-light">
                  <NavLink to="/">
                    <img src={logoblue} alt="logo" className="mobile-logo" />
                    </NavLink>
                  </h1>
                </div></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
         

        <nav id="navbar" className="navbar">
        <ul>
                    <li>
                      <NavLink className="active" to="/user_dashboard">Dashboard</NavLink>
                    </li>
                    <li>
                      <NavLink to="/userprofile"> Profile page</NavLink>
                      </li>
                    <li>
                      <NavLink to="/savecards"> Saved Cards</NavLink>
                      </li>
                      <li>
                      <NavLink to="/faq"> FAQ's</NavLink>
                      </li>
                      <li>
                      <NavLink to="https://www.jacanawarranty.com/blog/"> Blog</NavLink>
                      </li>
                  </ul>
                
                </nav> 
                {/* <!-- .navbar --> */}

                {/* <div className="row">
                  <div className="mobile-app-section">
                <p>Download Jacanna Warranty App</p>
                <img src={app} alt="app-icons"/>
                </div>
                </div> */}
        </Offcanvas.Body>
      </Offcanvas>
                

              </div>
            </header>
            {/* <!-- End Header --> */}

        </>
    )
}


export default DashboardHeader;