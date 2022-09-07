import React from "react";

import {APP_ID} from "./environment";
import {usePrifina} from "@prifina/hooks-v2"
 const App = (props) => {
 
  console.log("APP PROPS ",props)

  console.log(usePrifina());

  return (
    <div>Your {APP_ID} App here</div>
  );
};


export default App;