import { useState } from "react";
import "../Styles/AdminLogin.css"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Adminlogin = () => {
    let [name,setname]=useState('')
    let [password,setpassword]=useState('')
    let navigate=useNavigate()

    function checkAdmin(){
        if(name==='abcd' && password==="143")
        {
            alert("Login Successful..!!");
            navigate('/adminhomepage')
        }
        else{
            alert("Invalid Credintials..!!");
        }
    }
    return (  
       <div className="AdminLogin">
        <form action="">
            <label htmlFor="">User Name :</label>

            <input value={name} onChange={(e)=>{setname(e.target.value)}} type="text" name="" id="" placeholder="Enter the Username"/>

            <label htmlFor="">Password :</label>

            <input value={password} onChange={(e)=>{setpassword(e.target.value)}} type="password" placeholder="Enter the Password"/>

            <button onClick={checkAdmin}>Login</button>
            <p>Are you new User?</p> <Link to ="/AdminSignUp">SignUp</Link>
        </form>
       </div>
    );
}
 
export default Adminlogin;