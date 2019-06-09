import React, { Component, useState } from 'react';
import IdeaList, {Idea} from "./components/IdeaList";
import InputHeader from "./components/InputHeader"
import './App.css';


const initList = [
  <Idea title="test" desc ="desc" author="author"/>,
]

const centralDiv = {
  justifyContent: "center",
  textAlign: "center",
  boxSizing: "border-box",
  position: "absolute",
  margin: "auto",
  top: "0",
  right: "0",
  bottom: "300px",
  left: "0",
  maxWidth: "1000px",
  height: "100px"
}

const App = () => {
  const [list,setList] = useState(initList)

    return (
      <div style={centralDiv}>
        <InputHeader />
        <IdeaList ideaList={list} />
      </div>
    )
}

export default App;
