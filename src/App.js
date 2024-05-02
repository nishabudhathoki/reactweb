
import './App.css';
import Navbar from './componts/Navbar';
import Home from './componts/Home';
import About from './componts/About';
import {Routes, Route} from 'react-router-dom';
  
function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </div>
    );
}

export default App;
