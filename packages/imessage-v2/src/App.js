import React from "react";
import { IMessage } from "@prifina-widgets/messaging-components";


import { StoreProvider as IMProvider } from "@prifina-widgets/messaging-components";
import { APP_ID, APP_VERSION } from "./environment";
const App = (props) => {
  const componentProps = {
    appId: APP_ID
  }

  const appType = "widget";
  props = { ...props, appType };
  console.log("APP VERSION ", APP_VERSION);
  console.log("APP PROPS ", props)


  return (
    <IMProvider componentProps={componentProps}>
      <IMessage {...props} />
    </IMProvider>
  );
};


export default App;