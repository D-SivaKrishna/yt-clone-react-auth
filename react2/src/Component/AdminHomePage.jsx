import React from "react";
import AdminNavbar from "./AdminNavbar";
import { Routes,Route } from "react-router-dom";
import AddProducts from "./AddProducts";
import ViewProducts from "./ViewProducts";
import EditProd from "./EditProd";

const AdminHomePage = () => {
    return ( 
        <div className="AdminHomePage">
            <AdminNavbar/>
            <Routes>
                <Route path="/" element={<ViewProducts/>}/>
               <Route  path="/additem" element={<AddProducts/>}/>
               <Route  path="/editItem/:id" element={<EditProd/>}/>
            </Routes>
        </div>
     );
}
 
export default AdminHomePage;