import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {  useParams } from 'react-router-dom'


const Details = () => {

  const [Pirate, setPirate] = useState()

  const { id } = useParams()


  useEffect(() => {
    console.log('teste id')
    console.log(id)
   
    axios.get(`http://127.0.0.1:5000/api/pirates/${id}`)
      .then((res) => {console.log(res.data)
        setPirate(res.data)
      })
      .catch((err => console.log(err)))
  }, [])

  return (
    <>
    <div className='formet'>
      
        <div className='pir'>
       {
        (Pirate) ?
       <>
        <div className="tete">
        <h1>{Pirate.name} </h1>
        
              </div>
          <div className='list'>
            
            <ul className="list-group">
                <div className='gauche'>
               <li className='l'><img src={Pirate.imageUrl} className='imagee' ></img></li>
               <li className='l'>{Pirate.catchFrase}</li>
               </div>
                <div className='About'>
                <h3>About</h3>
             <li className='l'> Position :{Pirate.position}</li>
            <li className='l' >  Treasure:{Pirate.CheetTreasureNumber}</li>
              <li className='l'>Peg leg:{(Pirate.isPegLeg)?'YES':'No'}</li>
              <li className='l'>Hook Hand :{(Pirate.isHookHand)?'YES':'NO'}</li>
             <li className='l' > Eye Patch :{(Pirate.isEyePatch)?'YES':'NO'}</li>
             </div>
             
            </ul></div> </> : <h3>LOODING....</h3>} 
      
        </div> 

    </div>
    </>
  )
}

export default Details