import { useState } from "react";
import "../Styles/Userlogin.css"

const Userlogin = () => {
    let [name,setname]=useState('')
    let [password,setpassword]=useState('')
    function checkAdmin(){
        if(name==='abcd' && password==="123")
        {
            alert("Login Successful..!!");
        }
        else{
            alert("Invalid Credintials..!!");
        }
    }
    return (  
       <div className="UserLogin">
        <form action="">
            <label htmlFor="">User Name :</label>

            <input value={name} onChange={(e)=>{setname(e.target.value)}} type="text" name="" id="" placeholder="Enter the Username"/>

            <label htmlFor="">Password :</label>

            <input value={password} onChange={(e)=>{setpassword(e.target.value)}} type="password" placeholder="Enter the Password"/>

            <button onClick={checkAdmin}>Login</button>
        </form>
       </div>
    );
}
 
export default Userlogin;