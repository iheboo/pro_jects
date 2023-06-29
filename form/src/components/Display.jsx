import React from 'react'



const Display = props => {
  return (
    <>
    <p>{props.userfname}</p>
    <p>{props.userlname}</p>
    {props.email}
    {props.passeword}
    {props.cpasseword}
    </>
  )
}

export default Display