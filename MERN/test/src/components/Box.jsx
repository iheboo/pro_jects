import React, { useState } from 'react'

const Box = (props) => {
    const [color,setcolor]=useState('');
    const[height,setheight]=useState('');
    const [width,setwidth]=useState('');
    const creatbox=(e)=>{
        e.preventDefault();
        props.onNewBox( color,height,width );
        const newUser = { color, height, width };
        console.log("Welcome", newUser)
    }
  return (
    <div>
        <form onSubmit={creatbox}>
            <label >color</label>
            <input  onChange={ (e) => setcolor(e.target.value) } value={color}   />
            <label >height</label>
            <input onChange={ (e) => setheight(e.target.value) }  value={height} />
            <label >width</label>
            <input onChange={ (e) => setwidth(e.target.value) }  value={width} />
            <input type="submit" value="Create Box" />
        </form>
    </div>
  )
}

export default Box