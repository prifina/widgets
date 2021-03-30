/**
 * Entrypoint of the Remote Component.
 */

 import { App } from "./App";
 import React from "react";
 import ReactDOM from "react-dom";
 import "./src/styles/styles";
 import ToDoList from "./src/ToDoList";
 import ToDoList2 from "./src/ToDoList2";

 import './fonts/HomemadeApple-Regular.ttf';
 import './fonts/Roboto-Regular.ttf';

 var destination = document.querySelector("#container");

 
 ReactDOM.render (
     <div>
         <ToDoList2 />
     </div>,
     destination
 );
 

//export default App;
// import Hello from "./Hello";
// export default Hello;

export default App;
// import PC from "./PC";
// export default App; 