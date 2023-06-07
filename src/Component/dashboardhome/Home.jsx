import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'react-multi-carousel/lib/styles.css';

function DashboardHome() {

  const [userId, setUserId] = useState(null); // Initialize userId state
  const navigate = useNavigate();

  const urlParams = new URLSearchParams(window.location.search);
  console.log('URL params:', urlParams.toString());
  const userIdParam = urlParams.get('user_id');
  //console.log('userIdParam:', userIdParam);

  
  if (userIdParam) {
    // Make the API request with the user ID from the URL
    const url = `https://jacanawarranty.com/wp-json/gform/v2/user_authentication/?user_id=${userIdParam}`;
    const token = 'Bearer xuE0sEGHV9UZ8mbpvgJkJXorO';
  
    fetch(url, {
      headers: {
        Authorization: token,
      },
    })
    .then(response => {
      if (!response.ok) {
        window.location.href = 'https://www.jacanawarranty.com/';
        throw new Error('Failed to fetch user ID');
       
      }
      return response.json();
    })
    .then(data => {
      if (data && data.valid) {
        // Redirect to https://www.jacanawarranty.com/
        window.location.href = 'https://www.jacanawarranty.com/';
      } else {
        // Redirect to the user_dashboard component
        const componentPath = '/user_dashboard'; // Set the desired component path
        navigate(componentPath);
         // Remove the user ID from the URL
         window.history.replaceState(null, null, componentPath);
      }
    })
    .catch(error => {
      console.error(error);
    });
  } else {
    // Redirect to https://www.jacanawarranty.com/ if user ID is not provided in the URL
    window.location.href = 'https://www.jacanawarranty.com/';
  }


  // Render the component with the fetched data
  return (
    <>

<div>
      <h1>User ID: {userId}</h1>

    </div>


<div id="loftloaderwrappernew">Loading...</div>
    </>
  );
}

export default DashboardHome;