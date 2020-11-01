import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import Register from "./components/auth/Register"
//import AuthState from "./context/auth/AuthState"
import './App.css';
import AuthState from "./context/auth/AuthState";


const App = () => {
  return (
   <AuthState>
      <Router>
        <div className="App">
          
            <Register />
         
        </div>
      </Router>
      </AuthState>
  );
}

export default App;
