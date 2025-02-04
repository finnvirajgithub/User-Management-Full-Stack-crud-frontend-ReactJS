
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Components/navbar'
import Home from './Pages/home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Adduser from './Users/adduser';
import Edituser from './Users/edituser';

function App() {
  

  return (
    
      <div>
          <Router>
          <Navbar />
            <Routes>
              <Route exact path="/" element={<Home />}/>
              <Route exact path="/adduser" element={<Adduser />}/>
              <Route exact path='/edituser/:id' element={<Edituser />}/>
            </Routes>
          
          </Router>
          
      </div>

    
  )
}

export default App
