import React, { useEffect, useState } from 'react';
//import jwt from 'jsonwebtoken';
import jwt_decode from "jwt-decode";
import 'react-multi-carousel/lib/styles.css';

function Home() {
 // Assuming you have the following JWT token
const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6IndlYm1hc3RlckBqYWNhbmF3YXJyYW50eS5jb20iLCJpZCI6MjExNiwicm9sZSI6WyJjdXN0b21lciJdLCJ1c2VyX3Rva2VuIjoiZDA3ODY3ZDY2ZGU0NTc0ZGJiMzcifQ.pdy-uq3y3kDaiRU_Qj5rki8sHGBTew3BvapR-h7KOoc";

// Decode the token
const jwtDecode = require("jwt-decode");
const decoded = jwt_decode(token);

// Extract the email, role, and user_token from the decoded payload
const email = decoded.email;
const role = decoded.role;
const user_token = decoded.user_token;

// Save the values in session storage
sessionStorage.setItem("email", email);
sessionStorage.setItem("role", role);
sessionStorage.setItem("user_token", user_token);

console.log("payload:", decoded);
// Redirect to the user_dashboard page
// Delay the redirection by 3 seconds
setTimeout(() => {
  // Redirect to the user_dashboard page
  window.location.href = "/user_dashboard";
}, 3000); // 3000 milliseconds = 3 seconds

  return (
    <>
     <div id="loftloaderwrappernew"></div>
    </>
  );
}

export default Home;