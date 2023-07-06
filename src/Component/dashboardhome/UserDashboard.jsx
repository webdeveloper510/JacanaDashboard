import React, { useEffect , useState} from 'react';
import 'react-multi-carousel/lib/styles.css';
import product from "../../assets/img/home/product.png";
import warranty from "../../assets/img/home/quality.png";
import subscription from "../../assets/img/home/subscription.png";
import claim from "../../assets/img/home/claim.png";
import status from "../../assets/img/home/status.png";
import { Form } from 'react-bootstrap';


    function UserDashboard() {
      const [apiLoading, setApiLoading] = useState(false);
      const [apiData, setApiData] = useState(null);
      const [loading, setLoading] = useState(true);
      const [selectedOption, setSelectedOption] = useState('');
      const [currentPage, setCurrentPage] = useState(1);
      const [itemsPerPage, setItemsPerPage] = useState(10);
      
      useEffect(() => {
        setApiLoading(true); // Set apiLoading to true before making the API request
        const email = sessionStorage.getItem("email");
        const user_token = sessionStorage.getItem("user_token");
        const apiUrl = "https://jacanawarranty.com/wp-json/react/v1/home";
        const params = {
          email: email,
          user_token: user_token,
          page: currentPage || 1, // Set the default value as 1 if currentPage is falsy
          page_size: itemsPerPage || 10, // Set the default value as 10 if itemsPerPage is falsy
        };
        const queryString = new URLSearchParams(params).toString();
        const url = `${apiUrl}?${queryString}`;
        const headers = {
          Authorization: `Bearer dszlpys0ro345ci2ux8jxewp736zdxty`,
        };
      
        fetch(url, { headers })
          .then(response => response.json())
          .then(data => {
            console.log(data); // Check the structure and content of the API response
            setApiData(data);
            setLoading(false);
          })
          .catch(error => {
            console.error("API request failed:", error);
            setLoading(false); // Set loading to false in case of an error
          });
      }, [currentPage, itemsPerPage]);
      
      const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
      };
      
      const handlePaginationChange = (event) => {
        const selectedItemsPerPage = parseInt(event.target.value);
        setItemsPerPage(selectedItemsPerPage);
        setCurrentPage(1);
      
        setApiLoading(true); // Set apiLoading to true when changing items per page
      
        // Simulate a loading state with a delay of 500 milliseconds
        setTimeout(() => {
          setApiLoading(false); // Set apiLoading to false after the delay
        }, 500);
      };
       
      const itemsPerPageOptions = [10, 20, 30 , 40 , 50]; // Define the options for items per page
      
      let filteredData = [];
      if (apiData && apiData.data && Array.isArray(apiData.data.data)) {
        filteredData =  apiData.data.data;
      }
      
      // Calculate the total number of pages based on the filtered data and items per page
      const totalPages = Math.ceil(apiData && apiData.data.data ? apiData.data.total_count / itemsPerPage : 0);


      // Calculate the index of the last and first item on the current page
      const indexOfLastItem = currentPage * itemsPerPage;
      const indexOfFirstItem = indexOfLastItem - itemsPerPage;
      
      // Get the current items for the current page
      const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
      
      console.log("Current-table data" ,filteredData);
      
      // Update the current page when changing pages
      const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
      };
      
      const handlePreviousPage = () => {
        if (currentPage > 1) {
          setCurrentPage(currentPage - 1);
        }
      };
      
      const handleNextPage = () => {
        if (currentPage < totalPages) {
          setCurrentPage(currentPage + 1);
          }
        console.log(currentPage);
      };
      // Generate the page numbers for pagination
      const pageNumbers = [];
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
   

      return(
          <>

<div className="dashboard-top-section">
  <div className="container">
    <div className="row">
    
     <h1>UserDashboard</h1>
     
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
 <div>
    {loading ? (
      // Show the loader while loading is true
      <div id="loftloaderwrappernew-inner">
        {/* Your loader content here */}
      </div>
    ) : (
      // Once loading is false, display the API data
      <div>
        <div className='col-md-4 justify-content-end mb-4'>
        <Form>
          <label>Filters</label>
          <Form.Select value={selectedOption} onChange={handleSelectChange}>
            <option value="">All</option>
            <option value="Active">Active</option>
            <option value="Cancelled">Cancelled</option>
            <option value="Suspended">Suspended</option>
            <option value="Refunded">Refunded</option>
          </Form.Select>
        </Form>
</div>
        <p>Total Count: {apiData && apiData.data ? apiData.data.total_count : 0}</p>
        <p>Total pages: {totalPages}</p>
        {/* Pagination */}
  
        <table>
          {/* Render table headers */}
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Order ID</th>
              <th>Term</th>
              <th>Renewal Date</th>
              <th>ID</th>
              <th>Payment Status</th>
              <th>Action</th>
            </tr>
          </thead>

          {/* Render table body */}
          <tbody>
          {filteredData.map((item, index) => (
              <tr key={index}>
                <td>{item.product_name}</td>
                <td>{item.order_id}</td>
                <td>{item.term}</td>
                <td>{item.renewal_date}</td>
                <td>{item.id}</td>
                <td>{item.payment_status}</td> 
                <td>{item.button}</td>
              </tr>
            ))}
          </tbody>
        </table>

      {/* Pagination */}
    <div>
      <label>Current Page: {currentPage}</label>

      <div>

        
    {/* Pagination select */}
    <select value={itemsPerPage} onChange={handlePaginationChange}>
      {itemsPerPageOptions.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>

      {/* Previous button */}
    <button onClick={handlePreviousPage} disabled={currentPage === 1}>
      Previous
    </button>

    {/* Next button */}
    <button onClick={handleNextPage} disabled={currentPage === totalPages}>
      Next
    </button>

</div>
      
    </div>


      </div>
    )}
  </div>




  </div>
  </div>
  </div>


      </>
      )
  }
  

export default UserDashboard;

