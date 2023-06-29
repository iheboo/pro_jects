import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom'

const Create = (props) => {


  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [treasure, setTreasure] = useState("");
  const [piratecatch, setPiratecatch] = useState("");
  const [crewposition, setCrewposition] = useState("");
  const [pegleg, setPegleg] = useState(true);
  const [eyepatch, setEyepatch] = useState(true);
  const [hookhand, setHookhand] = useState(true);



  // !! For errors 

  const [errors, setErrors] = useState([])


  const nav = useNavigate()

  // !! Handle the form inputs
  const createPirate = (e) => {
    e.preventDefault()
    const newPirate = {
        name,
        image,
        treasure,
        piratecatch,
        crewposition,
        pegleg,
        eyepatch,
        hookhand
    }
    //  console.log(newNote)
    // take the object and send it to the server => DB
    axios.post("http://localhost:8000/api/pirates", newPirate)

       .then((response) => {
        console.log(response.data)
        console.log(" ✔✔ client success")
        nav("/pirates")
       })
       .catch(err => {
        console.log((" ✂✂ client error"))
        console.log(err.response.data.errors)
        const errorResponse = err.response.data.errors;    //!!!  Get the errors from err.response.data
        const errorArr = []        //!!!  Define a temp error array  to push message in  
        for (const key of Object.keys(errorResponse)) {    //!!  loop throught all errors and get the message 
          console.log("=======", key)
          errorArr.push(errorResponse[key].message)
        }
        //!!! set Errors 
        setErrors(errorArr)
      })

  }



  return (


    <div  className="container col-4" >
      {/* {JSON.stringify(errors)} */}
     
      <div>
        {errors.map((err, idx) => <p style={{ color: "white" }} key={idx} >{err}</p>)}
      </div>
      <button className="btn btn-success"> <Link  to={"/pirates"}  style={{textDecoration:"none" , color:"white"  }} > Crew Board </Link>   </button>
      <h2> Add Pirate </h2>

      <form onSubmit={(e) => {createPirate(e)}} >
                <div className="form-group  " >
                    <label > Name:  </label>
                    <input className="form-control" type="text" onChange={(e) => setName(e.target.value)} value={name} />
                </div>
                <div className="form-group  " >
                    <label > Image:  </label>
                    <input className="form-control" type="text" onChange={(e) => setImage(e.target.value)} value={image} />
                </div>
                <div className="form-group  " >
                    <label > Treasure:  </label>
                    <input className="form-control" type="number"  min="0"   onChange={(e) => setTreasure(e.target.value)} value={treasure} />
                </div>
                <div className="form-group  " >
                    <label > Pirate Catch:  </label>
                    <input className="form-control" type="text" onChange={(e) => setPiratecatch(e.target.value)} value={piratecatch} />
                </div>

                
                <div className="form-group  " >
                    <label> Crew Position </label>
                    <select onChange={(e) => setCrewposition(e.target.value)} value={crewposition}> 
                   <option value="First Mate">First Mate</option>
                   <option value="Quarter Maste">Quarter Master</option>
                   <option value="Bootswain"> Bootswain </option>
                   <option value="Powder Monkey"> Powder Monkey</option>
                   </select>
                </div>
                <div className="form-group  " >
                 <label > Peg Leg : </label>
                  <input  className="form-control"      type="checkbox"      onChange={(e) => setPegleg(e.target.checked)} checked={pegleg} />
                </div>
                <div className="form-group  " >
                 <label > Eye Patch : </label>
                  <input  className="form-control"      type="checkbox"          onChange={(e) => setEyepatch(e.target.checked)} checked={eyepatch} />
                </div>
                <div className="form-group  " >
                 <label > Hook Hand : </label>
                  <input  className="form-control"      type="checkbox"            onChange={(e) => setHookhand(e.target.checked)} checked={hookhand} />
                </div>                         
                <div>
                      <button className="btn btn-success" > Add Pirate </button>     
                </div>
            </form>
          
    </div>
  )
}

export default Create