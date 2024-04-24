import React from "react";
import Landingpage from "./Component/Landingpage";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Adminlogin from "./Component/Adminlogin";
import Userlogin from "./Component/Userlogin";
import AdminSignUp from "./Component/AdminSignUp";
import AdminHomePage from "./Component/AdminHomePage";
import 'bootstrap/dist/css/bootstrap.min.css';
import Error from "./Component/Error";
function App () {
  return ( 
    <div className="app">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landingpage/>} />
        <Route path="/*" element={<Error/>}/>
        <Route path="/adminlogin" element={<Adminlogin/>} />
       <Route path="/userlogin" element={<Userlogin/>} />
       <Route path="/adminsignup" element={<AdminSignUp/>}/>
       <Route path="/adminhomepage/*" element={<AdminHomePage/>}/>
     
      </Routes>
      </BrowserRouter>
    </div>
   );
}
 
export default App;