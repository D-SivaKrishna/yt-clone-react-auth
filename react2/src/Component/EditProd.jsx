import React, { useEffect, useState } from "react";
import "../Styles/EditProd.css"
import { useParams } from "react-router-dom";
import axios from "axios";


function EditProd(){
    let[name,setname]=useState('')
    let[desc,setdesc]=useState('')
    let[address,setaddress]=useState('')
    let[likes,setlikes]=useState('')
    let[views,setviews]=useState('')

    let data={name,desc,address,likes,views}
    let param=useParams()
    console.log(param.id);

    useEffect(()=>{
        axios.get(`http://localhost:2000/Videos/${param.id}`)
        .then((res)=>{
            console.log(res.data);
            setname(res.data.name)
            setaddress(res.data.address)
            setdesc(res.data.desc)
            setlikes(res.data.likes)
            setviews(res.data.views)
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])

    function Editvid(e){
        e.preventDefault();
        axios.put(`http://localhost:2000/Videos/${param.id}`,data)
        .then((res)=>{
            alert("Video Edited Successfully..!!")
        })
        .catch((err)=>{
            alert("Not Edited Video...!!")
        })

    }

    return(
        <div className="EditProd">
             <h1 style={{'color':'white'}}>Delete the Item</h1>
            <form onSubmit={Editvid} action="">
                   
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
export default EditProd;