import './App.css';
import {Routes,Route} from 'react-router-dom'
import Dashbord from './compement/Dashbord';
import Form from './compement/Form';
import Details from './compement/Dashbord';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/pirates' element={<Dashbord/>}/>
        <Route path='/pirates/new' element={<Form/>}/>
        <Route path='/pirates/:id' element={<Details/>}/>
      </Routes>
    </div>
  );
}

export default App;

