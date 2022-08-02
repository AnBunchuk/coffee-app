import React from "react";
import Menu from "./components/Menu";
import Cup from "./components/Cup";
import './style.css';
import Modal from './components/Modal.js';

 


const App = () => {

  const [currentRecept, setCurrentRecept] = React.useState(null);
  const [statusWindow, setStatusWindow] = React.useState(null);
  let window="";

if(statusWindow){
  window = <Modal 
  currentRecept ={currentRecept}
  statusWindow = {statusWindow} ></Modal>
}
  return (
    <div className="wrapper">

      <Menu selectCurrentRecept={setCurrentRecept}
      setStatusWindow={setStatusWindow}
      statusWindow = {statusWindow}
       />
      <Cup currentRecept={currentRecept} setStatusWindow={setStatusWindow} statusWindow = {statusWindow}  />
{window}
     </div>
  )
};

export default App;
