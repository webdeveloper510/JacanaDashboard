import React, { useEffect, useState } from 'react';
//import '../../shim.js';
//import jwt from 'jsonwebtoken';
import jwt_decode from 'jwt-decode';
import crypto from 'crypto-js';
import 'react-multi-carousel/lib/styles.css';

function Home() {
  const CryptoJS = require('crypto-js');
  const jwtDecode = require('jwt-decode');

  // Secret key
  const secretKey = 'dszlpys0ro345ci2ux8jxewp736zdxty';
  
  // Function to verify HMAC signature
  const verifyHmacSignature = (token, secretKey) => {
    const [encodedHeader, encodedPayload, signature] = token.split('.');
    const encodedData = `${encodedHeader}.${encodedPayload}`;
  
    const calculatedSignature = CryptoJS.HmacSHA256(encodedData, secretKey).toString();
    return calculatedSignature === signature;
  };
  
  // Example usage
  const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6IndlYm1hc3RlckBqYWNhbmF3YXJyYW50eS5jb20iLCJpZCI6MjExNiwicm9sZSI6WyJjdXN0b21lciJdLCJ1c2VyX3Rva2VuIjoiZGQ0NWU0ZTUxYzQ1YWM4MmRjMWQifQ.l3ucwla6KZq8GOAL2S5ruajmBegAN5EYzUcWSi_4FyY";
  
  // Decode the token
  const decoded = jwtDecode.default(token);
  const { email, role, user_token } = decoded;
  const payload = JSON.stringify(decoded);
  
  const isSignatureValid = verifyHmacSignature(token, secretKey);
  
  console.log('Payload:', payload);
  console.log('Is Valid:', isSignatureValid ? 'Yes' : 'No');

  if (isSignatureValid) {
    // Save payload data in session storage
  sessionStorage.setItem('email', email);
  sessionStorage.setItem('role', role);
  sessionStorage.setItem('user_token', user_token);
  
    // Redirect to user_dashboard page
    window.location.href = '/user_dashboard';
  }
  return (
    <>
     <div id="loftloaderwrappernew"></div>
    </>
  );
}

export default Home;