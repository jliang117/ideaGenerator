import React, { Component } from 'react';
import IdeaList from "./components/IdeaList";
import InputHeader from "./components/InputHeader"
import './App.css';
import { textAlign } from '@material-ui/system';

class App extends Component{
  render(){
    const centralDiv = {
      // display:""
      justifyContent:"center", 
      textAlign:"center",
      boxSizing:"border-box",
      position: "absolute",
      margin: "auto",
      top: "0",
      right: "0",
      bottom: "300px",
      left: "0",
      width: "1000px",
      height: "100px"
    }
    
    return (
      <div style={centralDiv}>
        <InputHeader/>
        <IdeaList/>
        </div>
        
      
    )
  }
}

export default App;
