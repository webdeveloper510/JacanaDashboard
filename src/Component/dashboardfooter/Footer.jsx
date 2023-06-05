
import React from "react";
import {NavLink} from 'react-router-dom';
import logo from '../../assets/img/home/jacanalogo.png';
import { AiFillFacebook } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import accept from '../../assets/img/home/payment.jpg';

class Footer extends React.Component {
  render() {

    return(
        <>
        

        <footer className="footer-section">
        <div className="container">
  <div className="row">
    <div className="col-md-3 col-12">
    <NavLink to="/">
                    <img src={logo} alt="logo" className="footer-logo" />
                    </NavLink>

                    <p>Jacana Warranty offers customers accident coverage and product breakdown coverage for the consumer good.</p>

                    <div className="social-links">
                    <NavLink to="https://www.facebook.com/JacanaWarranty/"><AiFillFacebook/></NavLink> 
                    <NavLink to="https://twitter.com/JacanaApp/"><AiFillTwitterSquare/></NavLink> 
                    </div>

    </div>
    <div className="col-md-3 col-4 col-12">
    <h3>Most Popular</h3>
    <nav id="navbar" className="footer-navbar">
    <ul>
                    <li>
                      <NavLink className="" to="/">Home</NavLink>
                    </li>
                    <li>
                      <NavLink to="/userdashboard/userprofile"> Profile page</NavLink>
                      </li>
                    <li>
                      <NavLink to="/userdashboard/savecards"> Saved Cards</NavLink>
                      </li>
                      <li>
                      <NavLink to="/faq"> FAQ's</NavLink>
                      </li>
                      <li>
                      <NavLink to="/userdashboard/home"> User Dashboard</NavLink>
                      </li>
                      <li>
                      <NavLink to="/blog"> Blog</NavLink>
                      </li>
                  </ul>
                
                </nav> 
    </div>
    <div className="col-md-3 col-4 col-12">
    <h3>Electronics</h3>
    <nav id="navbar" className="footer-navbar">
                  <ul>
                    <li>
                      <NavLink className="" to="/">Tablets</NavLink>
                    </li>
                    <li>
                      <NavLink to="Coverage"> Camera/Camcorder</NavLink>
                      </li>
                    <li>
                      <NavLink to="Savings"> Laptops</NavLink>
                      </li>
                      <li>
                      <NavLink to="Coverage"> Desktops</NavLink>
                      </li>
                      <li>
                      <NavLink to="Plans"> MP3 Player</NavLink>
                      </li>
                      <li>
                      <NavLink to="/blog"> PC Peripheral </NavLink>
                      </li>
                      <li>
                      <NavLink to="/blog"> Portable Products </NavLink>
                      </li>
                      <li>
                      <NavLink to="/blog"> Video Gaming </NavLink>
                      </li>
                  </ul>
                
                </nav> 
    </div>
    <div className="col-md-3 col-4 col-12">
    <h3>Misc</h3>
    <nav id="navbar" className="footer-navbar">
                  <ul>
                    <li>
                      <NavLink className="" to="/">Car Mobile</NavLink>
                    </li>
                    <li>
                      <NavLink to="Coverage"> GPS & Navigation</NavLink>
                      </li>
                    <li>
                      <NavLink to="Savings"> Jewelry</NavLink>
                      </li>
                      <li>
                      <NavLink to="Coverage"> Personal Care</NavLink>
                      </li>
                      <li>
                      <NavLink to="Plans"> Toys</NavLink>
                      </li>
                      <li>
                      <NavLink to="/blog">Watches</NavLink>
                      </li>
                     
                  </ul>
                
                </nav> 
    </div>
    </div>

    <div className="row">
    <div className="col-md-3 col-4 col-12">
  
    <h3>Home Theater/TV's</h3>
    <nav id="navbar" className="footer-navbar">
                  <ul>
                    <li>
                      <NavLink className="" to="/">TV's</NavLink>
                    </li>
                    <li>
                      <NavLink to="Coverage"> DVD Media</NavLink>
                      </li>
                    <li>
                      <NavLink to="Savings"> Home Theater</NavLink>
                      </li>
                     
                  </ul>
                
                </nav> 
                

    </div>
    <div className="col-md-3 col-4 col-12">
    <h3>Sports Equipment</h3>
    <nav id="navbar" className="footer-navbar">
                  <ul>
                    <li>
                      <NavLink className="" to="/">Cycling</NavLink>
                    </li>
                    <li>
                      <NavLink to="Coverage"> Fitness Equipment</NavLink>
                      </li>
                    <li>
                      <NavLink to="Savings"> Golf</NavLink>
                      </li>
                     
                  </ul>
                
                </nav> 
    </div>
    <div className="col-md-3 col-4 col-12">
    <h3>Brand</h3>
    <nav id="navbar" className="footer-navbar">
                  <ul>
                    <li>
                      <NavLink className="" to="/">Samsung mobile</NavLink>
                    </li>
                    <li>
                      <NavLink to="Coverage"> Iphone mobile</NavLink>
                      </li>
                  </ul>
                
                </nav> 
    </div>
    <div className="col-md-3 col-4 col-12">
    <h3>Home/Garden</h3>
    <nav id="navbar" className="footer-navbar">
                  <ul>
                    <li>
                      <NavLink className="" to="/">Floor care</NavLink>
                    </li>
                    <li>
                      <NavLink to="Coverage">Furniture</NavLink>
                      </li>
                    <li>
                      <NavLink to="Savings"> Home Security</NavLink>
                      </li>
                      <li>
                      <NavLink to="Coverage"> Housewares</NavLink>
                      </li>
                      <li>
                      <NavLink to="Plans"> Lawn & Garden</NavLink>
                      </li>
                  </ul>
                
                </nav> 
    </div>

 
  <div className="row row-margin">
<div className="col-md-3 col-12">
<img src={accept} alt="accept" className="footer-payment" />
</div>
<div className="col-md-9 col-12">
<nav id="navbar" className="navbar">
<ul>
<li>
                      <NavLink className="active" to="/user_dashboard">Dashboard</NavLink>
                    </li>
                    <li>
                      <NavLink to="/userdashboard/userprofile"> Profile page</NavLink>
                      </li>
                    <li>
                      <NavLink to="/userdashboard/savecards"> Saved Cards</NavLink>
                      </li>
                      <li>
                      <NavLink to="/faq"> FAQ's</NavLink>
                      </li>
                      <li>
                      <NavLink to="/blog"> Blog</NavLink>
                      </li>
                  </ul>
                
                </nav> 
</div>
</div>
<hr></hr>
  <div className="row">
<div className="col-md-12">
<p className="copyright-text">© Copyright Jacana Warranty 2023. All rights reserved. | Designed by HisVision</p>
</div>
</div>
    </div>

    </div>

          </footer>

    </>
    )
}
}

export default Footer; 
