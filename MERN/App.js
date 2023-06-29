import Box from './components/Box';
import './App.css';
import Display from './components/Display';
import {useState} from 'react';

function App() {
  const [box, setBox] = useState([{color:'red',height:'100px',width:'100px'},{color:'green',height:'100px',width:'100px'},{color:'blue',height:'100px',width:'100px'}]);
  const onNewBox = (color,height,width)=>{

    setBox([...box,{color:color,height:height,width:width}])
    
  }
  return (
    <div className="App">
      <>
      <Box onNewBox={onNewBox} />
      </>
      <Display play={box}/>
    </div>
  );
}

export default App;
