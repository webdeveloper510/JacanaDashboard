import {Router, Route, Routes} from 'react-router-dom';
import Home from '../Component/dashboardhome/Home';
import Header from '../Component/dashboardheader/Header';
import Footer from '../Component/dashboardfooter/Footer';
import UserDashboard from '../Component/dashboardhome/UserDashboard';
import UserProfile from '../Component/dashboardhome/UserProfile';
import SavedCard from '../Component/dashboardhome/SavedCard';
import Faq from '../Component/dashboardhome/Faq';
import NotFound from '../Component/dashboardhome/NotFound';
const Routerpage =()=>{
  return(
  <>
 

    <>
  
    <Header/>
   
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user_dashboard" element={<UserDashboard />} />
        <Route path="/userprofile" element={<UserProfile />} />
        <Route path="/savecards" element={<SavedCard />} />
        <Route path="/faq" element={<Faq />} />

   {/* 404 Page */}
   <Route path="*" element={<NotFound />} />

      </Routes>
     
   
    <Footer/> 
    </>

   
     
   </>
    
  )
}

export default Routerpage;