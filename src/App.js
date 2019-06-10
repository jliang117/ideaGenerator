import React, { Component, useState } from 'react';
import IdeaList, {Idea} from "./components/IdeaList";
import InputHeader from "./components/InputHeader"
import logo from './ideasLogo.png';
import Typography from "@material-ui/core/Typography"
import './App.css';



const centralDiv = {
  justifyContent: "center",
  textAlign: "center",
  boxSizing: "border-box",
  position: "absolute",
  margin: "auto",
  top: "0",
  right: "0",
  bottom: "500px",
  left: "0",
  maxWidth: "1000px",
  height: "100px"
}

const initList = [
  // <Idea title="test" desc ="desc" author="author"/>,
]

const initInput = {
  name:"",
  desc:"",
  author:"",
}

const App = () => {
  const [list,setList] = useState(initList)
  const [ideaHeader,setIdea] = useState(initInput)

  const handleChange = event => {
    setIdea({
      ...ideaHeader,
      [event.target.id]: event.target.value
    })
  }

  const addIdea = event => {
    if(ideaHeader.desc){
      setList(list.concat(<Idea title={ideaHeader.name} 
        desc={ideaHeader.desc} author={ideaHeader.author}/>))
      setIdea(initInput)
    }
  }

    return (
      <div style={centralDiv}>
        <Typography variant="h4">Add an idea so others can see!</Typography>
        <img src={logo}></img>
        <InputHeader 
        name={ideaHeader.name} 
        desc={ideaHeader.desc} 
        author={ideaHeader.author}
        addIdea={addIdea}
        handleChange={handleChange}
        />
        <IdeaList ideaList={list} />
      </div>
    )
}

export default App;
