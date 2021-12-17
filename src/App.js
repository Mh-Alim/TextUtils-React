
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from 'react'
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message,type)=>{
    setAlert({
      msg : message,
      type : type
    })
  }

  const toggleMode = ()=>{
    if(mode==='dark'){
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Dark mode has enabled","success");
      document.title = "textUtils-Light Mode"
      // setTimeout(() => {
      //   document.title = "Text utils is amazing"
      // }, 2000);
      
      // setTimeout(() => {
      //   document.title = "Install textUtils Now"
      // }, 1500);
      
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      document.title = "textUtils - Dark Mode"
    }
  }
  return (
    <>
    <Router>
      <Navbar title ="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert="This is alert"/>
      
      <div className = "container my-3">
        
      <Routes>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/" element={<TextForm heading="Enter the text to analyze" mode = {mode}/>}/>
          
      </Routes>
     
            
      </div>
      </Router>
    </>
  );
}

export default App;
