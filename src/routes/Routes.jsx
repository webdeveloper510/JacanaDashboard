import {HashRouter as Router, Route, Routes} from 'react-router-dom';
import Home from '../Component/dashboardhome/Home';
import Header from '../Component/dashboardheader/Header';
import Footer from '../Component/dashboardfooter/Footer';

const Routerpage =()=>{

  
  return(
  <>

  

    <Router>  

    <>
  
    <Header/>
   
    <Routes>
    <Route exact path="/"  element={ <Home/>} />    
    </Routes>
     
   
    <Footer/> 
    </>

   
    </Router>
     
   </>
    
  )
}

export default Routerpage;