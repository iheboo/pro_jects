import React from "react";
import { useState } from "react";
import axios from 'axios'
import { Link } from "react-router-dom";
const Form=(props)=>{
    
    const [name,setName]=useState('');
    const [imageUrl,setImageUrl]=useState('');
    const [position,setPosition]=useState('Capitin');
    const [catchFrase,setCatchFrase]=useState('');
    const [cheetTreasureNumbre,setCheetTreasureNumbre]=useState(0);
    const [isPegLeg,setIsPegLeg]=useState(true);
    const [isHookHand,setIsHookHand]=useState(true);
    const [isEyePatch,setIsEyePatch]=useState(true);
    const [errors, setErrors] = useState({});
  const [refrechstate,setRefrech]=useState(false)
  const refrech=()=>{setRefrech(!refrechstate)}

    const handleIsPegLegCheckboxChange = () => {
        setIsPegLeg(!isPegLeg);
      };
    
      const handleisEyePatchCheckboxChange = () => {
        setIsEyePatch(!isEyePatch);
      };
    
      const handleisHookHandCheckboxChange = () => {
        setIsHookHand(!isHookHand);
      };

    const crea=(e)=>{
        e.preventDefault();
        const newPirate={name,imageUrl,position,catchFrase,cheetTreasureNumbre,isPegLeg,isHookHand,isEyePatch};
        // console.log("teste")
        // console.log(newPirate)
        axios.post("http://127.0.0.1:5000/api/pirates",newPirate)
        .then(res=>{
          console.log("-- then ---");
          console.log(newPirate);
          console.log(res);
          setName('');
        setImageUrl('');
        setPosition('Capitin');
        setCatchFrase('');
        setCheetTreasureNumbre(0);
            setIsPegLeg(true);
             setIsHookHand(true); 
             setIsEyePatch(true);
             refrech()})
        .catch(err=> {
          console.log("************",err.response.data.errors);
            const errResponse = err.response.data.errors
            const errObj = {};
                for (const key of Object.keys(errResponse)) {
                  errObj[key] = errResponse[key].message
                }
                console.log(err.res)
                setErrors(errObj);
                  console.log("Error creating pirate:");
              });
    }
    return(
        <>
        <div className="tete">
            <h1>Add pirate</h1>
            <Link to ={"/pirates"} className="but1">Crew Board</Link>
          {/* {errors.map((err,idx)=><><p key={idx}>{err}</p> <br /> </>)} */}
        </div>
        <form onSubmit={(e)=>{crea(e)}} >
       
        
        <div className="forme">
        <div className="carbody">
       <div className="form-group col-md-6">
          <label >Pirate Name:</label><br />
          <input type="text" className="form-control"  onChange={e => { setName(e.target.value) }} value={name} />
     
       
        </div>
     
        <div className="form-group col-md-6">
          <label >Img URL:</label> <br />
          <input type="text" className="form-control"  onChange={e => { setImageUrl(e.target.value) }} /><br />
           <p>{errors.imageUrl}</p> 
        </div>
       
        
        <div className="form-group col-md-6">
          <label  ># of Treasures Chests :</label><br />
          <input type="number"  onChange={e => { setCheetTreasureNumbre(e.target.value) }} /><br />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="exampleInputEmail1">Phrase:</label> <br />
          <input type="text"   onChange={e => { setCatchFrase(e.target.value) }} value={catchFrase} /><br />
          <p>{errors.catchFrase}</p> 
        </div>
        </div>
        <div className="cardbody2">
        <div className="form-group col-md-6">
          <label >Crew Position:</label><br />
          <select onChange={e => { console.log(e.target.value);setPosition(e.target.value) }} value={position} > 
     
          <option value="Capitin">Capitin</option>
         <option value="First Mate">First Mate</option>
           <option value="quarter master">quarter master</option>
          <option value="Boatswain">Boatswain</option>
             <option value="Powder Monkey">Powder Monkey </option>
              </select><br />
        </div>
        <div className="form-group col-md-6">
        <div>
          <label>
          <input
          type="checkbox"
          checked={isPegLeg}
          onChange={handleIsPegLegCheckboxChange}
          />
        Peg Leg
      </label>
    </div>
    <div>
        <label>
          <input
            type="checkbox"
            checked={isHookHand}
            onChange={handleisHookHandCheckboxChange}
          />
          Hook Hand
        </label>
      </div>
      <div>
          <label>
            <input
              type="checkbox"
              checked={isEyePatch}
              onChange={handleisEyePatchCheckboxChange}
            />
            Eye Patch
          </label>
        </div>
        </div>

        <input className="btn btn-primary" type="submit" value="Add new Pirate" />
        </div>
        </div>
       
        </form>
        
        </>
    )

}
export default Form;