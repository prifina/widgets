/**
 * webpack-dev-server entry point for debugging.
 * This file is not bundled with the library during the build process.
 */

import App from "./App";
import React from "react";

import { createRoot } from 'react-dom/client';
import { PrifinaProvider, PrifinaContext } from "@prifina/hooks-v2";


const LocalComponent = (props) => {

  return (
    <PrifinaProvider activeApp={"WIDGET"} stage={"dev"} Context={PrifinaContext}>
      <div style={{ border: "1px solid black", margin: "100px", height: "600px", "width": "300px" }}>
        <App {...props} />
      </div>
    </PrifinaProvider>

  );
};
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<LocalComponent />);

/* 
// react 18
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);

*/
