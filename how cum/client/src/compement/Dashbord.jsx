import React from "react";
import { useEffect,useState } from "react";
import axios from 'axios'
import { Link } from 'react-router-dom'
const Dashbord=(props)=>{
    const[allpirates,setAllpirates]=useState([]);
    const [refrechstate,setRefrech]=useState(false)
   const refrech=()=>{setRefrech(!refrechstate)}
    useEffect(()=>{axios.get("http://127.0.0.1:5000/api/pirates")
    .then(res=>{console.log(res.data);
       setAllpirates(res.data)})
       .catch(err=>{console.log(err);})

     },[refrechstate])
    const delethander=(id)=>{
        axios.delete(`http://127.0.0.1:5000/api/pirates/${id}`)
        .then(res=>{refrech()})
        .catch(err=>{console.log(err)})
    }
return (
    <div className="for">
    <div className="card">
        <div className="tete">
            <h1>Pirate Crew</h1>
            <Link to ={"/pirates/new"} className="but1">Add Pirates</Link>
        </div>
    {allpirates.map((pirate,index)=>{return (<div key={index}>
        <div className="Pos">
        <div className="imageee">
        <img src="{pirates.imageUrl}" />
        </div>
        <div className="cardd">
          <h3>{pirate.name}</h3>
          <Link to ={("/pirates/" + pirate._id)} className="bu2">View Pirate</Link>
          
        <button className="but3"onClick={(e)=>{delethander(pirate._id)}}>Walk the plank </button>
        </div>
        
        </div>
        </div>)
    })}
    </div>
    </div>
)

}
export default Dashbord