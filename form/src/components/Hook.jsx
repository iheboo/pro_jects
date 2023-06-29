import React , {useState} from 'react'


const Hook = (props) => {
    const [userfname,setUserfname]=useState("");
    const [userlname,setUserlname]=useState("");
    const [email,setEmail]=useState("");
    const [passeword,setPasseword]=useState("");
    const [cpasseword,setCpasseword]=useState("");
    const createUser=(ev) => {
        ev.preventDefault();
        // this for of the retare of update /stop refrech
        const user={userfname,userlname,email,passeword,cpasseword};
        console.log("welcome",user)
    }
  return (
    <form onSubmit={createUser}>
    <div>
        <label >userfristname:</label>
        <input  onChange={(ev) => setUserfname(ev.target.value)} value={userfname}/>
        {/* / value for rest in the input when pres the button  */}
    </div>
    <div>
        <label >userlastname:</label>
        <input  onChange={(ev) => setUserlname(ev.target.value)} value={userlname}/>
        {/* / value for rest in the input when pres the button  */}
    </div>
    <div>
        <label >email:</label>
        <input  onChange={(ev) => setEmail(ev.target.value)} value={email}/>
    </div>
    <div>
        <label >passeword:</label>
        <input  onChange={(ev) => setPasseword(ev.target.value) } value={passeword}/>
    </div>
    <div>
        <label >confirm passeword:</label>
        <input  onChange={(ev) => setCpasseword(ev.target.value) } value={cpasseword}/>
    </div>
    <input type="submit" value="create User" />
        {/* <p>username:::::{userfname}</p>
        <p>username:::::{userlname}</p>
        <p>email:::::{email}</p>
        <p>passeword::::::{passeword}</p>
        <p>passeword::::::{cpasseword}</p> */}

</form>
  )
}

export default Hook