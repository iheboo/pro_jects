
import './App.css';

import { Routes, Route, Link } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Main from './components/Main';
import Create from './components/Create';
import ShowOne from './components/ShowOne';

function App() {
  return (
    <div className="App">

      <Routes>
       <Route element={<LandingPage />} path="/" />
        <Route element={<Main />} path="/pirates" />
        <Route element={<Create />} path="/pirate/new"/>
        <Route element={<ShowOne />} path="/pirate/:id"/>
      </Routes>

    </div>
  );
}

export default App;
