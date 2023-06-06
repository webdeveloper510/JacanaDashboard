import {HashRouter as Router, Route, Routes} from 'react-router-dom';
import Home from '../Component/dashboardhome/Home';
import Header from '../Component/dashboardheader/Header';
import Footer from '../Component/dashboardfooter/Footer';
import UserDashboard from '../Component/dashboardhome/UserDashboard';
const Routerpage =()=>{

  
  return(
  <>

  

    <Router>  

    <>
  
    <Header/>
   
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user_dashboard" element={<UserDashboard />} />
      </Routes>
     
   
    <Footer/> 
    </>

   
    </Router>
     
   </>
    
  )
}

export default Routerpage;