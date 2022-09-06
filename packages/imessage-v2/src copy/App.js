import React from "react";
import IM from "./IMessage";


import {StoreProvider as IMProvider} from "./IMStore";
import {APP_ID} from "./environment";
 const App = (props) => {
  const componentProps={
    appId:APP_ID
  }

  const appType="app";
  props={...props,appType};
  console.log("APP PROPS ",props)


  return (
    <IMProvider componentProps={componentProps}>
      <IM {...props} />
  </IMProvider>
  );
};


export default App;