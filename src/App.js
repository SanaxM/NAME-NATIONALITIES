import './App.css';
import Home from './screens/Home.js';
import Searched from './screens/Searched.js';
import {
  BrowserRouter as Router,
  Route,
  Routes 
} from "react-router-dom";

//app predicts nationality based on name


function App() {
  return (
    <Router>
      <div class='app'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/name/:term' element={<Searched/>}/>
        </Routes>
      </div>
    </Router>

  );
}

export default App;
