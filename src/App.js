import { useState, useEffect, Fragment } from 'react';
import Loader from './component/loader/loader.component';
import Home from './component/home/home.component';
import Navbar from './Routes/Navabar/navbar.component';
function App() {
  const [Loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout (() => {
      setLoading(false)
    }, 2500);
  })
  return (
    <div className="App">
    {Loading === true ? 
      <Loader/> :
      <div>
      <Navbar/>
      <Home/>
      </div>
      
    }
   
    </div>
  );
}

export default App;
