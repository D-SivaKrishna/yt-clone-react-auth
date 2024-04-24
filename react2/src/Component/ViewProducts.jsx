import axios from "axios";
import React,{useEffect, useState} from "react";
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';
import '../Styles/ViewProducts.css'
import { useNavigate } from "react-router-dom";



const ViewProducts = () => {
    let [data,setdata]=useState([])
    let navigate=useNavigate();

    useEffect(()=>{
        axios.get('http://localhost:2000/Videos')
        .then((res)=>{
            console.log(res.data);
            setdata(res.data)
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])

    let remove=(id,name)=>{
        axios.delete(`http://localhost:2000/Videos/${id}`)
        .then((res)=>{
            alert(`${name} Got Deleted`)
        })
        .catch((err)=>{
            alert("Data Not Found")
        })
    }
    
    function editItem(id){
        navigate(`/adminhomepage/editItem/${id}`)
    }
    return ( 
            <div className="ViewProducts">
            {data.map((x)=>{
                return(
                    <div className="disp_vid">

                       <div className="disp_if">
                     
                        <iframe width="560" height="315" src={x.address} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                       </div>
                        <div className="disc_if">
                            <h3>{x.name}</h3>
                            <span>{x.views}k Views <b>*</b> </span>
                            <div className="likes">
                                <button id="tup"><ThumbUpOutlinedIcon/>{x.likes}k</button><button id="tnup" ><ThumbDownOffAltOutlinedIcon/></button>
                                <p>{x.desc}</p>
                            </div>
                            

                            <button onClick={()=>{editItem(x.id)}}>Edit</button>
                            <button onClick={()=>{remove(x.id,x.name)}} >Delete</button>
                        </div>
                    </div>

                )
            })}
            </div>
     );
}
 
export default ViewProducts;