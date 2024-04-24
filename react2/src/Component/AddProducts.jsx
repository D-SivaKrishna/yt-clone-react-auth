import React, { useState } from "react";
import "../Styles/AddProducts.css"
import axios from "axios";
function AddProducts(){
    let[name,setname]=useState('')
    let[desc,setdesc]=useState('')
    let[address,setaddress]=useState('')
    let[likes,setlikes]=useState('')
    let[views,setviews]=useState('')
    let data={name,desc,address,likes,views}
    function addVideos(e){
        e.preventDefault();
        axios.post('http://localhost:2000/Videos',data)
        .then((suc)=>{
            console.log(suc);
            alert("Uploaded Successfully")
        })
        .catch((rej)=>{
            console.log(rej);
            alert("Not uploaded")
        })

    }

    return(
        <div className="Addproducts">

            <h1>Add The Item</h1>
            <form onSubmit={addVideos} action="">

                <label htmlFor="">Name :</label> <input value={name} onChange={(e)=>{setname(e.target.value)}} type="text" placeholder="Enter the Name"/>
                <label htmlFor="">Description :</label> <input value={desc} onChange={(e)=>{setdesc(e.target.value)}} type="text" placeholder="Enter the Description"/>
                <label htmlFor="">Address :</label> <input value={address} onChange={(e)=>{setaddress(e.target.value)}} type="text" placeholder="Enter the Address"/>
                <label htmlFor="">Likes :</label> <input value={likes} onChange={(e)=>{setlikes(e.target.value)}} type="number" />
                <label htmlFor="">Views :</label> <input value={views} onChange={(e)=>{setviews(e.target.value)}} type="number" />
                <button className="btn btn-outline-success">Upload</button>

            </form>

        </div>
    )
}
export default AddProducts;