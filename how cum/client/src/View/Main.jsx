import React from "react";
import Form from "../compement/Form";
import Dashbord from "../compement/Dashbord";
import { useState } from "react";
const Main=()=>{
   const [refrechstate,setRefrech]=useState(false)
   const refrech=()=>{setRefrech(!refrechstate)}
   return(
    <>
    <Form refrech={refrech}/>
    <Dashbord refrech={refrech} refreched={refrechstate}/>
    </>
   )

}
export default  Main