import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import 'react-multi-carousel/lib/styles.css';

function DashboardHome() {
  const navigate = useNavigate();
  const urlParams = new URLSearchParams(window.location.search);
  //console.log('URL params:', urlParams.toString());
  const userIdParam = urlParams.get('user_id');
  const [userRole, setUserRole] = useState(null);


  useEffect(() => {
    if (userIdParam) {
      const url = `https://jacanawarranty.com/wp-json/gform/v2/user_authentication/?user_id=${userIdParam}`;
      const token = 'Bearer xuE0sEGHV9UZ8mbpvgJkJXorO';

      fetch(url, {
        headers: {
          Authorization: token,
        },
      })
        .then((response) => {
          if (!response.ok) {
            window.location.href = 'https://www.jacanawarranty.com/';
            throw new Error('Failed to fetch user ID');
          }
          return response.json();
        })
        .then((data) => {
          const userRole= data.data.roles;
        
          if (data && data.valid && userRole === 'customer') {
            window.location.href = 'https://www.jacanawarranty.com/'; 
          } else {

             // Save email and user_token in cookies
            Cookies.set('email', data.data.email);
            Cookies.set('roles', data.data.roles);
            Cookies.set('user_token', data.data.user_token);
           Cookies.set('apiData', JSON.stringify(data)); // Store API data in cookies

            //console.log('cookie email:', Cookies.get('email'));
           // console.log('cookie roles:', Cookies.get('roles'));
           // console.log('cookie user token:', Cookies.get('user_token'));
            
            //console.log('User Token cookie:', Cookies.get('user_token'));
           // console.log('Cookies:', Cookies.get());
           // console.log('Data:', data);
            //console.log('Role:', userRole);
        
            const componentPath = '/user_dashboard'; // Set the desired component path
            navigate(componentPath);
            window.history.replaceState(null, null, componentPath);
          }
        })
    } else {
      // Redirect to https://www.jacanawarranty.com/ if user ID is not provided in the URL
      // window.location.href = 'https://www.jacanawarranty.com/';
    }
  }, [userIdParam, navigate]);


  // Render the component with the fetched data
  return (
    <>

<div id="loftloaderwrappernew">Loading...</div>
    </>
  );
}

export default DashboardHome;