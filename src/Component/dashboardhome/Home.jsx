import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'react-multi-carousel/lib/styles.css';

function DashboardHome() {
  const navigate = useNavigate();

  useEffect(() => {
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
      console.log(response.ok); // Add this line to check the value of response.ok

      if (!response.ok) {
        window.location.href = 'https://www.jacanawarranty.com/';
      } else {
        const componentPath = '/user_dashboard'; // Set the desired component path
        navigate(componentPath);

        // Remove the user ID from the URL
        window.history.replaceState(null, null, componentPath);
      }
      return response.json();
    })
      .finally(() => {
        // Set loading state to false when the request is completed
        // this.setState({ loading: false }); // You may not need this line anymore
      });

    // Update the URL with the user ID
    window.history.replaceState(null, null, `/user_id=${userId}`);
  }, [navigate]);

  // Rest of your component code

  return <div id="loftloaderwrappernew">Loading...</div>; // Render the loader while loading
}
export default DashboardHome;